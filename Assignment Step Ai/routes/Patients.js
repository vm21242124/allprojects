const express = require("express");
const { registerPatient, LoginPatient, getPatientById } = require("../controllers/Patient");
const { IsPatientLogin } = require("../middleware/PatientAuthMiddleware");
const { isAuthorizePatient } = require("../middleware/IsAuthorize");

const router = express.Router();

router.post("/register", registerPatient);

router.post("/login", LoginPatient);

router.get("/:patientId",IsPatientLogin,isAuthorizePatient,getPatientById);


module.exports= router;