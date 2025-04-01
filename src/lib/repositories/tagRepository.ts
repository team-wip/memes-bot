import { db } from "@/app/db";
import { tags } from "@/app/db/schemas";

export const getTags = async () => {
  return db.select().from(tags);
};

export const addTag = async (name: string) => {
  return db.insert(tags).values({ name });
};