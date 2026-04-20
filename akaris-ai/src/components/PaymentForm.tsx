import { useState, useRef, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

type PaymentType = "stripe" | "manual";
type Status = "idle" | "loading" | "success" | "error";

export default function PaymentForm() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("serviceId") || "";
  const serviceName = searchParams.get("serviceName") || "";
  const priceStr = searchParams.get("price") || "0";
  const price = parseFloat(priceStr);

  const authContext = useContext(AuthContext);
  if (!authContext) return <div>Loading...</div>;
  const { user } = authContext;
  const [paymentType, setPaymentType] = useState<PaymentType>("stripe");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // Stripe fields
  const [currency, setCurrency] = useState("aud");

  // Manual fields
  const [bankType, setBankType] = useState("");
  const [payType, setPayType] = useState("");
  const [amountPaid, setAmountPaid] = useState(price.toString());
  const fileRef = useRef<HTMLInputElement>(null);

  const handleStripePayment = async () => {
    if (!user) return;
    setStatus("loading");
    setError("");
    try {
      const idToken = await user.getIdToken();
      const response = await fetch(
        "http://localhost:5000/api/enquiries/stripe/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            serviceId,
            price,
            serviceName,
            currency,
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to create session");
      const data = await response.json();
      window.location.href = data.url; // Redirect to Stripe
    } catch (err: any) {
      setError(err.message);
      setStatus("error");
    }
  };

  const handleManualPayment = async () => {
    if (!user || !fileRef.current?.files?.[0]) return;
    setStatus("loading");
    setError("");
    try {
      const idToken = await user.getIdToken();
      const formData = new FormData();
      formData.append("serviceId", serviceId);
      formData.append("amountPaid", amountPaid);
      formData.append("bankType", bankType);
      formData.append("payType", payType);
      formData.append("receipt", fileRef.current.files[0]);

      const response = await fetch(
        "http://localhost:5000/api/enquiries/manual",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
          body: formData,
        },
      );
      if (!response.ok) throw new Error("Failed to submit manual payment");
      setStatus("success");
      // setTimeout(() => navigate back or something, 2000);
    } catch (err: any) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Complete Payment for {serviceName}
        </h2>

        {/* Payment Type Tabs */}
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 ${paymentType === "stripe" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setPaymentType("stripe")}
          >
            Stripe Payment
          </button>
          <button
            className={`flex-1 py-2 ${paymentType === "manual" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setPaymentType("manual")}
          >
            Manual Payment
          </button>
        </div>

        {paymentType === "stripe" && (
          <div>
            <label className="block mb-2">
              Currency:
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="aud">AUD</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
              </select>
            </label>
            <p className="mb-4">
              Amount: {price} {currency.toUpperCase()}
            </p>
            <button
              onClick={handleStripePayment}
              disabled={status === "loading"}
              className="w-full bg-blue-500 text-white py-2 rounded disabled:opacity-50"
            >
              {status === "loading" ? "Processing..." : "Pay with Stripe"}
            </button>
          </div>
        )}

        {paymentType === "manual" && (
          <div>
            <label className="block mb-2">
              Bank Type:
              <select
                value={bankType}
                onChange={(e) => setBankType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Bank</option>
                <option value="AYA">AYA</option>
                <option value="KBZ">KBZ</option>
                <option value="CB">CB</option>
              </select>
            </label>
            <label className="block mb-2">
              Pay Type:
              <select
                value={payType}
                onChange={(e) => setPayType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Pay Type</option>
                <option value="BANK_ACCOUNT">Bank Account</option>
                <option value="PAY">Pay (e.g., KBZ Pay)</option>
              </select>
            </label>
            <label className="block mb-2">
              Amount Paid:
              <input
                type="number"
                value={amountPaid}
                onChange={(e) => setAmountPaid(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </label>
            <label className="block mb-2">
              Receipt:
              <input
                type="file"
                ref={fileRef}
                accept="image/*,.pdf"
                className="w-full p-2 border rounded"
              />
            </label>
            <button
              onClick={handleManualPayment}
              disabled={
                status === "loading" ||
                !bankType ||
                !payType ||
                !amountPaid ||
                !fileRef.current?.files?.[0]
              }
              className="w-full bg-green-500 text-white py-2 rounded disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit Manual Payment"}
            </button>
          </div>
        )}

        {status === "success" && (
          <p className="text-green-500 mt-4">Payment submitted successfully!</p>
        )}
        {status === "error" && <p className="text-red-500 mt-4">{error}</p>}

        <button
          onClick={() => window.history.back()}
          className="mt-4 text-gray-500 underline"
        >
          Back
        </button>
      </div>
    </div>
  );
}
