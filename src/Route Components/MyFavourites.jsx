import { useLoaderData } from "react-router-dom";
import Favorite from "./Favorite";


const MyFavourites = () => {

    document.title = 'Movie Sphere | Favorites';

    const movies = useLoaderData();

    return (
        <div className="mx-auto w-10/12 md:w-9/12 my-10">
            <h1 className="text-3xl font-bold mb-7">My Favorite Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center">
                {
                    movies.map(movie => <Favorite key={movie._id} movie={movie}></Favorite>)
                }
            </div>
        </div>
    );
};

export default MyFavourites;