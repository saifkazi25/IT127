'use client';
import { useState } from 'react';

export default function SelfieUploader() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append('image', file);
    // append query params collected earlier
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams.entries()) {
      formData.append(key, value);
    }
    fetch('/api/generate', {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(data => {
        if (data.image) {
          window.location.href = `/result?url=${encodeURIComponent(data.image)}`;
        } else {
          alert('Error generating image');
        }
      });
  };

  return (
    <div>
      <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Generate</button>
    </div>
  );
}
