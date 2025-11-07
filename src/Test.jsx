export default function Test() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50 text-gray-900">
      <div className="rounded-xl border border-black/10 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Test Page</h1>
        <p className="mt-2 text-gray-700">If you can see this, routing works correctly.</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">Go to Home</a>
      </div>
    </div>
  );
}
