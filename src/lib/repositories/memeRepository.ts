import { db } from "@/app/db";
import { memes } from "@/app/db/schemas";

export const getMemes = async () => {
  return db.select().from(memes);
};

export const addMeme = async (title: string, description: string, url: string, mediaType: string) => {
  return db.insert(memes).values({ title, description, url, mediaType });
};
