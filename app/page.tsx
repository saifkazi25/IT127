'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [answers, setAnswers] = useState(Array(7).fill(''));
  const [selfie, setSelfie] = useState<File | null>(null);

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSelfieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelfie(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (answers.some((a) => !a) || !selfie) return alert('Complete all questions and upload a selfie');
    const formData = new FormData();
    formData.append('selfie', selfie);
    answers.forEach((ans, i) => formData.append(`q${i}`, ans));

    const res = await fetch('/api/generate', {
      method: 'POST',
      body: formData,
    });

    const { imageUrl } = await res.json();
    router.push(`/result?imageUrl=${encodeURIComponent(imageUrl)}`);
  };

  return (
    <main className="p-8 text-black">
      <h1 className="text-2xl font-bold mb-4">Infinite Tsukuyomi Fantasy Quiz</h1>
      {answers.map((answer, i) => (
        <input
          key={i}
          type="text"
          placeholder={`Question ${i + 1}`}
          value={answer}
          onChange={(e) => handleChange(i, e.target.value)}
          className="block border p-2 mb-2 w-full"
        />
      ))}
      <input type="file" accept="image/*" onChange={handleSelfieChange} className="mb-4" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">
        Generate My Fantasy
      </button>
    </main>
  );
}
