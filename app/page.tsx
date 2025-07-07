'use client';

import React, { Suspense } from 'react';
import QuizForm from './components/QuizForm';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <Suspense fallback={<div>Loading...</div>}>
        <QuizForm />
      </Suspense>
    </main>
  );
}

