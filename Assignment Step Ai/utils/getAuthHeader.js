const getAuthHeader=(req)=>{
    return req.headers["authorization"];
};

module.exports=getAuthHeader;