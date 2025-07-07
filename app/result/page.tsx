'use client';
import { useSearchParams } from 'next/navigation';

export default function ResultPage() {
  const params = useSearchParams();
  const url = params.get('url') || '';
  return (
    <main className="...">
      <h1>Your AI Selfie Fusion</h1>
      {url ? (
        <img src={url} alt="Generated selfie" />
      ) : (
        <p>No image found 🫥</p>
      )}
    </main>
  );
}
