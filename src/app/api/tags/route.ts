import { NextResponse } from "next/server";
import { getTags, addTag } from "@/lib/repositories/tagRepository";

export async function GET() {
  try {
    const allTags = await getTags();
    return NextResponse.json(allTags);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    const newTag = await addTag(name);
    return NextResponse.json(newTag[0]);
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}

