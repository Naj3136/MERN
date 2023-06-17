const express = require('express');
const app = express();
const PORT =4578
const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://Najla:3136@cluster0.c9gsepb.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("Error connecting to mongoDB")})

app.get('/',(req,res)=>{
    res.send('Server is running')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});