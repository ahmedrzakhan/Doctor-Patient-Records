const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, max: 255 },
    gender: { type: String, required: true, trim: true, max: 255 },
    age: { type: String, required: true, trim: true, max: 255 },
    image: { type: String, required: true, trim: true, max: 255 },
    medicines: { type: mongoose.Mixed, required: true },
    assignedTo: { type: mongoose.Mixed, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Patient", patientSchema);
