import mongoose from "mongoose";

export const connectToDB = async(connection_string)=>{
    await mongoose.connect(connection_string);
}

