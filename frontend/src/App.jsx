import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
    const [movies, setMovies] = useState({
        movies: []
    });

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await Axios.get("http://localhost:300/movies");
                // console.log(response);
                setMovies((prev) => ({
                    ...prev,
                    movies: response.data
                }));
            } catch (error) {
                console.log(error);
            }
        };

        fetchMovies();
    }, []);

    console.log(movies.movies);

    return (
        <>
            <h1>All the movies here</h1>
            {movies.movies.map((movie) => {
                return (
                    <div key={movie._id}>
                        <h2>{movie.title}</h2>
                        <h3>{movie.director}</h3>
                        <p>Year: {movie.year}</p>
                        <p>Genre: {movie.genre.join(", ").toUpperCase()}</p>
                        <img src={movie.cover} alt="" />
                    </div>
                );
            })}
        </>
    );
}

export default App;
