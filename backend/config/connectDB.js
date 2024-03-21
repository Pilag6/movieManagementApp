import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const {MONGODB_URI} = process.env;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`<<MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(":: Database Not Connection");
    }
};

export default connectDB;
