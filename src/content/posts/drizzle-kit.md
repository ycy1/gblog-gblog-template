---
title: "Drizzle-Kit"
description: "Drizzle Kit 是用于自动 SQL 迁移生成和快速原型设计的 CLI 伴侣。"
pubDate: "2024-09-12 11:22:42"
category: "datastorage"
cardImage: "@images/banners/Drizzle-Kit.jpeg"
cardImage2: "@images/banners/Drizzle-Kit.jpeg"
tags: ["Drizzle", "Orm"]
selected: false
---

## 目录

## Drizzle-Kit 简介
什么是Drizzle-Kit？
Drizzle Kit — 是用于自动 SQL 迁移生成和快速原型设计的 CLI 伴侣。

从概念上讲，这非常简单，您只需声明一个 Drizzle ORM TypeScript 模式并从中生成 SQL 迁移。

然后，您可以更改原始 Schema，Drizzle Kit 将生成新的迁移，这样您就可以 将 DDL 真实来源放在一个类型安全的地方，并处于版本控制之下。

Drizzle Kit 允许您将 Schema 拆分为不同的文件，甚至可以在一个项目中为不同的数据库创建多个 Schema。 您可以快速构建数据库架构的原型并将其直接推送到数据库。

最后但并非最不重要的一点是 — 您可以在几秒钟内⚡️从现有数据库中提取架构

- [Drizzle-Kit官网](https://orm.drizzle.team/kit-docs/overview)

-- -
## Drizzle-Kit 安装
```javascript
npm i -D drizzle-kit
```


## Drizzle-Kit 实践
- drizzle.config.ts 
```javascript
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./scripts/schema.js", // 指定 schema 文件
  dialect: 'mysql', // 方言 'postgresql' | 'mysql' | 'sqlite'
  out: "./drizzle", // 输出目录
  breakpoints: true, // 开启断点
  migrations: {
    // prefix: 'supabase'
  },
  dbCredentials: {
    // user: import.meta.env.MYSQL_USER,
    // password: import.meta.env.MYSQL_PASSWORD,
    // host: import.meta.env.MYSQL_HOST,
    // port: import.meta.env.MYSQL_PORT,
    // database: import.meta.env.MYSQL_DB,
    url: `mysql://user:password@host:prot/db`, // 数据库连接地址
  }
})
```
- 按schema 生成表结构

每当将更改应用于架构时，只需重新运行并 在大多数情况下，它将完全自动为您生成 SQL 迁移。$ drizzle-kit generate
```sh
>> npx drizzle-kit generate

## 执行结果
drizzle-kit: v0.22.8
drizzle-orm: v0.31.4

No config path provided, using default 'drizzle.config.ts'
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'
Reading schema files:
F:\VSCode\gblog-gblog-template\scripts\schema.js

4 tables
user 6 columns 0 indexes 0 fks
gblog_categories 6 columns 0 indexes 0 fks
gblog_posts 11 columns 0 indexes 0 fks
gblog_tag 2 columns 0 indexes 0 fks

[✓] Your SQL migration file ➜ drizzle\0000_dapper_junta.sql 🚀
```
- 执行SQL到数据库

```sh
>> npx drizzle-kit migrate 

## 执行结果
drizzle-kit: v0.22.8
drizzle-orm: v0.31.4

No config path provided, using default path
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'
```

- 读取数据库结构生成schema
```sh
>> npx drizzle-kit introspect

## 执行结果
drizzle-kit: v0.22.8
drizzle-orm: v0.31.4

No config path provided, using default path
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'
Pulling from ['public'] list of schemas

[✓] 4  tables fetched
[✓] 25 columns fetched
[✓] 4  indexes fetched
[✓] 0  foreign keys fetched

[i] No SQL generated, you already have migrations in project
[✓] You schema file is ready ➜ drizzle\schema.ts 🚀
[✓] You relations file is ready ➜ drizzle\relations.ts 🚀
```
- 删除数据
```sh
>> npx drizzle-kit drop    

## 执行结果
drizzle-kit: v0.22.8
drizzle-orm: v0.31.4

No config path provided, using default 'drizzle.config.ts'
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'
> 0000_dapper_junta
No config path provided, using default 'drizzle.config.ts'
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'

[✓] 0000_dapper_junta migration successfully dropped
```

## Drizzle-Studio 实践
Drizzle Kit 附带捆绑的 Drizzle Studio 数据库浏览器，让您只需一个命令即可在本地启动它。

```sh
>> npx drizzle-kit studio

## 执行结果
drizzle-kit: v0.22.8
drizzle-orm: v0.31.4

No config path provided, using default path
Reading config file 'F:\VSCode\gblog-gblog-template\drizzle.config.ts'

Warning  Drizzle Studio is currently in Beta. If you find anything that is not working as expected or should be improved, feel free to create an issue on GitHub: https://github.com/drizzle-team/drizzle-kit-mirror/issues/new or write to us on Discord: https://discord.gg/WcRKz2FFxN

Drizzle Studio is up and running on https://local.drizzle.studio
```
![alt text](@images/postsimg/drizzle-kit_studio.png)

End
