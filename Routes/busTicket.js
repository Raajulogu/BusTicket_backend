import express from 'express';
import { BusSeat } from '../models/busTicket.js';

let router = express.Router();

//Get Data
router.get("/get-all",async (req,res)=>{
    try {
        let data = await BusSeat.find()
        //Check data is Available
        if(!data) return res.status(400).json({message:"Data Unavailable"});
        
        res.status(200).json({
            message:"Successfully got Data",
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
})

//Add a Booked Seat
router.post("/book", async (req, res) => {
    try {
        let seats=req.body.seat;
         //new booking updation
         let addData
         for(var i=0;i<seats.length;i++) {
            addData = await new BusSeat({
                bookedSeats:seats[i]
            }).save();
         }
        if (!addData) {
            return res
                .status(400)
                .json({ message: "Error Occured" })
        }
        res.status(200).json({ message: "Data Added Sucessfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

export const BusRouter = router;