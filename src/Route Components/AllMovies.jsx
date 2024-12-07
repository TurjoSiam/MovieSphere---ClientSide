import { useLoaderData } from "react-router-dom";
import Movie from "./Movie";


const AllMovies = () => {

    const data = useLoaderData();

    return (
        <div className="mx-auto w-9/12 my-10">
            <div className="grid grid-cols-3 gap-14 justify-items-center">
            {
                data.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
            }
            </div>
        </div>
    );
};

export default AllMovies;