const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    _id:{
        type:String,
        required: "Required"
    },
    "title":{
        type:String
    },
    "description":{
        type: String
    },
    "date":{
        type:String
    },
    "details":{
        type: String
    },
    "link":{
        type: String
    }
})




var UserLoginSchema = new mongoose.Schema({
    email:{
        type:String,
        required: "Required"
    },
    password:{
        type:String,
        required: "Required"
    }
})

mongoose.model("login", UserLoginSchema)
mongoose.model("details", UserSchema)