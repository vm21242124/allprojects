const jwt=require('jsonwebtoken')


const generateJwtToken=(payload,secreteKey)=>{
    return jwt.sign(payload,secreteKey,{expiresIn:'1d'});
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
module.exports={generateJwtToken,verifyToken,decodeToken};