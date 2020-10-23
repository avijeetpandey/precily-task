const mongoose = require("mongoose");

let quoteSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 1,
    },
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
