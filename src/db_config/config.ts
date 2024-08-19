// import { defineDb, defineTable, column } from 'astro:db';
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

/**
 * 数据库配置
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