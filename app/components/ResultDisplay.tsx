"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function ResultDisplay() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("url");

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">✨ Your Fantasy Awaits ✨</h1>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Your fantasy"
          width={512}
          height={512}
          className="rounded shadow-lg mx-auto"
        />
      ) : (
        <p>No image found.</p>
      )}
    </div>
  );
}
