
import { pgTable,serial,text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
	id: text("id").primaryKey(),
	username: text('username').notNull().unique(),
	password_hash:text('password_hash').notNull()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id,{onDelete:"cascade"}),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export const Posts=pgTable('posts',{
	id:serial("id").primaryKey().notNull(),
	title:text('title').notNull(),
	body:text('body').notNull(),
	createdAt:timestamp('createdAt',{
		withTimezone:true,
		mode:"date"
	}).notNull().defaultNow(),
	updatedAt:timestamp('updatedAt',{
		withTimezone:true,
		mode:"date"
	}).notNull().defaultNow()
})