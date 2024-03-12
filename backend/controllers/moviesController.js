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
    // Read the movies from the file and store them in the movies array
    movies = await readMoviesFromFile();

    // Get the title, year, director, cover, genre
    const { title, year, director, cover, genre } = req.body;

    // Create a new movie with unique id
    const newMovie = { _id: objectId(), title, year, director, cover, genre };

    // Add the new movie to tge movies array
    movies.push(newMovie);

    // Write the created movies in the movies array
    await writeMoviesToFile(movies);

    // Send the new movie back to the client as a JSON response
    res.json(newMovie);
};
// READ the movies
const getAllMovies = async (req, res) => {
    // Read the movies from the file and store them in the movies array
    movies = await readMoviesFromFile();

    res.json(movies);
};
// READ each movie
const getMoviesById = async (req, res) => {
    // Read the movies from the file and store them in the movies array
    movies = await readMoviesFromFile();

    // Get the movie from the request params
    const id = req.params.id;

    // Find the movie with matching id
    const movie = movies.find((item) => item._id === id);

    // Send the individual movie back to the client as a JSON response
    res.json(movie);
};
// UPDATE the movies
const updateMovies = async (req, res) => {
    // Read the movies from the file and store them in the movies array
    movies = await readMoviesFromFile();

    // Get the title, year, director, cover, genre
    const { title, year, director, cover, genre } = req.body;

    // Get the movie from the request params
    const id = req.params.id;

    // Find the index of the movie with matching id
    const movieIndex = movies.findIndex((item) => item._id === id);

    // Update the movie at the found index
    movies[movieIndex] = { ...movies[movieIndex], title, year, director, cover, genre }

    // Re-write the updated movies array back to the JSON file
    await writeMoviesToFile(movies)

    // Send the individual movie back to the client as a JSON response
    res.json(movies);
};
// DELETE the movies
const deleteMovies = async (req, res) => {
    // Read the movies from the file and store them in the movies array
    movies = await readMoviesFromFile();

    // Get the movie from the request params
    const id = req.params.id;

    // Find the index of the movie with matching id
    const movieIndex = movies.findIndex((item) => item._id === id);

    // Remove the movie at the found index from the movie array
    movies = movies.filter((movie) => movie._id !== id)
    // movies.splice(movieIndex, 1)

    // Re-write the updated movies array back to the JSON file
    await writeMoviesToFile(movies)

    // Send the individual movie back to the client as a JSON response
    res.json({ message: "Movie Deleted" });

};

export {
    createMovies,
    getAllMovies,
    getMoviesById,
    updateMovies,
    deleteMovies,
};
