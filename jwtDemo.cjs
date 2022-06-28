var http = require('http')
var express = require('express')
var jwt = require("jsonwebtoken")
var app = express()
var cors = require('cors')

const { verify } = require("jsonwebtoken") 
var mongoClient = require('mongodb').MongoClient
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        console.log("Error", err)
    }
    else{
        console.log("Connection is established")
        db = client.db('student')
    }
})

app.listen(2000,()=>{
    console.log("Server Started")
})

app.get("/",verifyToken,(req,res)=>{
    res.send("this is testing page")
})

app.post('/login',(req,res)=>{
    uname = req.body.username
    pwd = req.body.password
    db.collection('users').findOne({"username":uname,"password":pwd}).then((result)=>{
        if(result){
            const token = jwt.sign({"username":uname},"cvrcollege")
            res.json({
                success:true,
                message:"Authentication Successful",
                token:token
            })
            res.end()
        }
        else{
            res.json({
                success:false,
                message:"No username and password"
            })
            res.end()
        }
    })
})


function verifyToken(req,res,next){
    let token = req.headers['authorization']
    if(token){
        token = token.split(" ")[1]
        console.log(token)
        jwt.verify(token,"cvrcollege",(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:"token is not valid"
                })
            }
            else{
                next();
            }
        })
    }
    else{
        return res.json({
            success:"false",
            message:"a token is required for authentication"
        })
    }
}