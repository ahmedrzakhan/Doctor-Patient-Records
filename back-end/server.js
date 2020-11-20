const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Patient = require("./models/Patient");
const { patients } = require("./data/patients");
const patientsRoute = require("./routes/patients");
const usersRoute = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/patients", patientsRoute);
app.use("/api/users", usersRoute);

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
    .then((res) => res.json("Patients added successfully"))
    .catch((err) => res.status(400).json("Error in adding patients", err));
});

app.listen(5000, () => {
  console.log("server is up and running");
});
