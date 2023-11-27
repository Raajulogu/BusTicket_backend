import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbconnection } from './db.js';
import { BusRouter } from './Routes/busTicket.js';

//Configure env
dotenv.config();

let app=express();
let PORT=process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//db connection
dbconnection();

//routes
app.use("/api/bus",BusRouter);

//server connection
app.listen(PORT,()=>console.log(`Server running in localhost:${PORT}`));