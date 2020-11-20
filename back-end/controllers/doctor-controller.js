const Doctor = require("./../models/Doctor");

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({}, { _id: 0 });

  res.send(doctors);
};

const addDoctor = async (req, res) => {
  const { username } = req.body;

  const newDoctor = new Doctor({
    username,
  });

  newDoctor
    .save()
    .then((doctor) => res.send({ doctor, message: "Doctor added" }))
    .catch((err) => res.send({ message: "Something went wrong", err }));
};

module.exports = { getDoctors, addDoctor };
