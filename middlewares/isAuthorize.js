const User=require('../models/User')

const isAuthorize=rolban=>(req,res,next)=>{
    User.findById(req.user.id)
        .then((user)=>{
           if(rolban.includes(user.role)&& rolban.includes(user.banned)){
               next()
           }else{
               res.status(403).json({errors:'you are not authorized'})
           }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports=isAuthorize