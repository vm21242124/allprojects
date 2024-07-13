const pool = require("../dbconfig/dbpool");

const PatientQueries = {
  getPatientById: "SELECT * FROM Patients WHERE PatientID = $patientId",
  getPatientByEmail: "SELECT * FROM Patients WHERE email = '$email'",
  registerPatient:
    "INSERT INTO Patients (Name, Age, email, password) VALUES ('$name',$age,'$email','$password')",
};

const DoctorQueries = {
  getDoctorById: "SELECT * FROM Doctors WHERE DoctorID = $doctorId",
  getDoctorByEmail: "SELECT * FROM Doctors WHERE email = '$email'",
  registerDoctor:
    "INSERT INTO Doctors (Name, Age, email, password) VALUES ('$name',$age,'$email','$password')",
};

const getPatientByEmail = async (patientEmail) => {
  const query = PatientQueries.getPatientByEmail.replace(
    "$email",
    patientEmail
  );
  return await pool.query(query);
};
const getPatientDetailsById = async (patientId) => {
  const query = PatientQueries.getPatientById.replace("$patientId", patientId);
  return await pool.query(query);
};

const createPatient = async (PatientModel) => {
  const data = await getPatientByEmail(PatientModel.email);
  if (data?.rows?.length === 0) {
    const query = PatientQueries.registerPatient
      .replace("$name", PatientModel.name)
      .replace("$age", PatientModel.age)
      .replace("$email", PatientModel.email)
      .replace("$password", PatientModel.password);
    const data = await pool.query(query);
    console.log(data);
    return true;
  } else {
    return false;
  }
};

const getDoctorByEmail = async (patientEmail) => {
  const query = DoctorQueries.getDoctorByEmail.replace(
    "$email",
    patientEmail
  );
  return await pool.query(query);
};
const getDoctorDetailsById = async (patientId) => {
  const query = DoctorQueries.getDoctorById.replace("$doctorId", patientId);
  return await pool.query(query);
};

const createDoctor = async (doctormodel) => {
  const data = await getDoctorByEmail(doctormodel.email);
  if (data?.rows?.length === 0) {
    const query = DoctorQueries.registerDoctor
      .replace("$name", doctormodel.name)
      .replace("$age", doctormodel.age)
      .replace("$email", doctormodel.email)
      .replace("$password", doctormodel.password);
    const data = await pool.query(query);
    console.log(data);
    return true;
  } else {
    return false;
  }
};
module.exports = {
    getPatientByEmail,
    getPatientDetailsById,
    createPatient,
    getDoctorByEmail,
    getDoctorDetailsById,
    createDoctor 
};
