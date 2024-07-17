const express= require("express");
const { registerDoctor, LoginDoctor, getDoctorById, createDoctorProfile, updateDoctorProfile, getAllDoctorsProfile } = require("../controllers/Doctor");
const { IsLoginDoctor } = require("../middleware/DoctorAuthMiddleware");
const { isAuthorizeDoctor } = require("../middleware/IsAuthorize");

const router = express.Router();

router.post("/register", registerDoctor);

router.get("/alldoctors",getAllDoctorsProfile);

router.post("/login", LoginDoctor);

router.get("/:doctorId",IsLoginDoctor,getDoctorById);

router.post("/:doctorId",IsLoginDoctor,isAuthorizeDoctor,createDoctorProfile);

router.put("/:doctorId",IsLoginDoctor,isAuthorizeDoctor,updateDoctorProfile);


module.exports=router