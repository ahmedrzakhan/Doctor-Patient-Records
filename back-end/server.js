const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Patient = require("./models/Patient");
const { patients } = require("./data/patients");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  process.env.ATLAS_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.log("Connection to database failed");
    } else {
      console.log("Database is successfully connected");
    }
  }
);

const db = mongoose.connection;
db.once("open", async (req, res) => {
  if ((await Patient.countDocuments().exec()) > 0) {
    return;
  }

  Patient.insertMany(patients)
    .then(() => res.json("Patients added successfully"))
    .catch((err) => err.status(400).json("Error in adding patients", err));
});

app.listen(5000, () => {
  console.log("server is up and running");
});
