import React from 'react'

function Final() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-10 text-center max-w-md">
        {/* Correct SVG Code */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Congratulations!
        </h1>
        <p className="text-gray-600 mb-4">
          Your Account has been successfully created.
        </p>
        <a href="/">
        <button
          onClick={() => alert("Proceeding...")}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Close
        </button>
        </a>
      </div>
    </div>
  );
};
export default Final
