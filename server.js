require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT | 5000;

const app = express();

// middlewares
app.use(bodyParser.json())


app.listen(PORT, () => {
  console.log("Server is up and running");
});
