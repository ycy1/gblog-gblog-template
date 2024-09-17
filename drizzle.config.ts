import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./scripts/schema.js",
  dialect: 'mysql',
  out: "./drizzle",
  breakpoints: true,
  migrations: {
    // prefix: 'supabase'
  },
  dbCredentials: {
    // user: import.meta.env.MYSQL_USER,
    // password: import.meta.env.MYSQL_PASSWORD,
    // host: import.meta.env.MYSQL_HOST,
    // port: import.meta.env.MYSQL_PORT,
    // database: import.meta.env.MYSQL_DB,
    url: `mysql://root:root@112.124.40.67:3306/xxj_gblog`,
  }
})