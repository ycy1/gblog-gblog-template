import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema.js"
import { sql } from "drizzle-orm";
// const { config } = await import("dotenv");
// const env= config({path: '../../.env'}).parsed



/**
 * 数据库配置
 */

const connection = await mysql.createConnection({
  host: '127.0.0.1', // 主机地址
  user: 'root', // 用户名
  password: 'root', // 密码
  port: '3306', // 端口号，默认为 3306
  database: 'xxj_gblog', // 数据库名称
  charset: "UTF8_GENERAL_CI", // 连接字符集，默认为 UTF8_GENERAL_CI
  connectTimeout: 10000, // 连接超时时间，单位为毫秒
  multipleStatements: false, // 是否允许一个 query 中有多个 MySQL 语句，默认为 false
});
// 连接数据库
const db = drizzle(connection,{logger:true});

// const aa = await db.select().from(tUser)
// console.log(aa);

const q= await db.execute(sql`select * from gblog_categories;`)
// console.log(q);

// const q = await db.select().from(schema.tUser);
// console.log(q);