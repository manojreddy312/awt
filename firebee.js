import express from 'express'
import fb from 'firebase'
var app=express()
app.use(express.json())
app.listen(2500,()=>{
    console.log("server started")
})
const firebaseConfig = {
    apiKey: "AIzaSyDK8coupWIgSOnSzFYszuntz-AZVCI1D1I",
    authDomain: "firebyproject.firebaseapp.com",
    projectId: "firebyproject",
    storageBucket: "firebyproject.appspot.com",
    messagingSenderId: "171485616292",
    appId: "1:171485616292:web:3c552dff9e14cc6a0f2e31",
    measurementId: "G-XYY4MMR2DD"
  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  fb.initializeApp(firebaseConfig)
  var dbref=fb.database().ref("fireby")
  app.get("/stu",(req,res)=>{
      dbref.on('value',(snap)=>{
          res.send(snap.val())
        
      })
    
  })
  
  app.delete("/del/:id",(req,res)=>{
      var id=req.params.id
      dbref.child(id).remove()
      res.send("deleted")
  })
  app.put("/update/:id",(req,res)=>{
      var id=req.params.id
      console.log(req.body)
      dbref.child(id).update({
            "name":"chinnu"
      })
      res.send("updated")
  })
  app.post("/addStudent",(req,res)=>{
      dbref.child(req.body.id).set(req.body,(data)=>{
          res.send("inserted")
      })
  })