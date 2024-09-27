const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

// create a signup api

app.post("/signup", async (req, res) => {
  const user = new User(
    {
      _id: "01222",
      firstName: "Gopal",
      lastName: "kumar",
      email: "murugaskpm@gmail.com",
      age: 20,
      gender: "male",
      phone: "+919884402729",
    },
    { timestamps: true }
  );

  try {
    await user.save();
    res.send(" Registration successfully done");
  } catch (error) {
    res.status(400).send("Error saving for user" + error.message);
  }
});

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
