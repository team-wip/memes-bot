import { integer, serial, text, pgTable, date } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const tags = pgTable('tags', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
    createdAt: date('created_at').notNull().defaultNow(),
});

export const memes = pgTable('memes', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description').notNull(),
	url: text('url').notNull(),
    mediaType: text('media_type').notNull(),
	views: integer('views').notNull().default(0),
	createdAt: date('created_at').notNull().defaultNow(),
});

export const memeTags = pgTable('meme_tags', {
	memeId: integer('meme_id').notNull().references(() => memes.id),
	tagId: integer('tag_id').notNull().references(() => tags.id),
});
