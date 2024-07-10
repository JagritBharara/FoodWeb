import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://jagritbharara12:9667819733@cluster0.5xzl1u6.mongodb.net/food-del').then(()=>console.log("DB connected"));
}