const express = require("express");
const ejs = require("ejs");
const body_parser = require("body-parser");

const port = 5000;
const items = [];
const workItems = [];

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const options = { weekday: "long", month: "long", day: "numeric" };
  const today = new Date().toLocaleDateString("en-US", options);
  res.render(__dirname + "/views/index.ejs", { heading: today, items: items });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  items.push(newItem);
  res.redirect("/");
});

app.get("/:work", (req, res) => {
  console.log(req.params);
  res.render("index", { heading: "This is Heading", items: workItems });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port} succesfully`);
});
