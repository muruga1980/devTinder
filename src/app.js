const express = require("express");

const app = express();

// multiple request handler way

app.use(
  "/user",

  (req, res, next) => {
    //res.send({ firstName: "Murugan", age: 40, role: "UI/UX" });
    next();
  },

  (req, res) => {
    res.send("respone 2");
  },

  (req, res) => {
    res.send("respone 3");
  },

  (req, res) => {
    res.send("respone 4");
  },

  (req, res) => {
    res.send("respone 5");
  }
);

app.listen(3000, () => {
  console.log("node server running now...");
});

// simple response method created for demo purpose
// multiple request handler way
