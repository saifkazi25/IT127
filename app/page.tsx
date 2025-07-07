'use client';
import React from 'react';
import QuizForm from '../components/QuizForm';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-black p-4">
      <div className="max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">🌌 Infinite Tsukuyomi</h1>
        <QuizForm />
      </div>
    </main>
  );
}

