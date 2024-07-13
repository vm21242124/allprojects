const express= require("express");
const { registerDoctor, LoginDoctor, getDoctorById } = require("../controllers/Doctor");
const { IsLoginDoctor } = require("../middleware/DoctorAuthMiddleware");

const router = express.Router();

router.post("/register", registerDoctor);

router.post("/login", LoginDoctor);

router.get("/:id",IsLoginDoctor,getDoctorById);

module.exports=router