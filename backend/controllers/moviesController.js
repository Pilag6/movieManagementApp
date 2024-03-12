import objectId from "../config/objectID.js";
import { readMoviesFromFile, writeMoviesToFile } from "../config/dbLib.js";

let movies = [];

/* Schemma

let movies = [
    {
        "_id": "string"
        "title": "string",
        "year": "number",
        "director": "string",
        "cover": "image",
        "genre": "string"
    }
] */

// CRUD --------------------

// CREATE the movies
const createMovies = async (req, res) => {
    try {
        // Get the title, year, director, cover, genre
        const { title, year, director, cover, genre } = req.body;

        // Handling error in case that there are some empty fields
        if (!title || !year || !director || !cover || !genre) {
            return res.status(400).send({ error: "Missing required fields" });
        }

        // Read the movies from the file and store them in the movies array
        movies = await readMoviesFromFile();

        // Create a new movie with unique id
        const newMovie = {
            _id: objectId(),
            title,
            year,
            director,
            cover,
            genre,
        };

        // Add the new movie to the movies array
        movies.push(newMovie);

        // Write the created movies in the movies array
        await writeMoviesToFile(movies);

        // Send the new movie back to the client as a JSON response
        res.status(201).json(newMovie);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};
// READ the movies
const getAllMovies = async (req, res) => {
    try {
        // Read the movies from the file and store them in the movies array
        movies = await readMoviesFromFile();

        // Handling error in case that there aren't movies in our DB
        if (movies.length === 0 || !movies) {
            return res
                .status(400)
                .send({ error: "No movies in our Database (for now)" });
        }

        res.status(200).json(movies);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};
// READ each movie
const getMoviesById = async (req, res) => {
    try {
        // Read the movies from the file and store them in the movies array
        movies = await readMoviesFromFile();

        // Get the movie from the request params
        const id = req.params.id;

        // Find the movie with matching id
        const movie = movies.find((item) => item._id === id);

        if (!movie) {
            return res
                .status(400)
                .send({ error: `Movie (id: ${id}) not found` });
        }

        // Send the individual movie back to the client as a JSON response
        res.json(movie);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};
// UPDATE the movies
const updateMovies = async (req, res) => {
    try {
        // Read the movies from the file and store them in the movies array
        movies = await readMoviesFromFile();

        // Get the title, year, director, cover, genre
        const { title, year, director, cover, genre } = req.body;

        // Get the movie from the request params
        const id = req.params.id;

        // Find the index of the movie with matching id
        const movieIndex = movies.findIndex((item) => item._id === id);

        if (movieIndex === -1) {
            return res
                .status(400)
                .send({ error: `Movie (id: ${id}) not found` });
        }

        // Update the movie at the found index
        movies[movieIndex] = {
            ...movies[movieIndex],
            title: title ? title : movies[movieIndex].title,
            year: year ? year : movies[movieIndex].year,
            director: director ? director : movies[movieIndex].director,
            cover: cover ? cover : movies[movieIndex].cover,
            genre: genre ? genre : movies[movieIndex].genre,
        };

        // Re-write the updated movies array back to the JSON file
        await writeMoviesToFile(movies);

        // Send the individual movie back to the client as a JSON response
        res.status(201).json(movies[movieIndex]);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};
// DELETE the movies
const deleteMovies = async (req, res) => {
    try {
        // Read the movies from the file and store them in the movies array
        movies = await readMoviesFromFile();

        // Get the movie from the request params
        const id = req.params.id;

        // Find the index of the movie with matching id
        const movieIndex = movies.findIndex((item) => item._id === id);

        if (movieIndex === -1) {
            return res
                .status(400)
                .send({ error: `Movie (id: ${id}) not found` });
        }

        // Remove the movie at the found index from the movie array
        movies = movies.filter((movie) => movie._id !== id);
        // movies.splice(movieIndex, 1)

        // Re-write the updated movies array back to the JSON file
        await writeMoviesToFile(movies);

        // Send the individual movie back to the client as a JSON response
        res.status(200).json({ message: "Movie Deleted" });
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};

export {
    createMovies,
    getAllMovies,
    getMoviesById,
    updateMovies,
    deleteMovies,
};
