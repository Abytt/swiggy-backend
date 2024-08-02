const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {loginModel}  = require("./models/admin")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://abytomy:Aby2905@cluster0.zupck9h.mongodb.net/swiggyAppDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/signUp",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,12)
    input.password=hashedpassword
    console.log(input)

    let result=new loginModel(input)
    result.save()
    res.json({"status":"success"})
})

app.listen(5050,()=>{
    console.log("server started")
})