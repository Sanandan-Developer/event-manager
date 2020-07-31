const mongoose = require('mongoose')
const express = require('express')

const router = express.Router()
const userslogin = mongoose.model("login")

var users = [
    {
      email: "chetanpandey1266@gmail.com",
      password: "password",
    },
];

userslogin.find((err, data )=>{
  console.log(err)
  console.log(data)
})


router.post("/login", (req, res) => {
    
    let result = users.find((user) => user.email == req.body.email);
    if (result) {
      if (result.password == req.body.password) {
        res.status(200).send({
          message: "Logged In Successfully"
        })
      }else{
        res.status(201).send({
          message: "Password Incorrect",
        });
      }
    }else{
        res.status(202).send({
            message: "User Not Found"
        })
    }
});

module.exports = router;