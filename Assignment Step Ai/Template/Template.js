const SuccessTemplate=(res,message,success,statuscode,data)=>{
    const temp={
        message,
        success,
        data
    }

    return res.status(statuscode).json(temp);
}

const FailureTemplate = (res, message, success, statuscode) => {
    const temp = {
        message,
        success
    };

    return res.status(statuscode).json(temp);
}

module.exports={SuccessTemplate,FailureTemplate}