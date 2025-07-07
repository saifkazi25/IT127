'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ResultContent() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get('image');

  if (!imageUrl) return <p className="text-center text-red-600">No image found.</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">🌌 Your Fantasy Awaits</h1>
      <img
        src={imageUrl}
        alt="Your Fantasy Image"
        className="rounded-lg shadow-lg max-w-full h-auto"
      />
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading image...</div>}>
      <ResultContent />
    </Suspense>
  );
}

