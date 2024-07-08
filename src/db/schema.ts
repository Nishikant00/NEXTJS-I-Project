import {serial, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: serial("id").primaryKey()
});

export const sessionTable = pgTable("session", {
	id: serial("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

