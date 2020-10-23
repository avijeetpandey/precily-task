require("dotenv").config();
require("./connection/database");
const express = require("express");
const bodyParser = require("body-parser");
const Quote = require("./models/quote");
const cors = require("cors");

const PORT = process.env.PORT | 5000;

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
app.post("/add", (req, res) => {
  Quote.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("DB cleared");
    }
  });
  let quote = new Quote(req.body);
  quote.save((err, quote) => {
    if (err) {
      return res.json({
        error: "Unable to store the Quote",
      });
    }
    return res.status(200).json({
      id: quote._id,
      message: "Quote added ",
    });
  });
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
