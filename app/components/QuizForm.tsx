"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function QuizForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just redirect to selfie page
    router.push("/selfie");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4">
      <h2 className="text-2xl font-bold">Start Your Fantasy Quiz</h2>

      {/* Sample question, replace with real ones */}
      <div>
        <label className="block font-semibold mb-1">What world excites you most?</label>
        <select className="w-full p-2 border rounded" required>
          <option value="">Select one</option>
          <option value="sci-fi">Sci-fi galaxy</option>
          <option value="medieval">Medieval fantasy</option>
          <option value="cyberpunk">Cyberpunk city</option>
        </select>
      </div>

      {/* Add more questions here */}

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Next: Upload Selfie
      </button>
    </form>
  );
}
