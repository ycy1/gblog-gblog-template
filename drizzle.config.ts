import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: "./drizzle/schema.ts",
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
    url: `mysql://root:03171122991j!@182.92.85.80:3306/xxj_gblog`,
  }
})