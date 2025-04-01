import { NextResponse } from "next/server";
import { deleteTag } from "@/lib/repositories/tagRepository";

export const DELETE = async (
    request: Request,
    context: { params: Promise<{ id: string }> }
  ) => {
  const { id } = await context.params;
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  try {
    await deleteTag(Number(id));
    return NextResponse.json({ message: 'Tag deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: `${error}` }, { status: 500 });
  }
}