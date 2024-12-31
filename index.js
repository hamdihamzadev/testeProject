const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(3003,()=>{
    console.log('Server is running on port 3000')
})