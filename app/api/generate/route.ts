import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || "",
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const prompt = body.prompt || "a fantasy dream world";

  const modelOutput = await replicate.run(
    "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",
    {
      input: {
        prompt: prompt,
        width: 768,
        height: 768,
      },
    }
  );

  return NextResponse.json({ url: modelOutput[0] });
}
