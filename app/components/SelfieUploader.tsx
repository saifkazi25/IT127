"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SelfieUploader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    for (const [key, value] of searchParams.entries()) {
      formData.append(key, value);
    }

    const res = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.url) {
      router.push(`/result?url=${data.url}`);
    } else {
      alert("Image generation failed.");
    }

    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Generating..." : "Generate Fantasy Image"}
      </button>
    </div>
  );
}
