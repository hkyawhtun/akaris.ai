import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading",
  );

  useEffect(() => {
    if (sessionId) {
      // Optionally verify the session with backend
      setStatus("success");
    } else {
      setStatus("error");
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        {status === "loading" && <p>Loading...</p>}
        {status === "success" && (
          <>
            <h1 className="text-2xl font-bold text-green-600 mb-4">
              Payment Successful!
            </h1>
            <p className="mb-4">
              Thank you for your payment. Your course access will be activated
              soon.
            </p>
            <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
              Go Home
            </a>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Payment Error
            </h1>
            <p className="mb-4">
              There was an issue with your payment. Please contact support.
            </p>
            <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
              Go Home
            </a>
          </>
        )}
      </div>
    </div>
  );
}
