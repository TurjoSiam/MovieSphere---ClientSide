import { useEffect, useState } from "react";
import Animated from "./Animated";

const AnimatedMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/animatedmovies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])



    return (
        <div className="mx-auto w-9/12 my-10">
            <h1 className="text-3xl font-bold mb-7">Animated Movies</h1>
            <div className="grid grid-cols-4 justify-items-center">
                {
                    movies.map(movie => <Animated key={movie._id} movie={movie}></Animated>)
                }
            </div>
        </div>
    );
};

export default AnimatedMovies;