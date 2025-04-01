import { NextResponse } from "next/server";
import { getMemes, addMeme } from "@/lib/repositories/memeRepository";

export async function GET() {
  try {
    const allMemes = await getMemes();
    return NextResponse.json(allMemes);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, url, mediaType } = await request.json();
    if (!title || !description || !url || !mediaType) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    const newMeme = await addMeme(title, description, url, mediaType);
    return NextResponse.json(newMeme);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}
