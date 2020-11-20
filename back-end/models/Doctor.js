const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
    username: { type: String, required: true, trim: true, max: 255 },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);
