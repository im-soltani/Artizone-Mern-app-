const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const Rate=require("../models/Rate")


// add Rating by client
router.post('/:id/addrate',isAuthenticate,isAuthorize(['client',false]),(req,res)=>{
    const user =req.user.id
    const {rating }=req.body
    const profile=req.params.id
   

    const rate= new Rate({user,rating,profile})
     rate.save()
     .then(profile=>res.send(profile))
     .catch(err=>console.log(err))
          });

// get all Rate
router.get('/allrate',(req,res)=>{
    Rate.find()
    .then(profiles=>res.send(profiles))
    .catch(err=>console.log(err))
          });

          module.exports=router