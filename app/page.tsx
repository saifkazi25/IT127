'use client';
import React, { Suspense } from 'react';
import SelfieUploader from '../../components/SelfieUploader';

export default function SelfiePage() {
  return (
    <Suspense fallback={<div>Loading selfie uploader...</div>}>
      <SelfieUploader />
    </Suspense>
  );
}
