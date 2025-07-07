"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const questions = [
  "What's the weather like in your fantasy?",
  "What kind of hero are you?",
  "What's your moral alignment?",
  "What are you wearing?",
  "What's your mode of transport?",
  "What's your emotional vibe?",
  "Pick a fantasy element",
];

export default function QuizForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    answers.forEach((answer, idx) => {
      searchParams.append(`q${idx + 1}`, answer);
    });
    router.push(`/selfie?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {questions.map((question, idx) => (
        <div key={idx}>
          <label className="block font-medium">{question}</label>
          <input
            type="text"
            required
            value={answers[idx]}
            onChange={(e) => handleChange(idx, e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Next
      </button>
    </form>
  );
}
