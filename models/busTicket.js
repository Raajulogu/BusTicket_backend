import mongoose from 'mongoose';

let seatSchema=new mongoose.Schema(
    {
        bookedSeats:{
            type:String,
            required:true,
        }
    }
);

let BusSeat = mongoose.model("recipe", seatSchema);
export { BusSeat };