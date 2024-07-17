const { createMessage, getConversationById, getConversationOfDoctor, getConversationOfPatient } = require("../PostgresClient/ConversationCllient");

const sendMessage=async(req,res)=>{
    const { PatientID ,DoctorID,Content,SenderType } =req.body;
    const message={ PatientID,DoctorID,Content,SenderType };
    const { rows } = await createMessage(message);
    
    return res.json(rows).status(200);
};
const getCoversation=async(req,res)=>{
    const { ConversationID } = req.params;

    const {rows} =await getConversationById(ConversationID);
    return res.json(rows).status(200);
}
const getChatsOfDoctor=async(req,res)=>{
    const { DoctorID } = req.params;

    const {rows} =await getConversationOfDoctor(DoctorID);
    return res.json(rows).status(200);
}
const getChatsOfPatient=async(req,res)=>{
    const { PatientID } = req.params;

    const {rows} =await getConversationOfPatient(PatientID);
    return res.json(rows).status(200);
}

module.exports={
    sendMessage,
    getCoversation,
    getChatsOfDoctor,
    getChatsOfPatient
}