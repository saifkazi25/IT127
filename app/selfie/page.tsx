'use client';

import React, { Suspense } from 'react';
import SelfieUploader from '../components/SelfieUploader';

export default function SelfiePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <Suspense fallback={<div>Loading selfie tools...</div>}>
        <SelfieUploader />
      </Suspense>
    </main>
  );
}
