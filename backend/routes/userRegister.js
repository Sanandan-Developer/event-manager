const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()
const UserRegister = mongoose.model("register")

router.post("/register", (req, res)=>{
    console.log("You are in backend", req.body)
    
    res.status(200).send({
        message:`${req.body.name} you are registered`,
        name: req.body.name
    })



    // const userRegister = new UserRegister(req.body)

    // userRegister.save((err)=>{
    //     if(err){
    //         //console.log(err)
    //         console.log(err)
    //     }
    // })

})

module.exports = router