import { useLoaderData } from "react-router-dom";
import Featured from "../Route Components/Featured";

const FeaturedMovies = () => {

    const data = useLoaderData();

    return (
        <div className="mx-auto md:w-9/12 my-10">
            <h1 className="text-3xl font-bold text-center md:text-start mb-7">Featured Movies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-14 justify-items-center">
            {
                data.map(movie => <Featured key={movie._id} movie={movie}></Featured>)
            }
            </div>
        </div>
    );
};

export default FeaturedMovies;