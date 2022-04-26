const express = require("express");
const bodyParser = require("body-parser");
const app = express();

PORT        = 34284;

app.listen(PORT, () => {
  console.log('Website hosted on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Login.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Homepage.html");
});
