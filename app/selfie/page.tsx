"use client";

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SelfiePage() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");

  useEffect(() => {
    console.log("Image param received:", image);
  }, [image]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">🌌 Your Infinite Tsukuyomi Fantasy</h1>
      {image ? (
        <img
          src={image}
          alt="Your fantasy AI image"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      ) : (
        <p>⏳ Generating your fantasy image...</p>
      )}
    </div>
  );
}
