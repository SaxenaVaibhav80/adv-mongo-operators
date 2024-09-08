const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/advmongo')

const db = mongoose.connection

db.on("open",()=>
{
    console.log("db connected.....")
})
module.exports=db