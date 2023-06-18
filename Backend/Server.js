const express = require('express');
const app = express();
const PORT = 4533 //PORT
const mongoose = require('mongoose'); //mongoose for DB
const cors = require('cors'); // to remore cor issue
app.use(cors())  // cor policy activation
app.use(express.json()); // to render json req from frontend
app.use(express.urlencoded({extended:true})); // to render form data from frontend

mongoose.connect("mongodb+srv://Najla:3136@cluster0.c9gsepb.mongodb.net/")
.then(()=>{console.log("MongoDB connected successfully")})
.catch(()=>{console.log("Error connecting to mongoDB")})


// CRUD operation 
// C-Create - POST 
//R-READ-GET
//U-Update -PUT
//D-Delete - DELETE

app.post('/addData', (req, res) => {
    try {

        let item = req.body
        console.log(item)



    } catch (error) {
        res.send(error);
    }
})


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});