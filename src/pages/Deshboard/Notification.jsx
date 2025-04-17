import React from 'react';

function Notification({ message = "There are no notifications at the moment." }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center text-center animate-fade-in">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400 mb-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          role="img"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"
          />
        </svg>
        <p className="text-gray-500 text-lg font-medium" role="status" aria-live="polite">
          {message}
        </p>
      </div>
    </div>
  );
}

export default Notification;
