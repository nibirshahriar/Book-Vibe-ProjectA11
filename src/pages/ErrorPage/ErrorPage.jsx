import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-gray-800">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mt-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
