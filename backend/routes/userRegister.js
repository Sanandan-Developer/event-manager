const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()
const UserRegister = mongoose.model("register")

router.post("/register", (req, res)=>{
    console.log("You are in backend", req.body)

    const userRegister = new UserRegister(req.body)

    userRegister.save((err)=>{
        if(err){
            //console.log(err)
            console.log(err)
        }
    })

})

module.exports = router