import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get('image') as Blob;
  if (!file) {
    return NextResponse.json({ error: 'No image uploaded' }, { status: 400 });
  }

  // collect quiz prompts
  const prompts: string[] = [];
  for (const [key, value] of form.entries()) {
    if (key.startsWith('q')) prompts.push(value.toString());
  }
  const prompt = prompts.join(', ');

  const userImage = URL.createObjectURL(file);
  const templateRes = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
      Prefer: 'wait',
    },
    body: JSON.stringify({
      version: process.env.SDXL_VERSION,
      input: { prompt, width:768, height:768 },
    }),
  });
  const template = (await templateRes.json()).output?.[0] || null;
  if (!template) return NextResponse.json({ error: 'Template failed' }, { status: 500 });

  const fuseRes = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      'Content-Type': 'application/json',
      Prefer: 'wait',
    },
    body: JSON.stringify({
      version: process.env.FUSION_VERSION,
      input: { user_image: userImage, template_image: template },
    }),
  });
  const fuseJson = await fuseRes.json();
  const image = fuseJson.output?.[0] || fuseJson.output || null;
  if (!image) return NextResponse.json({ error: 'Fusion failed' }, { status: 500 });

  return NextResponse.json({ image });
}
