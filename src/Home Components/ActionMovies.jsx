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
        <div className="mx-auto w-9/12 my-10">
            <h1 className="text-3xl font-bold mb-7">Action Movies</h1>
            <div className="grid grid-cols-4 justify-items-center">
                {
                    movies.map(movie => <Action movie={movie} key={movie._id}></Action>)
                }
            </div>
        </div>
    );
};

export default ActionMovies;