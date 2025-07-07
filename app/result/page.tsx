// app/result/page.tsx

import React from 'react';

export default function ResultPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">✨ Your Fantasy Image is Ready!</h1>
        <p className="mb-6">Here is your AI-generated fantasy world:</p>
        <img
          src="/generated-image.jpg" // Replace with dynamic URL if needed
          alt="Your Fantasy"
          className="max-w-full h-auto rounded shadow-lg mx-auto"
        />
        <p className="mt-4 text-sm text-gray-600">Want to try again? Go back and take the quiz!</p>
      </div>
    </div>
  );
}
