const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        requrired: true
    },
    email:{
        type:email,
        required:true
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);