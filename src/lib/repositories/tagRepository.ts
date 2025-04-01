import { db } from "@/lib/db";
import { tags } from "@/lib/db/schemas";
import { eq } from "drizzle-orm";

export const getTags = async () => {
  return db.select().from(tags);
};

export const addTag = async (name: string) => {
  return db.insert(tags).values({ name }).returning();
};

export const deleteTag = async (id: number) => {
  return db.delete(tags).where(eq(tags.id, id));
};

export const updateTag = async (id: number, name: string) => {
  return db.update(tags).set({ name }).where(eq(tags.id, id));
};
