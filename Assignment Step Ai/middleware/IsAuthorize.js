const getAuthHeader = require("../utils/getAuthHeader");
const { decodeToken } = require("../utils/Jwt");

const isAuthorizePatient=async(req,res,next)=>{
    const {patientId}=req.params;
    const authorization=getAuthHeader(req);
    if(authorization){
        const token= authorization.slice(7);
        const decodedToken= decodeToken(token);
        
        if(decodedToken.patientid==patientId){
            return next();
        }
    }
    return res.json("unauthorize").status(401);
};

const isAuthorizeDoctor=async(req,res,next)=>{
    const {doctorId}=req.params;
    const authorization=getAuthHeader(req);
    if(authorization){
        const token= authorization.slice(7);
        const decodedToken= decodeToken(token);
        if(decodedToken.doctorid==doctorId){
            return next();
        }
    }
    return res.json("unauthorize").status(401);
};


module.exports={
    isAuthorizePatient,
    isAuthorizeDoctor
}