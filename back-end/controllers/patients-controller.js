const Patient = require("./../models/Patient");

const getPatients = async (req, res) => {
  const { username } = req.query;
  const patients = await Patient.find({
    assignedTo: username,
  });

  res.send(patients);
};

const getPatientsByGender = async (req, res) => {
  const { gender } = req.query;
  const patients = await Patient.find({
    gender: gender,
  });

  res.send(patients);
};

const getPatientsBySearch = async (req, res) => {
  const { name } = req.query;
  const patients = await Patient.find({
    name: { $regex: name, $options: "i" },
  }).limit(5);

  res.send(patients);
};

const sortPatientsByAge = async (req, res) => {
  const { orderBy } = req.query;
  let order;
  if (orderBy === "ascending") {
    order = 1;
  } else if (orderBy === "descending") {
    order = -1;
  }
  const patients = await Patient.find().sort({ age: order });

  res.send(patients);
};

module.exports = {
  getPatients,
  getPatientsByGender,
  getPatientsBySearch,
  sortPatientsByAge,
};
