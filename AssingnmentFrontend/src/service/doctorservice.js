import axios from "axios";

const doctorBaseUrl= 'http://localhost:3000/doctor';

const restClient = axios.create({
    baseURL:doctorBaseUrl,
    headers:
    {"Content-Type":"application/json"}
})

const RegisterDoctor = async(data)=>{
    return await restClient.post("/register",data);
};
const LoginDoctor = async(data)=>{
    return await restClient.post("/login",data);
};
const UpdateDoctorDetails=async(doctorId,data)=>{

    return await restClient.put(`/${doctorId}`,data);
};


export const DoctorService={
    RegisterDoctor,
    LoginDoctor,
    UpdateDoctorDetails
}