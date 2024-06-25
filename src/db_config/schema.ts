
import {int, mysqlTable, serial, varchar} from 'drizzle-orm/mysql-core'


/**
 * 表结构
 */

// 酒店表
export const tbHotel = mysqlTable('tb_hotel', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  address: varchar('address', { length: 255 }),
  price: int('price')
})

// 用户表
export const tUser = mysqlTable('t_user', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  fullname: varchar('fullname', { length: 255 }),
  mobile: varchar('mobile', {length: 255}).notNull(),
  age: int('age'),
})

// 用户表
export const tbUser = mysqlTable('tb_user', {
  id: serial('id').primaryKey(),
  username: varchar('username', { length: 255 }).notNull(),
  pwd: varchar('pwd', { length: 255 }).notNull(),
  address: varchar('address', { length: 255 }),
})

