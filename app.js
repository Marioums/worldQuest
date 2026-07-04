import * as dotenv from 'dotenv';
dotenv.config();

import express from "express"; 

const app = express(); 
 
app.use(express.urlencoded({extended: true})); 
app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("index.ejs"); 
})


const port = process.env.PORT; 
app.listen(port, ()=>{
    console.log("Server is running on port " + port); 
})