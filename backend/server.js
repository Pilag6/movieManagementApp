import express from "express";

import moviesRouter from "./routes/moviesRouter.js";

const app = express();
const PORT = 300;

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
