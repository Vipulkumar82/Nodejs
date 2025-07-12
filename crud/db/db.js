import mongoose from "mongoose";

export async function dbconnect(){
    try {
        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("DB Connected......")
    } catch (error) {
        console.log('Failed to connect',error);
    }
}