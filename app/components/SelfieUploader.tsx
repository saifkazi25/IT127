"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SelfieUploader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    for (const [key, value] of searchParams.entries()) {
      formData.append(key, value);
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    router.push(`/result?url=${encodeURIComponent(data.imageUrl)}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Upload a Selfie</h2>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="mt-4 bg-black text-white px-4 py-2 rounded">
        Generate Fantasy Image
      </button>
    </div>
  );
}
