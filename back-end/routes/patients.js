const express = require("express");
const router = express.Router();
const {
  getPatients,
  getPatientsByGender,
  getPatientsBySearch,
  sortPatientsByAge,
  addPatient,
  updatePatientDetails,
  deletePatient,
} = require("./../controllers/patients-controller");

router.get("/get-patients", getPatients);
router.get("/get-patients-by-gender", getPatientsByGender);
router.get("/get-patients-by-search", getPatientsBySearch);
router.get("/sort-patients-by-age", sortPatientsByAge);

router.post("/add-patient", addPatient);
router.post("/update-patient-details", updatePatientDetails);
router.delete("/delete-patient", deletePatient);

module.exports = router;
