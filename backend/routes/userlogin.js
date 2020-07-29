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

userslogin.find({'email':'chetanpandey1266@gmail.com'}, (err, docs)=>{
    console.log(docs, err)      
})

router.post("/login", (req, res) => {
    //console.log(req)
    
    let result = users.find((user) => user.email == req.body.email);
    if (result) {
      if (result.password == req.body.password) {
        res.status(200).send({
          message: "Logged In Successful"
        })
      } else {
        res.status(200).send({
          message: "Password Incorrect",
        });
      }
    }else{
        res.status(200).send({
            message: "User Not Found"
        })
    }
});

module.exports = router;