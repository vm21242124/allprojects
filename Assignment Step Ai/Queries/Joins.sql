SELECT 
    c.ConversationID ,d.DoctorID, d.Name,d.email,d.Age
FROM Conversations c
JOIN Doctors d 
    ON c.DoctorID = d.DoctorID 
WHERE c.PatientID = $1;

SELECT 
    c.ConversationID , p.PatientID,p.Name,p.email,p.Age 
FROM Conversations c
JOIN Patients p 
    ON c.PatientID = p.DoctorID 
WHERE c.DoctorID = $1;