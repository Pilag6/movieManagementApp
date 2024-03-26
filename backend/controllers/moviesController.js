import MovieModel from "../models/movieModel.js";

// CRUD --------------------

// CREATE the movies
const createMovies = async (req, res) => {
    try {
        // Get the title, year, director, cover, genre from the request body
        const { title, year, director, cover, genre } = req.body;

        // Handling error in case that there are some empty fields
        // if (req.body.length === 0) {
        //     return res.status(400).send({ error: "Missing required fields" });
        // }

        // // Another way to handle the error
        if (!title || !year || !director || !cover || !genre) {
            return res.status(400).send({ error: "Missing required fields" });
        }

        // Handling error in case that the year is not a number
        if (typeof year !== "number") {
            return res.status(400).send({ error: "Year must be a number" });
        }

        // Create a new movie with the request body
        const newMovie = await MovieModel.create(req.body);

        // Send the new movie to the Database
        res.status(201).json(newMovie);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};

// READ the movies
const getAllMovies = async (req, res) => {
    try {
        // Find all the movies in our DB
        const movies = await MovieModel.find();

        // Handling error in case that there aren't movies in our DB
        if (movies.length === 0 || !movies) {
            return res
                .status(400)
                .send({ error: "No movies in our Database (for now)" });
        }

        // Send the movies back to the client as a JSON response
        res.status(200).json(movies);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};

// READ each movie
const getMoviesById = async (req, res) => {
    try {
        // Get the movie from the request params
        const { id } = req.params;

        // Find the movie with matching id
        const movie = await MovieModel.findById({ _id: id });

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
        // Get the title, year, director, cover, genre
        const { title, year, director, cover, genre } = req.body;

        // Get the movie from the request params
        const { id } = req.params;

        // Find the index of the movie and Update
        const movieUpdated = await MovieModel.findByIdAndUpdate(
            id,
            { title, year, director, cover, genre },
            { new: true }

            // What is {new: true}?
            // By default, findByIdAndUpdate() returns the original document.
            // To return the document after update you have to pass an option: new: true.
        );

        // Handling error in case that there are some problem in the server
        if (!movieUpdated) {
            return res
                .status(400)
                .send({ error: `Movie (id: ${id}) not found` });
        }

        // Send the individual movie back to the client as a JSON response
        res.status(201).json(movieUpdated);
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};

// DELETE the movies
const deleteMovies = async (req, res) => {
    try {
        // Get the movie from the request params
        const { id } = req.params;

        // Find the index of the movie with matching id
        // const movieDeleted = await MovieModel.deleteOne({ _id: id });
        const movieDeleted = await MovieModel.findByIdAndDelete(id);

        // Handling error in case that there are some problem in the server
        if (!movieDeleted) {
            return res
                .status(400)
                .send({ error: `Movie (id: ${id}) not found` });
        }

        // Send the individual movie back to the client as a JSON response
        res.status(200).json({ message: "Movie Deleted" });
    } catch (error) {
        // Catching the error in case that there are some problem in the server
        res.status(500).send({ message: error.message });
    }
};

// DELETE all movies
const deleteAllMovies = async (req, res) => {
    try {
        // Delete all the movies in our DB
        await MovieModel.deleteMany();

        // Send the individual movie back to the client as a JSON response
        res.status(200).json({ message: "All movies deleted" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

export {
    createMovies,
    getAllMovies,
    getMoviesById,
    updateMovies,
    deleteMovies,
    deleteAllMovies
};
