require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT | 5000;

const app = express();

app.listen(PORT, () => {
  console.log("Server is up and running");
});
