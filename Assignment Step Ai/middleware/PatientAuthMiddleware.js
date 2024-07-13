const { verifyToken, decodeToken } = require("../utils/Jwt");

const IsPatientLogin=async(req,res,next)=>{
   const authorization = req.headers["authorization"];

   if(authorization){
       const authToken=authorization?.slice(7);
       const isvalid= await verifyToken(authToken);
       if(isvalid){
            return next();
       }
   }
   return res.json("token is not available").status(403);
}

module.exports={IsPatientLogin};