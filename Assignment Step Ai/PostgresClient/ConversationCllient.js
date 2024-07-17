const pool = require("../dbconfig/dbpool");


const ConversationQueries = {
    getAllMessages: "SELECT * FROM Conversations WHERE ConversationID = $1",
    getAllConversationsOfDoctor: "SELECT Conversations.ConversationID, Patients.Name AS PatientName, Conversations.Content, Conversations.Timestamp, Conversations.SenderType, Conversations.MessageOrder FROM Conversations JOIN Patients ON Conversations.PatientID = Patients.PatientID WHERE Conversations.DoctorID = $1",
    getAllConversationsOfPatient: "SELECT Conversations.ConversationID, Doctors.Name AS DoctorName, Conversations.Content, Conversations.Timestamp, Conversations.SenderType, Conversations.MessageOrder FROM Conversations JOIN Doctors ON Conversations.DoctorID = Doctors.DoctorID WHERE Conversations.PatientID = $1",
    createMessage: "INSERT INTO Conversations (PatientID, DoctorID, Content, SenderType) VALUES ($1, $2, $3, $4) RETURNING *"
};

const getConversationById=async(CoversationID)=>{
    return await pool.query(ConversationQueries.getAllMessages,[CoversationID])
};
const createMessage=async(message)=>{
    const { PatientID,DoctorID,Content,SenderType }=message;
    const data = await pool.query(ConversationQueries.createMessage,[ PatientID ,DoctorID,Content,SenderType ])
    return data;
}

const getMessageOfDoctor=async(DoctorID)=>{
    const data = await pool.query(ConversationQueries.getAllConversationsOfDoctor, [DoctorID]);
    return data;
};

const getMessageOfPatient = async (PatientID)=>{
    const data = await pool.query(ConversationQueries.getAllConversationsOfPatient, [PatientID]);
    return data;
};

module.exports={
    createMessage,
    getMessageOfDoctor,
    getMessageOfPatient
}