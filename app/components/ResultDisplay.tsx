"use client";

import React from "react";

export default function ResultDisplay() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">🌟 Your Dream World Awaits</h2>
      <p className="mb-6">Here’s what your inner fantasy looks like:</p>

      {/* Placeholder Image */}
      <div className="border border-gray-300 p-4 rounded">
        <img
          src="/placeholder-image.png"
          alt="AI Fantasy Result"
          className="mx-auto rounded-lg max-w-full h-auto"
        />
      </div>

      {/* Back or Share Options */}
      <div className="mt-6">
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Try Again
        </button>
      </div>
    </div>
  );
}
