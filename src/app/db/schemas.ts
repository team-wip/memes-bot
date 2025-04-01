import { integer, serial, text, pgTable, date } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const tags = pgTable('tags', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
    createdAt: date('created_at').notNull().defaultNow(),
});
