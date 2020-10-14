// import the pacakge
const express = require("express");
// execute it
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const postsRoute = require("./routes/posts");
require("dotenv/config");

app.use(bodyParser.json());

app.use("/posts", postsRoute);

function handleHome(req, res) {
  res.send("Nice to meet you");
}
// Routes
app.get("/", handleHome);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

// How to We start listening to the server
app.listen(3000);
