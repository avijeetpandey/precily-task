require("dotenv").config();
require("./connection/database");
const express = require("express");
const bodyParser = require("body-parser");
const Quote = require("./models/quote");
const cors = require("cors");

const PORT = process.env.PORT | 5000;

const app = express();

let count = 0; // API call count

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes

// endpoint to add the quote
app.post("/add", (req, res) => {
  count++;

  // as mentioned in the task clearing database before inserting the document
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

// End Point to update the quote

app.post("/update", (req, res) => {
  count++;
  Quote.findOneAndUpdate(
    { id: 1 },
    {
      $set: { quote: req.body.newQuote },
    },
    { new: true },
    (err, quote) => {
      if (err) {
        return res.json({
          message: "Unable to find the quote",
        });
      } else {
        return res.json({
          message: "Updated Succesfully",
        });
      }
    }
  );
});

// API call endpoint

app.get("/count", (req, res) => {
  return res.json({
    count: count,
  });
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
