CREATE TABLE Patients (
    PatientID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    email VARCHAR(50) Unique,
    password VARCHAR(50)
);

CREATE TABLE Doctors (
    DoctorID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    email VARCHAR(50) Unique,
    password VARCHAR(50)
);

CREATE TABLE DOCTORPROFILE (
    DoctorProfileID SERIAL PRIMARY KEY,
    Specialization VARCHAR(30) CHECK (Specialization IN ('Cardiology', 'Neurology', 'Pediatrics', 'General Surgery')),
    Degree VARCHAR(30) CHECK (Degree IN ('MD', 'DO', 'MBBS', 'BDS')),
    IsVerified Boolean,
    DoctorID INT,
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

CREATE TABLE Conversations (
    ConversationID SERIAL PRIMARY KEY,
    PatientID INT,
    DoctorID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Content TEXT,
    SenderType VARCHAR(1) CHECK (SenderType IN ('D', 'P')),
    MessageOrder INT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

ALTER TABLE Conversations ALTER COLUMN MessageOrder SET DEFAULT 0;

CREATE OR REPLACE FUNCTION increment_message_order()
RETURNS TRIGGER AS $$
BEGIN
    SELECT COALESCE(MAX(MessageOrder), 0) + 1 INTO NEW.MessageOrder
    FROM Conversations
    WHERE PatientID = NEW.PatientID AND DoctorID = NEW.DoctorID;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER before_insert_conversations
BEFORE INSERT ON Conversations
FOR EACH ROW
EXECUTE FUNCTION increment_message_order();


SELECT Conversations.ConversationID,Patients.Name AS PatientName,Conversations.Content,Conversations.Timestamp,Conversations.SenderType,Conversations.MessageOrder FROM Conversations JOIN Patients ON Conversations.PatientID = Patients.PatientID WHERE Conversations.DoctorID = $DoctorID;

SELECT Conversations.ConversationID,Doctors.Name AS DoctorName,Conversations.Content,Conversations.Timestamp,Conversations.SenderType,Conversations.MessageOrder FROM Conversations JOIN Doctors ON Conversations.DoctorID = Doctors.DoctorID WHERE Conversations.PatientID = $PatientID;