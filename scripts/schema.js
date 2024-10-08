import { mysqlTable, mysqlSchema, unique, varchar, tinyint, datetime, int, bigint } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const gblog_categories = mysqlTable("gblog_categories", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	file_name: varchar("file_name", { length: 100 }),
	title: varchar("title", { length: 100 }),
	description: varchar("description", { length: 255 }),
	is_hot: tinyint("is_hot").default(0),
	is_generate: tinyint("is_generate").default(0),
},
(table) => {
	return {
		id: unique("id").on(table.id),
	}
});

export const gblog_posts = mysqlTable("gblog_posts", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	file_name: varchar("file_name", { length: 100 }),
	title: varchar("title", { length: 200 }),
	description: varchar("description", { length: 255 }),
	content: varchar("content", { length: 5000 }),
	pub_date: datetime("pub_date", { mode: 'string'}),
	card_image: varchar("card_image", { length: 255 }),
	category_id: int("category_id"),
	tag_id: varchar("tag_id", { length: 200 }),
	selected: tinyint("selected"),
	is_generate: tinyint("is_generate"),
},
(table) => {
	return {
		id: unique("id").on(table.id),
	}
});

export const gblog_tag = mysqlTable("gblog_tag", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	name: varchar("name", { length: 200 }),
},
(table) => {
	return {
		id: unique("id").on(table.id),
	}
});

export const user = mysqlTable("user", {
	id: bigint("id", { mode: "number" }).autoincrement().notNull(),
	username: varchar("username", { length: 255 }).notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	fullname: varchar("fullname", { length: 255 }),
	mobile: varchar("mobile", { length: 255 }),
	age: int("age"),
},
(table) => {
	return {
		id: unique("id").on(table.id),
	}
});