import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as T from "./schema.js";
import * as fs from "node:fs";

// 读取环境变量
import dotenv from "dotenv";
dotenv.config();  

const connection = await mysql.createConnection({
    host: '112.124.40.67', // 主机地址
    user: 'root', // 用户名
    password: '03171122991Xxj!', // 密码
    port: 3306, // 端口号，默认为 3306
    database: 'xxj_gblog', // 数据库名称
    charset: "UTF8_GENERAL_CI", // 连接字符集，默认为 UTF8_GENERAL_CI
    connectTimeout: 10000, // 连接超时时间，单位为毫秒
    multipleStatements: false, // 是否允许一个 query 中有多个 MySQL 语句，默认为 false
});
  
  // 连接数据库
  export const db = drizzle(connection,{logger:false});

  // --------------------------------------------------------------------------------------------------------------
  
const q = await db.select().from(T.gblog_tag);
console.log(q);

console.log();









