---
title: "Drizzle-Orm"
description: "Drizzle ORM 是一个带有头🐲的无头 TypeScript ORM"
pubDate: "2024-06-24 11:22:42"
category: "datastorage"
cardImage: "@images/banners/Drizzle-Orm.webp"
cardImage2: "@images/banners/Drizzle-Orm2.webp"
tags: ["Drizzle", "Orm"]
selected: true
---

## Drizzle 简介
什么是Drizzle？
Drizzle 是开发人员希望在下一个项目中使用的现代 TypeScript ORM。 它是轻量级的，只有 ~7.4kb minived+gzipped，它是树可抖动的，正好有 0 个依赖项。

Drizzle 支持所有 PostgreSQL、MySQL 和 SQLite 数据库，包括 Turso、Neon、Xata、PlanetScale、Cloudflare D1、FlyIO LiteFS、Vercel Postgres、Supabase 和 AWS Data API 等无服务器数据库。没有花里胡哨的东西，没有生锈的二进制文件，没有无服务器适配器，一切都开箱即用。

Drizzle 在设计上是无服务器就绪的，它适用于每个主要的 JavaScript 运行时，如 NodeJS、Bun、Deno、Cloudflare Workers、Supabase 函数、任何 Edge 运行时，甚至在浏览器中。
使用 Drizzle，您可以快速开箱即用，节省时间和成本，同时无需将任何数据代理引入您的基础架构。

虽然您可以将 Drizzle 用作 JavaScript 库，但它在 TypeScript 中大放异彩。它允许您声明 SQL 架构并生成关系查询和类似 SQL 的查询，同时保持类型安全性和可扩展性之间的平衡，以便工具制作者在此基础上进行构建。

- [drizzle官网](https://orm.drizzle.team/)

-- -
## Drizzle 安装 BY MySQL
```javascript
npm i drizzle-orm mysql2
npm i -D drizzle-kit

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

/**
 * 表结构 schema.ts
 */

// 用户表
export const tUser = mysqlTable('t_user', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  fullname: varchar('fullname', { length: 255 }),
  mobile: varchar('mobile', {length: 255}),
  age: int('age'),
})

// 用户表
export const tbUser = mysqlTable('tb_user', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  pwd: varchar('pwd', { length: 255 }).notNull(),
  address: varchar('address', { length: 255 }),
})

/**
 * 数据库配置 config.ts
 */
const connection = await mysql.createConnection({
  host: import.meta.env.MYSQL_HOST, // 主机地址
  user: import.meta.env.MYSQL_USER, // 用户名
  password: import.meta.env.MYSQL_PASSWORD, // 密码
  port: import.meta.env.MYSQL_PORT, // 端口号，默认为 3306
  database: import.meta.env.MYSQL_DB, // 数据库名称
  charset: "UTF8_GENERAL_CI", // 连接字符集，默认为 UTF8_GENERAL_CI
  connectTimeout: 10000, // 连接超时时间，单位为毫秒
  multipleStatements: false, // 是否允许一个 query 中有多个 MySQL 语句，默认为 false
});

// 连接数据库
export const db = drizzle(connection,{logger:false});
```


## Drizzle 实践
- 查询
```javascript
const q = await db.select().from(schema.tUser)
console.log(q);
```
- 查询指定列

```javascript
const q = await db.select({
    id: schema.tUser.id,
    name: schema.tUser.name,
    age: schema.tUser.age,
}).from(schema.tUser)
```
- 插入数据

```javascript
db.insert(schema.tUser).values({
    username: 'test',
    password: '123456',
    age: 18,
})
```

- 更新数据
```javascript
db.update(schema.tUser).set({
    age: 19,
    username: 'test2',
    password: '123456',
}).where(eq(schema.tUser.id, 1))
```
- 删除数据
```javascript
db.delete(schema.tUser).where(eq(schema.tUser.id, 1))
```

End
