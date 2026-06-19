import { configDotenv } from "dotenv";
configDotenv({quiet:true});

import express from "express";
import CORS from "cors";

import { connectToDB } from "./utils/db.js";
import VolunteerRouter from "./routers/voluteer.route.js";
import EventRouter from "./routers/event.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(CORS({
    origin:"*"
}));

connectToDB(DB_URI).then((res)=>{
    console.log("Connected to Database successfully.")
}).catch((err)=>{
    console.log("Failed to connect to Database.")
})

//index router
app.get("/",(req,res)=>{
    return res.status(200).json({
        success:true,
        status:"Healthy and Live."
    })
})

// volunteer route
app.use("/api/volunteer",VolunteerRouter);

//event route
app.use("/api/event",EventRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})