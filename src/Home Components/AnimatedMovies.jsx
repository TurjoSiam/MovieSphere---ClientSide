import { useEffect, useState } from "react";
import Animated from "./Animated";

const AnimatedMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://server-side-alpha-dusky.vercel.app/animatedmovies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])



    return (
        <div className="mx-auto md:w-9/12 my-10">
            <h1 className="text-3xl text-center md:text-start font-bold mb-7">Animated Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
                {
                    movies.map(movie => <Animated key={movie._id} movie={movie}></Animated>)
                }
            </div>
        </div>
    );
};

export default AnimatedMovies;