const express = require("express");
const { registerPatient, LoginPatient, getPatientById } = require("../controllers/Patient");
const { IsPatientLogin } = require("../middleware/PatientAuthMiddleware");

const router = express.Router();

router.post("/register", registerPatient);

router.post("/login", LoginPatient);

router.get("/:id",IsPatientLogin,getPatientById);

module.exports= router;