

const router = require('express').Router();


router.post("/send");
router.get("/all/:patientId");
router.get("/all/:doctorId");

module.exports = Router