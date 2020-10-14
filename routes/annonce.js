const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthorizerole=require('../middlewares/isAuthorizerole')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const Annonce=require("../models/Annonce")
const User=require("../models/User")


// add annonce
router.post('/addannonce',isAuthenticate,isAuthorize(['artisan',false]), (req,res)=>{
    const user =req.user.id
    const {title,typeTravaux,category,description,date}=req.body

    const annonce= new Annonce({user,title,typeTravaux,category,description,date})
     annonce.save()
     .then(annonce=>res.send(annonce))
     .catch(err=>console.log(err))
          });


// get all annonce
router.get('/allannonce',isAuthenticate,isAuthorizerole(['client','artisan','admin']),(req,res)=>{
    Annonce.find().populate("user")
    .then(annonce=>res.send(annonce))
    .catch(err=>console.log(err))
          });

//Delete annonce artisan by Artisan && annonce client by client &&annonce artisan ou client by admin
router.delete("/deleteannonceartisan/:_id",isAuthenticate,isAuthorize(['artisan','admin',false]),(req,res)=>{
    const _id=req.params._id
    if (req.user.role!=="admin"){
     Annonce.findOneAndDelete({user:req.user.id,_id}).then(annonce=>res.send(annonce))
     .catch(err=>console.log(err))
    } else {Annonce.findOneAndDelete({_id}).then(annonce=>res.send(annonce))
    .catch(err=>console.log(err))}
    
})

// edit annonce artisan by Artisan && annonce client by client
router.put("/editannonce/:_id",isAuthenticate,isAuthorize(['artisan',false]),(req,res)=>{

    const {title,typeTravaux,category,description,date}=req.body
    const _id=req.params._id

    Annonce.findOneAndUpdate({user: req.user.id,_id},{$set:{title,typeTravaux,category,description,date}},{new:true})
    .then(annonces=>res.send(annonces))
    .catch(err=>console.log(err))
})


module.exports=router