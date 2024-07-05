import { defineConfig } from "drizzle-kit";


export default defineConfig({
    dialect: "postgresql", 
    dbCredentials: {
        url: ""
    },
    migration: {
        table: "./src/db/migrations",
        schema: "./src/db/schema.ts"
    }
})