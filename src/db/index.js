require("dotenv/config");
const { drizzle } = require("drizzle-orm/node-postgres");

// postgres://<username>:<password>@<url:port>/<db_name>
const db = drizzle(process.env.DB_URL);

module.exports = db;
