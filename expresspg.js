import express from 'express'
const users=[{"id":1,"name":"manoj"},{"id":2,"name":"reddy"}]
import http from 'http'
var app=express()
app.use(express.json())
app.listen(3000,()=>{
    console.log("server started")
})
app.get('/getusers',(req,res)=>{
    res.send(JSON.stringify(users))
})
app.get('/users/:id',(req,res)=>{
    console.log(req.params.id)
    users.find((ele)=>{
        if(ele.id==parseInt(req.params.id)){
            res.json(ele)
        }
        else
        res.send("not found")
    })
})
app.post('/postusers',(req,res)=>{
    console.log(req.body)
        const user={
        id:req.body.id,
        name:req.body.name
    };
    
    users.push(user);
    res.json(users);
    res.end();
})
app.put('/putusers/:id',(req,res)=>{
    const user=users.find(ele=>ele.id===parseInt(req.params.id))
    if(user){
        user.name=req.body.name;
        res.json(users)
    }
    else
        res.send("user with id is not present")
})