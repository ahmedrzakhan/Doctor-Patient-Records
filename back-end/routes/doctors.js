const express = require("express");
const router = express.Router();

const { getDoctors, addDoctor } = require("./../controllers/doctor-controller");

router.get("/get-doctors", getDoctors);
router.post("/add-doctor", addDoctor);

module.exports = router;
