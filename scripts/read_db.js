import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as T from "./schema.js";
import * as fs from "node:fs";

// 读取环境变量
import dotenv from "dotenv";
import { log } from "node:console";
import { eq, sql } from "drizzle-orm";
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

async function generateCategories(){
  const q = await db.select().from(T.gblog_categories)
// .where(eq(T.gblog_categories.is_generate,0));  // 获取未生成文件的数据

q.forEach(item=>{
  let md = convertCategoriesToMarkdown(item)
  let file_path = "../src/content/categories/"+item.file_name+".md"
  
  // if(!fs.existsSync(file_path)){
  //   fs.mkdirSync(file_path)
  // }
  fs.writeFile(file_path , md, async (error)=>{
    if(error) log(error)
    await db.update(T.gblog_categories).set({is_generate:1})
    .where(eq(T.gblog_categories.id,item.id))
    .then(data => log(item.file_name+  "分类生成完成，update:"+ data[0].affectedRows))
  })
}) 
}




//----------------------------------------------------------------------------------------------------
// const p = await db.select().from(T.gblog_posts)
// .where(eq(T.gblog_posts.is_generate,0));  // 获取未生成文件的数据


async function generatePosts(){
    const p = await db.select({
    id: T.gblog_posts.id,
    file_name: T.gblog_posts.file_name,
    title: T.gblog_posts.title,
    description: T.gblog_posts.description,
    content: T.gblog_posts.content,
    pudDate: T.gblog_posts.pub_date,
    image: T.gblog_posts.card_image,
    selected: T.gblog_posts.selected,

    categorie: T.gblog_categories.file_name,
    tag: sql`(select GROUP_CONCAT(name) from gblog_tag where FIND_IN_SET(id,${T.gblog_posts.tag_id}))`,
  }).from(T.gblog_posts)
  .leftJoin(T.gblog_categories, eq(T.gblog_posts.category_id, T.gblog_categories.id))
  // .leftJoin(T.gblog_tag, eq(T.gblog_posts.tag_id, T.gblog_tag.id))
  // .where(eq(T.gblog_posts.is_generate,0));  // 获取未生成文件的数据

  // log(p)

  p.forEach(item=>{
    // log(item.content.toString())
    let md = convertPostsToMarkdown(item)
    // log(md)
    let file_path = "../src/content/posts/"+item.file_name+".md"
    
    fs.writeFile(file_path , md, async (error)=>{
      if(error) log(error)
      await db.update(T.gblog_posts).set({is_generate:1})
      .where(eq(T.gblog_posts.id,item.id))
      .then(data => log(item.file_name+  "文章生成完成，update:"+ data[0].affectedRows))
    })
  })
}







/************************************************** 自定义函数 ****************************************************************************/
/**
 * 将分类数据转换为 Markdown 格式
 * @param {Object} categories 分类数据对象
 * @returns {string} Markdown 格式的字符串
 */
function convertCategoriesToMarkdown(categories) {

  categories.title = emojiConvert(categories.title)
  categories.description = emojiConvert(categories.description)

  return `---
  title: '${categories.title}'
  description: '${categories.description}'
  isHot: ${categories.is_hot==1}\n---`
}

/**
 * 将文章数据转换为 Markdown 格式
 * @param {Object} post 文章数据对象
 * @returns {string} Markdown 格式的字符串
 */
function convertPostsToMarkdown(post) {

  post.title = emojiConvert(post.title)
  post.description = emojiConvert(post.description)
  
  return `---
  title: "${post.title}"
  description: "${post.description}"
  pubDate: "${post.pudDate}"
  category: "${post.categorie}"
  cardImage: "@images/banners/${post.image}"
  cardImage2: "@images/banners/${post.image}"
  tags: [${post.tag.split(',')}]
  selected: ${post.selected==1}\n---
  
  ${post.content}`
}




function emojiConvert(str){
// 表情包符号转码
// var unicodeCode = '😊'.codePointAt(0)
// var unicodeChar = String.fromCodePoint(unicodeCode)
// console.log(unicodeCode,unicodeChar); // 输出Unicode字符，例如 "😀"

  var regex = /#\w+/g; // 匹配井号后跟随一个或多个字词字符
  var matches = str.match(regex);
  matches?.forEach(match => {
    // console.log(match,String.fromCodePoint(match.slice(1)));
    str = str.replaceAll(match,String.fromCodePoint(match.slice(1)))
  });
  return str
}




/******************************************************* 执行命令 ************************************************************/
await generateCategories() // 生成分类文件
await generatePosts() // 生成文章文件
// .then(res => process.exit())


// log("执行完成")
// await process.exit() // 退出进程



