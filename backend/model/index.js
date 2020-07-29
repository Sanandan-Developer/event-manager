const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/UserEvents", { useNewUrlParser: true, useUnifiedTopology: true} , (err)=>{
    if(!err){
        console.log('Succcessfully connected to the database')
    }else{
        console.log('Retry!! Not connected to the database')
    }
})

const User = require('./user.model')
