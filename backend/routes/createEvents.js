const mongoose = require('mongoose')
const express = require('express')


const router = express.Router()
const UserEvent = mongoose.model("details")

router.post("/Admin", (req, res)=>{
    console.log("You Are In", req.body)
})

module.exports = router