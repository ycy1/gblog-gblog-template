import { mysqlTable, mysqlSchema, AnyMySqlColumn, int, varchar, boolean, datetime,serial } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

import { relations } from "drizzle-orm/relations";


export const gblogCategories = mysqlTable("gblog_categories", {
	id: serial("id").primaryKey().notNull(),
	fileName: varchar("file_name", { length: 100 }),
	title: varchar("title", { length: 100 }),
	description: varchar("description", { length: 255 }),
	isHot: boolean("is_hot").default(false),
	isGenerate: boolean("is_generate").default(false),
});

export const gblogPosts = mysqlTable("gblog_posts", {
	id: serial("id").primaryKey().notNull(),
	fileName: varchar("file_name", { length: 100 }),
	title: varchar("title", { length: 200 }),
	description: varchar("description", { length: 255 }),
	// Warning: Can't parse longblob from database
	// longblobType: longblob("content"),
	content: varchar("content", { length: 5000 }),
	pubDate: datetime("pub_date", { mode: 'string'}),
	cardImage: varchar("card_image", { length: 255 }),
	categoryId: int("category_id"),
	tagId: varchar("tag_id", { length: 200 }),
	selected: boolean("selected"),
	isGenerate: boolean("is_generate"),
});

export const gblogTag = mysqlTable("gblog_tag", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 200 }),
});

export const User = mysqlTable('user', {
	id: serial('id').primaryKey().notNull(),
	username: varchar('username', { length: 255 }).notNull(),
	password: varchar('password', { length: 255 }).notNull(),
	fullname: varchar('fullname', { length: 255 }),
	mobile: varchar('mobile', {length: 255}),
	age: int('age'),
  })