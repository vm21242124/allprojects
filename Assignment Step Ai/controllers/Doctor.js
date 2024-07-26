const {
  createDoctor,
  getDoctorByEmail,
  getDoctorDetailsById,
  createDoctorProfileFirstTime,
  updateDoctorProfileQuery,
  getAllDoctorsProfiles,
} = require("../PostgresClient/PostgresClient");
const { SuccessTemplate, FailureTemplate } = require("../Template/Template");
const {
  doctorSecreteKey,
  doctorSpecialization,
  doctorDegree,
  ROLES,
} = require("../utils/Constant");
const { generateJwtToken, addCookie } = require("../utils/Jwt");

const registerDoctor = async (req, res) => {
  const { name, age, email, password } = req.body;
  const doctormodel = { name, age, email, password };
  const response = await createDoctor(doctormodel);

  if (!response) {
    return FailureTemplate(res, "user already exits", false, 403);
  }
  console.log(response);
  return SuccessTemplate(res, "successfully created user", true, 200,response.rows[0]);
};

const LoginDoctor = async (req, res) => {
  const { email, password } = req.body;

  const data = await getDoctorByEmail(email);
  if (data.rows.length > 0) {
    const user = data.rows[0];
    if (password === user.password) {
      delete user.password;
      console.log(user);
      const token = generateJwtToken(user.doctorid, doctorSecreteKey,ROLES.DOCTOR);


      const cookieOptions = {
        // httpOnly: true,
        sameSite: 'Lax', // Adjust as needed for your use case
        maxAge:  72 * 60 * 60 * 1000, // 1 day
      };


     res.cookie('auth-token', token, cookieOptions);
      return res.status(200).json(user);
    } else {
      return res.status(404).json("wrong password");
    }
  }
  return res.json("user not register").status(403);
};

const getDoctorById = async (req, res) => {
  const { doctorId } = req.params;
  const data = await getDoctorDetailsById(doctorId);
  if (data?.rows?.length > 0) {
    return res.json(data.rows[0]).status(200);
  }
  return FailureTemplate(res, "user not exits", false, 404);
};


const createDoctorProfile = async (req, res) => {
  const { doctorId } = req.params;
  const { Specialization, Degree } = req.body;
  const isValidSpeacialization = doctorSpecialization.includes(Specialization);
  const isValidDegree = doctorDegree.includes(Degree);

  if (!isValidSpeacialization || !isValidDegree) {
    return res.json("not valid degreee or speacialization").status(404);
  }

  const data = await getDoctorDetailsById(doctorId);
  if (data.rows.length !== 0) {
    const doctorData = data.rows[0];
    const isValid = await createDoctorProfileFirstTime(
      Specialization,
      Degree,
      doctorId
    );
    if (isValid) {
      return res.json(doctorData).status(201);
    } else {
      return res
        .json("profile is already created you can just update")
        .status(403);
    }
  }
  return res.json("doctor not found").status(404);
};

const updateDoctorProfile = async (req, res) => {
  const { doctorId } = req.params;
  const { Specialization, Degree } = req.body;
  const isValidSpeacialization = doctorSpecialization.includes(Specialization);
  const isValidDegree = doctorDegree.includes(Degree);

  if (!isValidSpeacialization || !isValidDegree) {
    return res.json("not valid degreee or speacialization").status(404);
  }

  const data = await getDoctorDetailsById(doctorId);
  if (data.rows.length !== 0) {
    const doctorData = data.rows[0];
    await updateDoctorProfileQuery(Specialization, Degree, doctorId);
    return res.json(doctorData).status(200);
  }
  return res.json("doctor not found").status(404);
};

const getAllDoctorsProfile = async (req, res) => {
  const data = await getAllDoctorsProfiles();
  if (data?.rows?.length > 0) {
    return res.json(data.rows).status(200);
  }
  return res.json("no profile present").status(404);
};
module.exports = {
  registerDoctor,
  getDoctorById,
  LoginDoctor,
  createDoctorProfile,
  updateDoctorProfile,
  getAllDoctorsProfile,
};
