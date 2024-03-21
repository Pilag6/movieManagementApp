import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import moviesRouter from "./routes/moviesRouter.js";
import connectDB from "./config/connectDB.js";

// Managing the .env file
dotenv.config()

// Connect our DB
connectDB()

const app = express();
const {PORT} = process.env;

// Middleware that allows brosers to accept data from this server
app.use(cors())
// Middlewares that accepts urlencoded from data request
app.use(express.urlencoded({ extended: true }));
// Middleware that accepts json format data request
app.use(express.json());

// ROUTERS
app.use("/movies", moviesRouter)

// Listen
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
