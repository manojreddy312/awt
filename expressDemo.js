import express, { json } from "express";
import { MongoClient as mongoClient } from "mongoDB";

var app=express()
app.use(json())

mongoClient.connect("mongodb://0.0.0.0:27017/",(err,client)=>{
    if(!err){
        console.log("Connection Successful...")
        db=client.db("students");
    }
    else{
        console.log("Connection is not established...");

    }
})
app.listen(2000,()=>{
    console.log("Server started...")
})


app.get("/getstud",(req,res)=>{
    db.collection('Studentdetails').find().toArray((err,items)=>{
       
        console.log(items)
        res.write(JSON.stringify(items))
        res.end()
    })
})
app.post("/addstud",(req,res)=>{
    console.log(req.body)
    db.collection('Studentdetails').insertOne(req.body)
    res.end()
})

