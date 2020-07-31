const mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId;
var ObjectIdSchema = mongoose.Schema.ObjectId;


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
    _id: {
        type:ObjectId
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

var UserRegister = new mongoose.Schema({
    name:{
        type:String,
        min: [4, 'UserName must contain more than 4 characters'],
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password1:{
        type:String,
        required:true
    },
    password2:{
        type:String,
        required:true
    },
    userType:{
        type:String,
        required:true,
        enum:['Admin', 'User']
    },
    phNum:{
        type:String,
        required: function(){
            return this.userType == ('Admin')
        }
    }
})


var CreateEvents = new mongoose.Schema({
    eventName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


mongoose.model("login", UserLoginSchema)
mongoose.model("details", UserSchema)
mongoose.model("register", UserRegister)
mongoose.model("events", CreateEvents)
// module.exports = {
//     UserLoginSchema: UserLoginSchema,
//     UserSchema: UserSchema,
//     UserRegister: UserRegister
// }