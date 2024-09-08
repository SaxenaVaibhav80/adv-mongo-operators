const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    username:String,
    name:String,
    password:String,
    isMarried:Boolean,
    email:String,
    age:String
})

const user = mongoose.model("user",userSchema)

module.exports=user