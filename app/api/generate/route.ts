import { NextResponse } from "next/server";
import Replicate from "replicate";

// Load Replicate API token from environment variables
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    // Generate the image using SDXL model on Replicate
    const modelOutput = await replicate.run(
      "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
      {
        input: {
          prompt: prompt,
          width: 1024,
          height: 1024,
        },
      }
    );

    return NextResponse.json({ output: modelOutput });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: "Failed to generate image." }, { status: 500 });
  }
}

