const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthorizerole=require('../middlewares/isAuthorizerole')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const Annoncecl=require("../models/Annoncecl")
const User=require("../models/User")


// add annonce
router.post('/addannoncecl',isAuthenticate,isAuthorize(['client',false]), (req,res)=>{
    const user =req.user.id
    const {title,typeTravaux,category,description,date}=req.body

    const annonce= new Annoncecl({user,title,typeTravaux,category,description,date})
     annonce.save()
     .then(annonce=>res.send(annonce))
     .catch(err=>console.log(err))
          });


// get all annonce
router.get('/allannoncecl',isAuthenticate,isAuthorizerole(['client','artisan','admin']),(req,res)=>{
    const user =req.user
    Annoncecl.find().populate("user")
    .then(annonce=>res.send(annonce))
    .catch(err=>console.log(err))
          });

//Delete annonce artisan by Artisan && annonce client by client &&annonce artisan ou client by admin
router.delete("/deleteannonceartisancl/:_id",isAuthenticate,isAuthorize(['client','admin',false]),(req,res)=>{
    const _id=req.params._id
    if (req.user.role!=="admin"){
     Annoncecl.findOneAndDelete({user:req.user.id,_id}).then(annonce=>res.send(annonce))
     .catch(err=>console.log(err))
    } else {Annoncecl.findOneAndDelete({_id}).then(annonce=>res.send(annonce))
    .catch(err=>console.log(err))}
    
})

// edit annonce artisan by Artisan && annonce client by client
router.put("/editannoncecl/:_id",isAuthenticate,isAuthorize(['client',false]),(req,res)=>{

    const {title,typeTravaux,category,description,date}=req.body
    const _id=req.params._id

    Annoncecl.findOneAndUpdate({user: req.user.id,_id},{$set:{title,typeTravaux,category,description,date}},{new:true})
    .then(annonces=>res.send(annonces))
    .catch(err=>console.log(err))
})


module.exports=router