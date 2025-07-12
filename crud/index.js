import express from "express";
import { config } from "dotenv";
import { dbconnect } from "./db/db.js";
import router from "./routes/routes.js";

config();
const app=express();
app.use(express.json());
dbconnect();

app.use('/api/user/',router);



app.listen(process.env.PORT,function(req,res){
    console.log(`server is running..... http://localhost:${process.env.PORT}`)
});

