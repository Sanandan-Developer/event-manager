const mongoose = require('mongoose')
const express = require('express')
  
const router = express.Router()
const userslogin = mongoose.model("register")


router.post("/login", (req, res) => {
    
    userslogin.find((err, data)=>{
      let result = data.find((user) => user.email === req.body.email)
      //console.log(result)
      if (result) {
        if (result.password1 == req.body.password) {
          res.status(200).send({
            message: "Logged In Successfully",
            id: result._id
          })
        }else{
          res.status(201).send({
            message: "Password Incorrect"
          });
        }
      }else{
          res.status(202).send({
              message: "User Not Found"
          })
      }
  })
});

module.exports = router;