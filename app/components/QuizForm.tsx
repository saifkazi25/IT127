"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  "What world would you want to wake up in?",
  "Who are you in that world?",
  "What do you look like?",
  "What are you wearing?",
  "What powers or skills do you have?",
  "What emotion are you feeling?",
  "Who is with you?",
];

export default function QuizForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = answers.map((a, i) => `q${i + 1}=${encodeURIComponent(a)}`).join("&");
    router.push(`/selfie?${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4">
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <label className="block font-semibold mb-1">{q}</label>
          <input
            required
            type="text"
            value={answers[i]}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Next: Upload Selfie
      </button>
    </form>
  );
}
