const { sendMessage, getCoversation, getChatsOfDoctor, getChatsOfPatient } = require('../controllers/Conversations');


const router = require('express').Router();


router.post("/send", sendMessage);
router.get("/:ConversationID", getCoversation);
router.get("/doctor/:DoctorID",getChatsOfDoctor);
router.get("/patient/:PatientID",getChatsOfPatient);


module.exports = router