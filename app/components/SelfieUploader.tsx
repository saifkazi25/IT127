'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SelfieUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    for (const [key, value] of searchParams.entries()) {
      formData.append(key, value);
    }

    setUploading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result?.url) {
        router.push(`/result?url=${encodeURIComponent(result.url)}`);
      } else {
        alert('Failed to generate image.');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-semibold">Upload a selfie</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block mx-auto"
      />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {uploading ? 'Generating...' : 'Generate Fantasy'}
      </button>
    </div>
  );
}

