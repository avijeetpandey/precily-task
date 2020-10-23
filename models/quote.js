const mongoose = require("mongoose");

let quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Quote", quoteSchema);
