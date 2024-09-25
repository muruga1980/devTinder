const express = require("express");

const app = express();

// multiple request handler way

app.use("/home", (req, res) => {
  res.send("this is homepageAAABBBBBBBBBBB");
});

app.use("/about", (req, res) => {
  res.send("this is about us page");
});

app.use((req, res) => {
  res.send("this is server ressponding in localhost");
});

app.listen(3000, () => {
  console.log("node server running now...");
});

// simple response method created for demo purpose
// multiple request handler way
