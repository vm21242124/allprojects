const jwt=require('jsonwebtoken')


const generateJwtToken=(userId,secreteKey,role)=>{
    const payload={
        userId,
        role
    }
    return jwt.sign(payload,secreteKey,{expiresIn:'3d'});
}

const verifyToken = async (token,secreteKey) => {
    try {
        await jwt.verify(token, secreteKey);
        return true; 
    } catch (err) {
        return false;
    }
};
const decodeToken=(token)=>{
    return jwt.decode(token);
}
const addCookie=(res,token)=>{
   
};
module.exports={generateJwtToken,verifyToken,decodeToken,addCookie};