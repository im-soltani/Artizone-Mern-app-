const User=require('../models/User')

const isAuthorizerole=rol=>(req,res,next)=>{
    User.findById(req.user.id)
        .then((user)=>{
           if(rol.includes(user.role)){
               next()
           }else{
               res.status(403).json({errors:'you are not authorized'})
           }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports=isAuthorizerole