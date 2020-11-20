const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// import Patient
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

app.listen(5000, () => {
  console.log("server is up and running");
});
