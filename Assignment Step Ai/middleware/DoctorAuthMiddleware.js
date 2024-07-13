const { doctorSecreteKey } = require("../utils/Constant");
const { verifyToken } = require("../utils/Jwt");

const IsLoginDoctor=async(req,res,next)=>{
   const authorization = req.headers["authorization"];

   if(authorization){
       const authToken=authorization?.slice(7);
       const isvalid= await verifyToken(authToken,doctorSecreteKey);
       if(isvalid){
            return next();
       }
   }
   return res.json("token is not available").status(403);
}

module.exports={IsLoginDoctor};