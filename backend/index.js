const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  res.cookie("token", "hello mf!!");
  res.redirect("/");
});
