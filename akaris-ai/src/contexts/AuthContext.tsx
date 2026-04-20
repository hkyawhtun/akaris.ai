import { createContext, useEffect, useState, type ReactNode } from "react";
import {
  type User as FirebaseUser,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export interface UserProfile {
  uid: string;
  email: string;
  name: string;
  photoURL?: string;
  createdAt: Date;
  lastLogin: Date;
}

interface AuthContextType {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<UserProfile>) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Inside AuthProvider
  const syncWithBackend = async (firebaseUser: FirebaseUser) => {
    try {
      const idToken = await firebaseUser.getIdToken();

      // Replace with your actual backend URL
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "api/users/sync",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Backend sync failed");
      }

      const dbUser = await response.json();
      console.log("Synced with MySQL:", dbUser);
      return dbUser;
    } catch (err) {
      console.error("Error syncing with backend:", err);
    }
  };

  // Fetch user profile from Firestore
  const fetchUserProfile = async (firebaseUser: FirebaseUser) => {
    try {
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        setProfile({
          uid: firebaseUser.uid,
          email: firebaseUser.email || "",
          name: data.name || firebaseUser.displayName || "User",
          photoURL: data.photoURL || firebaseUser.photoURL || undefined,
          createdAt: data.createdAt?.toDate() || new Date(),
          lastLogin: data.lastLogin?.toDate() || new Date(),
        });
        // Update lastLogin timestamp
        await updateDoc(doc(db, "users", firebaseUser.uid), {
          lastLogin: Timestamp.now(),
        });

        await syncWithBackend(firebaseUser);
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
    }
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setLoading(true);
      setError(null);
      if (firebaseUser) {
        setUser(firebaseUser);
        await fetchUserProfile(firebaseUser);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const firebaseUser = result.user;

      // Create user profile in Firestore
      await setDoc(doc(db, "users", firebaseUser.uid), {
        email,
        name,
        photoURL: "",
        createdAt: Timestamp.now(),
        lastLogin: Timestamp.now(),
      });

      // Fetch and set profile
      await fetchUserProfile(firebaseUser);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Signup failed";
      setError(message);
      throw err;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const result = await signInWithEmailAndPassword(auth, email, password);
      await fetchUserProfile(result.user);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      setError(message);
      throw err;
    }
  };

  const loginWithGoogle = async () => {
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // Check if user profile exists, if not create it
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", firebaseUser.uid), {
          email: firebaseUser.email,
          name: firebaseUser.displayName || "User",
          photoURL: firebaseUser.photoURL || "",
          createdAt: Timestamp.now(),
          lastLogin: Timestamp.now(),
        });
      } else {
        // Update lastLogin
        await updateDoc(doc(db, "users", firebaseUser.uid), {
          lastLogin: Timestamp.now(),
        });
      }

      await fetchUserProfile(firebaseUser);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Google login failed";
      setError(message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await signOut(auth);
      setUser(null);
      setProfile(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Logout failed";
      setError(message);
      throw err;
    }
  };

  const updateProfile = async (updates: Partial<UserProfile>) => {
    if (!user) throw new Error("No user logged in");
    try {
      setError(null);
      await updateDoc(doc(db, "users", user.uid), {
        ...updates,
        lastLogin: Timestamp.now(),
      });
      await fetchUserProfile(user);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Profile update failed";
      setError(message);
      throw err;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        error,
        signup,
        login,
        loginWithGoogle,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
