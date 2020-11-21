const express = require("express");
const router = express.Router();
const Patient = require("./../models/Patient");
const {
  getAllPatients,
  getPatients,
  getPatientById,
  getPatientsByGender,
  getPatientsBySearch,
  sortPatientsByAge,
  addPatient,
  updatePatientDetails,
  deletePatient,
} = require("./../controllers/patients-controller");

router.get("/get-all-patients", paginatedResults(Patient), getAllPatients);
router.get("/get-patients", getPatients);
router.get("/get-patient-by-id", getPatientById);
router.get("/get-patients-by-gender", getPatientsByGender);
router.get("/get-patients-by-search", getPatientsBySearch);
router.get("/sort-patients-by-age", sortPatientsByAge);

router.post("/add-patient", addPatient);
router.post("/update-patient-details", updatePatientDetails);
router.delete("/delete-patient", deletePatient);

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
        limit: limit,
      };
    }

    try {
      results.current = await model.find().limit(limit).skip(startIndex).exec();
      results.totalCount = await model.countDocuments().exec();
      res.pagination = results;
      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
}

module.exports = router;
