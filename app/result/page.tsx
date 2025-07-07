'use client';
import React, { Suspense } from 'react';
import ResultDisplay from '../../components/ResultDisplay';

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading result...</div>}>
      <ResultDisplay />
    </Suspense>
  );
}
