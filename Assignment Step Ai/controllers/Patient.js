const { getPatientByEmail, createPatient, getPatientDetailsById } = require("../PostgresClient/PostgresClient");
const { SuccessTemplate, FailureTemplate } = require("../Template/Template");
const { patientSecreteKey } = require("../utils/Constant");
const { generateJwtToken } = require("../utils/Jwt");

const registerPatient = async(req,res)=>{
    const {name,age,email,password} =req.body;
    const PatientModel={name,age,email,password}
    const response=await createPatient(PatientModel);

    if(response){
      return SuccessTemplate(res,"successfully created user",true,200,response.rows)
    }
    return FailureTemplate(res, "user already exits",false,401);
}

const LoginPatient =async (req,res)=>{
    const {email,password}=req.body;

    const data= await getPatientByEmail(email);
    if(data.rows.length>0){
        const user=data.rows[0];
        console.log(password,user.password);
        if(password===user.password){
            delete user.password;
            const token = generateJwtToken(user,patientSecreteKey);
            user.token=token;
            return res.json(user).status(200);
        }else{
            return res.json("wrong password").status(200);
        }
    }
    return res.json("user not register").status(401);    
}

const getPatientById =async(req,res)=>{
    const { patientId } =req.params;

    const data=await getPatientDetailsById(patientId);
    if(data?.rows?.length>0){
        return res.json(data.rows[0]).status(200);
    }
    return FailureTemplate(res,"user not exits",false,404);
}


module.exports= {registerPatient,LoginPatient,getPatientById}