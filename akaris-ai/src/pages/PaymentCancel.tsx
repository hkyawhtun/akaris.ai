export default function PaymentCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">
          Payment Cancelled
        </h1>
        <p className="mb-4">
          Your payment was cancelled. You can try again anytime.
        </p>
        <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go Home
        </a>
      </div>
    </div>
  );
}
