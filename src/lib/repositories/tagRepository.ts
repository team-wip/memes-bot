import { db } from "@/lib/db";
import { tags } from "@/lib/db/schemas";

export const getTags = async () => {
  return db.select().from(tags);
};

export const addTag = async (name: string) => {
  return db.insert(tags).values({ name });
};