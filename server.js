const express = require("express");
const ejs = require("ejs");
const path = require("path");
const expressLayout = require("express-ejs-layouts");
const app = express();
const PORT = process.env.PORT || 3000;
//Assets


app.use(express.static("public"));


app.use(expressLayout);

app.set("views", path.join(__dirname, "resources/views"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cart", function (req, res) {
  res.render("customers/cart");
});
app.get("/login", function (req, res) {
  res.render("auth/login");
});
app.get("/register", function (req, res) {
  res.render("auth/register");
});


app.listen(PORT, () => {
  console.log(
    "YO yo server has started baby and is running or is it a glitch! in the Matrix! Oh no!, Neo!!",
    PORT
  );
});
