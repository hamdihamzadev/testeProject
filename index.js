const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const port=process.env.PORT || 3003

app.listen(port,()=>{
    console.log('Server is running on port 3000')
})