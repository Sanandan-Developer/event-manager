const mongoose = require('mongoose')
const express = require('express')


const router = express.Router()
const UserEvent = mongoose.model("details")


router.get("/", (req, res)=>{
    UserEvent.find((err,docs)=>{
        if(!err){
            res.send(docs)
        }
        
    })
})

module.exports = router