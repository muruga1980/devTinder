const express = require("express");

const app = express();
const { adminAuth, userAuth } = require("./middleware/authendication");

// middleware using in admin user

app.use("/admin", adminAuth);
app.use("/user", userAuth);

//or

// app.use("/admin", (req, res, next) => {
//   const tocken = "xyz";
//   const isAdminAuthrosized = tocken === "xyz";
//   if (!isAdminAuthrosized) {
//     res.send("admin access provided for admin");
//   } else {
//     next();
//   }
// });

app.get("/user", userAuth, (req, res) => {
  //logic of checking is authrosied or not
  res.send("user data sent ");
});

app.get("/admin/getAlldata", (req, res) => {
  //logic of checking is authrosied or not
  res.send("admin access provided for allData ");
});

app.use("/admin/deleteusers", (req, res) => {
  res.send("admin access provided for DeleteUsers ");
});

app.listen(3000, () => {
  console.log("node server running now...");
});

// simple response method created for demo purpose
// multiple request handler way
