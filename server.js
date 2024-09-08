const express = require("express")
const mongooseConnection = require("./config/config")
const userModel = require("./models/user")
const app = express()

const users_data = [
    {
        username: 'user1',
        name: 'Aman Sharma',
        isMarried: true,
        password: 'password123',
        email: 'aman.sharma@example.com',
        age: 28
    },
    {
        username: 'user2',
        name: 'Priya Singh',
        isMarried: false,
        password: 'password456',
        email: 'priya.singh@example.com',
        age: 24
    },
    {
        username: 'user3',
        name: 'Rahul Gupta',
        isMarried: true,
        password: 'password789',
        email: 'rahul.gupta@example.com',
        age: 30
    },
    {
        username: 'user4',
        name: 'Neha Verma',
        isMarried: false,
        password: 'password012',
        email: 'neha.verma@example.com',
        age: 26
    },
    {
        username: 'user5',
        name: 'Vikram Mehta',
        isMarried: true,
        password: 'password345',
        email: 'vikram.mehta@example.com',
        age: 35
    },
    {
        username: 'user6',
        name: 'Anjali Yadav',
        isMarried: false,
        password: 'password678',
        email: 'anjali.yadav@example.com',
        age: 22
    },
    {
        username: 'user7',
        name: 'Rohit Kumar',
        isMarried: true,
        password: 'password901',
        email: 'rohit.kumar@example.com',
        age: 32
    },
    {
        username: 'user8',
        name: 'Sneha Patil',
        isMarried: false,
        password: 'password234',
        email: 'sneha.patil@example.com',
        age: 29
    },
    {
        username: 'user9',
        name: 'Arjun Singh',
        isMarried: true,
        password: 'password567',
        email: 'arjun.singh@example.com',
        age: 31
    },
    {
        username: 'user10',
        name: 'Pooja Desai',
        isMarried: false,
        password: 'password890',
        email: 'pooja.desai@example.com',
        age: 27
    }
];

// You can now use this `users` array with `insertMany` in your Mongoose model

app.get("/",(req,res)=>
{
    res.send("advance mongo")
})

app.get("/createmany",async(req,res)=>
{
   let manyuser=await userModel.insertMany(users_data)
   res.send(manyuser)
})
// -----------------------------------------------eq operator (similar to ex= find({age:40}))------------------------------------->

app.get("/specific",async(req,res)=>{
    //
    let finduserspecific =await userModel.find({age:30})
    //    let finduserspecific =await userModel.find({age:{$eq:30}})

    // finds the user have age not equals (ne) to 30 (in our case)-->
    // let finduserspecific =await userModel.find({age:{$ne:30}})

    // finds the user have age less then (lt) to 30 (in our case)-->
    // let finduserspecific =await userModel.find({age:{$lt:30}})
       
    // finds the user have age less then and equals (lte) to 30 (in our case)-->
    //   let finduserspecific =await userModel.find({age:{$lte:30}})

    // finds the user have age greater then equals (gte) to 30 (in our case)-->
    // let finduserspecific =await userModel.find({age:{$gte:30}})

    //  finds the user have age greater then (gt) to 30 (in our case)-->
    // let finduserspecific =await userModel.find({age:{$gt:30}})
 
    // find the user having age 30, 36 31  ------->
    // let finduserspecific =await userModel.find({age:{$in:[30,26,31]}})

    // find the user having age not--> 30, 36 31  --------->
    // let finduserspecific =await userModel.find({age:{$nin:[30,26,31]}})

    // check if particular feild is present or absent  ex- if i set age $exists false means show users in which age key not available
    // let finduserspecific =await userModel.find({age:{$exists:false}})


    // using AND or OR find user  have either 2 properties or 1 of them atleast
    // let finduserspecific = await userModel.find({$and: [{ age: { $gt: 30 } },{ isMarried: true }]});
    

    
    //  ------------------------------------------------REGEX----------------------------------------

    // an$ -> aise words jinke last me an ata ho
    // ^H -> aise words jo H se start ho rhe ho 
    // ^H/i aise words ho H or h dono se start ho (case insensitive)
    // ^a.*on$ aise words jo a se start ho beech me kuch bhi ho mgr on se end ho 

    
    // let finduserspecific = await userModel.find({name:{$regex:/^A.*h$/}})
    // let finduserspecific = await userModel.find({name:{$regex:/^A.*h$/i}})  // for case sensitive

    res.send(finduserspecific)

    })


app.listen(3000,(req,res)=>
{
    console.log("server started.........")
})