import express from "express"; 
import router from "./routes/countryRoutes.js"; 

const app = express();

app.use(express.json()); 

app.get("/test", (req, res)=>{
    res.json({message: "Hello from backend!"}); 
})

app.use("/api", router); 

export default app; 