const SuccessTemplate=(res,message,success,statuscode)=>{
    const temp={
        message,
        success
    }

    return res.json(temp).status(statuscode);
}

const FailureTemplate=(res,message,success,statuscode)=>{
    const temp={
        message,
        success
    }

    return res.json(temp).status(statuscode);
}

module.exports={SuccessTemplate,FailureTemplate}