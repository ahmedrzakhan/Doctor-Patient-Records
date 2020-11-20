const express = require("express");
const router = express.Router();
const { getPatients, getPatientsByGender, getPatientsBySearch, sortPatientsByAge } = require("./../controllers/patients-controller");

router.get("/get-patients", getPatients);
router.get("/get-patients-by-gender", getPatientsByGender);
router.get("/get-patients-by-search", getPatientsBySearch);
router.get("/sort-patients-by-age", sortPatientsByAge);
module.exports = router;
