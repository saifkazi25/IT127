import { NextRequest, NextResponse } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { prompt, imageData } = body;

  const modelOutput = await replicate.run(
    "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
, // SDXL model version from .env.local
    {
      input: {
        prompt: prompt,
        width: 512,
        height: 512,
        num_inference_steps: 30,
        guidance_scale: 7.5,
      },
    }
  );

  return NextResponse.json({ image: modelOutput });
}
