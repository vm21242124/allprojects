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

CREATE TABLE Doctors (
    DoctorID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Specialization VARCHAR(100),
    ContactDetails TEXT
);

CREATE TABLE PatientInteractions (
    InteractionID SERIAL PRIMARY KEY,
    PatientID INT,
    DoctorID INT,
    Query TEXT,
    Response TEXT,
    InteractionDate TIMESTAMP,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
    FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);
