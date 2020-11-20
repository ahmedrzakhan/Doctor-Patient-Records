const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, max: 255 },
    email: { type: String, required: true, trim: true, max: 255 },
    password: { type: String, required: true, trim: true, max: 255 },
    date: { type: Date, default: new Date() },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);
