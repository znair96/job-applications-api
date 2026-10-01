require("dotenv/config");
const { defineConfig } = require("drizzle-kit");

export default defineConfig({
  out: "./drizzle",
  schema: "./src/models/applications.schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_URL,
  },
});
