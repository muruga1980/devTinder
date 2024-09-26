const express = require("express");

const app = express();

// multiple request handler way

app.get("/user", (req, res) => {
  res.send({ firstName: "Murugan", age: 40, role: "UI/UX" });
});

app.post("/user", (req, res) => {
  res.send("save the  datas from DB");
});

app.delete("/user", (req, res) => {
  res.send("Delete the datas from DB");
});

app.use("/home", (req, res) => {
  res.send("this is homepageAAABBBBBBBBBBB");
});

// expression used in routing

//option
app.post("/abo?ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/abo+ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/abo*ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/a(bo)?ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/a(bo)+ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/a(bo)*ut", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post(/a/, (req, res) => {
  res.send("expression keyword used in routin");
});

app.post(/.*fly$/, (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/user/:userId", (req, res) => {
  res.send("expression keyword used in routin");
});

app.post("/user/:userId/:name/:pasword", (req, res) => {
  console.log(req.query);
  res.send({ name: "murugan", age: 40, password: "hellow123" });
});

app.use((req, res) => {
  res.send("this is server ressponding in localhost");
});

app.listen(3000, () => {
  console.log("node server running now...");
});

// simple response method created for demo purpose
// multiple request handler way
