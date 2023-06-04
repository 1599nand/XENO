const jwt = require('jsonwebtoken');

const user = require("../models/user");

module.exports = (req,res,next) =>{
    const authHeader = req.headers.authorization;

    if(authHeader){
        const token = authHeader.split(" ")[1];

        jwt.verify(token,process.env.JWT_SECRET,async(err,payload) =>{

            try{
                if(err){
                    return res.status(401).json({error:"unauthorized"});
                }
                const User = await User.findOne({_id:payload._id}).select("-password");
                req.user = user;
                next();
            }catch(err){
                console.log(err);
            }

           

    });
}
    else {
        return res.status(403).json({error:"Forbidden"});
    }
};
