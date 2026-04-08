import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProfilePage() {
  const { profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    photoURL: "",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name,
        photoURL: profile.photoURL || "",
      });
    }
  }, [profile]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    setError(null);

    try {
      await updateProfile({
        name: form.name,
        photoURL: form.photoURL,
      });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to update profile");
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(profile.name);

  return (
    <main className="min-h-screen bg-navy-950 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gold-400 hover:text-gold-300 mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">My Profile</h1>
          <p className="text-slate-400">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-navy-900 border border-navy-800 rounded-2xl p-8">
          {/* Current Avatar */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-navy-800">
            {profile.photoURL ? (
              <img
                src={profile.photoURL}
                alt={profile.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center text-navy-950 font-bold text-2xl">
                {initials}
              </div>
            )}
            <div>
              <p className="text-slate-400 text-sm">Account Status</p>
              <p className="text-white font-bold text-lg">{profile.name}</p>
              <p className="text-slate-400 text-sm">{profile.email}</p>
            </div>
          </div>

          {/* Edit Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-slate-300 text-sm font-medium"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Avatar URL */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="photoURL"
                className="text-slate-300 text-sm font-medium"
              >
                Avatar URL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                type="url"
                value={form.photoURL}
                onChange={handleChange}
                className="bg-navy-950 border border-navy-700 focus:border-gold-500/60 text-white rounded-lg px-4 py-3 text-sm outline-none transition-colors"
                placeholder="https://example.com/avatar.jpg"
              />
              <p className="text-slate-500 text-xs">
                Enter the full URL of your profile picture (HTTPS)
              </p>
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            {status === "success" && (
              <p className="text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3">
                ✓ Profile updated successfully!
              </p>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={status === "saving"}
                className="flex-1 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-navy-950 font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                {status === "saving" ? "Saving…" : "Save Changes"}
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
