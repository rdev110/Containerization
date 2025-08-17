const express = require("express");
const pkg = require("pg");
const { createClient } = require("redis");
require("dotenv").config();
const cors = require("cors");

const { Pool } = pkg;

const app = express();
app.use(cors());
const port = 5000;

// PostgreSQL setup
const pgPool = new Pool({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT,
});

// Redis setup
const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});
redisClient.connect().catch(console.error);

app.get("/api", async (req, res) => {
  try {
    const pgResult = await pgPool.query("SELECT NOW()");
    const redisValue = await redisClient.get("hello");

    res.json({
      message: "Hello from backend!",
      postgresTime: pgResult.rows[0].now,
      redisValue: redisValue || "No value yet",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/set-redis", async (req, res) => {
  await redisClient.set("hello", "world");
  res.send("Redis value set!");
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
