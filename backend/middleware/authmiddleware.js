const jwt=require("jsonwebtoken")
exports.protect=(req,res,next)=>{
    let token=req.headers.authorization;
    if(!token)
    {
        res.status(401).json({msg:"No token"})
    }
    try{
        token=token.split(" ")[1] //token stores the <bearer> <token> two string should access so we used split and converting to string array and accessing 1st index word bearer
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(error)
    {
        res.json(error)
    }
}