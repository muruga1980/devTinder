const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB()
  .then(() => {
    // first connect to DB
    console.log("DB connection establized");

    // after the running dev server
    app.listen(3000, () => {
      console.log("node server running now 300 port...");
    });
  })
  .catch((err) => {
    console.log("connection failed");
  });
