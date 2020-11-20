const Patient = require("./../models/Patient");

const getAllPatients = async (req, res) => {
  const patients = await Patient.find();

  res.send(patients);
};

// Get As Per Doctor
const getPatients = async (req, res) => {
  const { username } = req.query;
  const patients = await Patient.find({
    assignedTo: username,
  });

  res.send(patients);
};

// Get Patient By Id
const getPatientById = async (req, res) => {
  const { id } = req.query;
  const patient = await Patient.findById(id);

  res.send(patient);
};

// Filter By Gender
const getPatientsByGender = async (req, res) => {
  const { gender } = req.query;
  const patients = await Patient.find({
    gender: gender,
  });

  res.send(patients);
};

// Search
const getPatientsBySearch = async (req, res) => {
  const { name } = req.query;
  const patients = await Patient.find({
    name: { $regex: name, $options: "i" },
  }).limit(5);

  res.send(patients);
};

// Sort By Age
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

// Add Patient
const addPatient = async (req, res) => {
  const { age, name, gender, image, medicines, assignedTo } = req.body;

  const newPatient = new Patient({
    age,
    name,
    gender,
    image,
    medicines,
    assignedTo,
  });

  newPatient
    .save()
    .then((patient) => res.send({ patient, message: "Patient Added" }))
    .catch((err) => res.send({ message: "Something went wrong", err }));
};

// Update Patient Details
const updatePatientDetails = async (req, res) => {
  const { id, age, name, gender, image, medicines, assignedTo } = req.body;

  Patient.findById(id)
    .then((patient) => {
      patient.name = name;
      patient.age = age;
      patient.gender = gender;
      patient.image = image;
      patient.medicines = medicines;
      patient.assignedTo = assignedTo;

      patient
        .save()
        .then((patient) =>
          res.send({ patient, message: "Patient details updated" })
        )
        .catch((err) => res.send({ message: "Something went wrong", err }));
    })
    .catch((err) => res.send({ message: "Something went wrong", err }));
};

// Delete Patient
const deletePatient = async (req, res) => {
  const { id } = req.query;

  Patient.findByIdAndDelete(id)
    .then((patient) => {
      res.send({ patient, message: "Patient Deleted" });
    })
    .catch((err) => res.send({ message: "Something went wrong", err }));
};

module.exports = {
  getAllPatients,
  getPatients,
  getPatientById,
  getPatientsByGender,
  getPatientsBySearch,
  sortPatientsByAge,
  addPatient,
  updatePatientDetails,
  deletePatient,
};
