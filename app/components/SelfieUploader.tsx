'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const SelfieUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleGenerate = async () => {
    if (!file) {
      alert('Please upload a selfie first.')
      return
    }

    const formData = new FormData()
    formData.append('image', file)

    for (const [key, value] of searchParams.entries()) {
      formData.append(key, value)
    }

    try {
      setIsLoading(true)

      const response = await fetch('/api/generate', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data?.imageUrl) {
        router.push(`/result?url=${encodeURIComponent(data.imageUrl)}`)
      } else {
        alert('Something went wrong. No image returned.')
      }
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Failed to generate image.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        className="bg-black text-white py-2 px-4 rounded"
        onClick={handleGenerate}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate'}
      </button>
    </div>
  )
}

export default SelfieUploader
