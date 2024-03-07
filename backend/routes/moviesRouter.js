import { Router } from "express";

import {
    createMovies,
    getAllMovies,
    getMoviesById,
    updateMovies,
    deleteMovies,
} from "../controllers/moviesController.js";

const moviesRouter = Router();

// CRUD -----------

// CREATE the movies
moviesRouter.post("/", createMovies);
// READ the movies
moviesRouter.get("/", getAllMovies);
// READ each movie
moviesRouter.get("/:id", getMoviesById);
// UPDATE the movies
moviesRouter.put("/:id", updateMovies);
// DELETE the movies
moviesRouter.delete("/:id ", deleteMovies);

export default moviesRouter;
