"use client";

import { useSearchParams } from "next/navigation";

export default function ResultDisplay() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("url");

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">✨ Your Fantasy Image ✨</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Fantasy Result" className="mx-auto max-w-full rounded-lg shadow-lg" />
      ) : (
        <p>Loading your image...</p>
      )}
    </div>
  );
}
