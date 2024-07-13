const { createDoctor, getDoctorByEmail, getDoctorDetailsById } = require("../PostgresClient/PostgresClient");
const { SuccessTemplate, FailureTemplate } = require("../Template/Template");
const { doctorSecreteKey } = require("../utils/Constant");
const { generateJwtToken } = require("../utils/Jwt");

const registerDoctor = async(req,res)=>{
    const {name,age,email,password} =req.body;
    const doctormodel={name,age,email,password}
    const response=await createDoctor(doctormodel);

    if(response){
      return SuccessTemplate(res,"successfully created user",true,200)
    }
    return FailureTemplate(res, "user already exits",false,401);
}

const LoginDoctor =async (req,res)=>{
    const {email,password}=req.body;

    const data= await getDoctorByEmail(email);
    if(data.rows.length>0){
        const user=data.rows[0];
        if(password===user.password){
            delete user.password;
            const token = generateJwtToken(user,doctorSecreteKey);
            user.token=token;
            return res.json(user).status(200);
        }else{
            return res.json("wrong password").status(200);
        }
    }
    return res.json("user not register").status(401);    
}

const getDoctorById =async(req,res)=>{
    const doctorId=req.params.id;
    const data=await getDoctorDetailsById(doctorId);
    if(data?.rows?.length>0){
        return res.json(data.rows[0]).status(200);
    }
    return FailureTemplate(res,"user not exits",false,404);
}


module.exports= {registerDoctor,getDoctorById,LoginDoctor}