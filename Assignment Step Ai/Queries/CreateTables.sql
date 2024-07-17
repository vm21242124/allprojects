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
