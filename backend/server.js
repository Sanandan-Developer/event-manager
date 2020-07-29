const express = require("express");
const expressHandlerBars = require("express-handlebars");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const connection = require("./model");
const path = require("path");
const UserRouter = require("./routes/userEvent");
const userlogin = require('./routes/userlogin')
const UserEvent = mongoose.model("details")


app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/User", UserRouter);


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
    next();
})

app.use("/", userlogin)

// var users = [
//   {
//     email: "chetanpandey1266@gmail.com",
//     password: "password",
//   },
// ];
/*
app.post("/login", (req, res) => {
  let result = users.find((user) => user.email == req.body.email);
  if (result) {
    if (result.password == req.body.password) {
      res.redirect('http://localhost:3000/User')
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
*/


app.listen(5000, () => {
  console.log("Server Started");
});
