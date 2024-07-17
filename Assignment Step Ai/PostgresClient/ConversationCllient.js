const pool = require("../dbconfig/dbpool");

const ConversationQueries = {
    //first params will be patientId and seconde will be doctorId
    getConverSationID: "SELECT get_or_create_conversation($1, $2)",
    getConversationById : "SELECT * from Chat WHERE ConversationID = $1",
    createMessage: "INSERT INTO Chat ( Content, SenderType,ConversationID) VALUES ($1, $2, $3) RETURNING *",
    getAllConversationPatient: "SELECT c.ConversationID ,d.DoctorID, d.Name,d.email,d.Age FROM Conversations c JOIN Doctors d ON c.DoctorID = d.DoctorID WHERE c.PatientID = $1",
    getConversationOfDoctor:"SELECT c.ConversationID , p.PatientID,p.Name,p.email,p.Age FROM Conversations c JOIN Patients p ON c.PatientID = p.PatientID WHERE c.DoctorID = $1"
};

const getConversationById=async(CoversationID)=>{
    return await pool.query(ConversationQueries.getConversationById,[CoversationID])
};

const createMessage=async(message)=>{
    const { PatientID,DoctorID,Content,SenderType }=message;
    const { rows } = await pool.query(ConversationQueries.getConverSationID,[ PatientID ,DoctorID])
    const { get_or_create_conversation }=rows[0];
    const data = await pool.query(ConversationQueries.createMessage,[ Content, SenderType, get_or_create_conversation ]);
    return data;
};


const getConversationOfPatient =async(PatientID)=>{
    return await pool.query(ConversationQueries.getAllConversationPatient,[PatientID])
};

const getConversationOfDoctor =async(DoctorID)=>{
    return await pool.query(ConversationQueries.getConversationOfDoctor, [DoctorID])
};

module.exports={
    createMessage,
    getConversationById,
    getConversationOfPatient,
    getConversationOfDoctor
}