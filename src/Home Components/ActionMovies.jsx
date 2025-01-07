import { useEffect, useState } from "react";
import Action from "./Action";


const ActionMovies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/actionmovies')
            .then(res => res.json())
            .then(data => {
                setMovies(data);
            })
    }, [])


    return (
        <div className="mx-auto md:w-9/12 my-10">
            <h1 className="text-3xl text-center md:text-start font-bold mb-7">Action Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center">
                {
                    movies.map(movie => <Action movie={movie} key={movie._id}></Action>)
                }
            </div>
        </div>
    );
};

export default ActionMovies;