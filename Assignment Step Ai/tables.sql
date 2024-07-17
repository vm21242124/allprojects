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
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

CREATE TABLE Chat (
    MessageID SERIAL PRIMARY KEY,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Content TEXT,
    SenderType VARCHAR(1) CHECK (SenderType IN ('D', 'P')),
    MessageOrder INT,
    ConversationID INT,
    FOREIGN KEY (ConversationID) REFERENCES Conversations(ConversationID)
);


SELECT * from Chat WHERE ConversationID = 1;


ALTER TABLE Message RENAME TO Chat;
ALTER TABLE Message ALTER COLUMN MessageOrder SET DEFAULT 0;

CREATE OR REPLACE FUNCTION increment_message_order()
RETURNS TRIGGER AS $$
BEGIN
    SELECT COALESCE(MAX(MessageOrder), 0) + 1 INTO NEW.MessageOrder
    FROM Chat
    WHERE ConversationID = NEW.ConversationID;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



CREATE TRIGGER before_insert_message
BEFORE INSERT ON Chat
FOR EACH ROW
EXECUTE FUNCTION increment_message_order();


SELECT Conversations.ConversationID,Patients.Name AS PatientName,Conversations.Content,Conversations.Timestamp,Conversations.SenderType,Conversations.MessageOrder FROM Conversations JOIN Patients ON Conversations.PatientID = Patients.PatientID WHERE Conversations.DoctorID = $DoctorID;

SELECT Conversations.ConversationID,Doctors.Name AS DoctorName,Conversations.Content,Conversations.Timestamp,Conversations.SenderType,Conversations.MessageOrder FROM Conversations JOIN Doctors ON Conversations.DoctorID = Doctors.DoctorID WHERE Conversations.PatientID = $PatientID;

CREATE OR REPLACE FUNCTION get_or_create_conversation(
    patient_id INT,
    doctor_id INT
) RETURNS INT AS $$
DECLARE
    conv_id INT;
BEGIN
    SELECT ConversationID INTO conv_id
    FROM Conversations
    WHERE PatientID = patient_id AND DoctorID = doctor_id;

    IF conv_id IS NULL THEN
        INSERT INTO Conversations (PatientID, DoctorID)
        VALUES (patient_id, doctor_id)
        RETURNING ConversationID INTO conv_id;
    END IF;

    RETURN conv_id;
END;
$$ LANGUAGE plpgsql;


SELECT c.ConversationID ,d.DoctorID, d.Name,d.email,d.Age FROM Conversations c JOIN Doctors d ON c.DoctorID = d.DoctorID WHERE c.PatientID = $1;

SELECT c.ConversationID , p.PatientID,p.Name,p.email,p.Age FROM Conversations c JOIN Patients p ON c.PatientID = p.DoctorID WHERE c.DoctorID = $1;