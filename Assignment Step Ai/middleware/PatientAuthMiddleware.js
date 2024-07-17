const { patientSecreteKey } = require("../utils/Constant");
const getAuthHeader = require("../utils/getAuthHeader");
const { verifyToken, decodeToken } = require("../utils/Jwt");

const IsPatientLogin=async(req,res,next)=>{
   const authorization = getAuthHeader(req);

   if(authorization){
       const authToken=authorization?.slice(7);
       const isvalid= await verifyToken(authToken,patientSecreteKey);
       if(isvalid){
            return next();
       }
   }
   return res.json("token is not available").status(403);
}

module.exports={IsPatientLogin};