import { Link } from "react-router-dom";


const Animated = ({ movie }) => {

    const { _id, title, year, genre, rating, duration, poster } = movie;

    return (
        <div className="w-[180px]">
            <img className="w-[180px] h-[250px] object-cover rounded-lg mb-2 transform hover:scale-105 hover:duration-200 ease-in-out" src={poster} alt="movie poster" />
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{genre}</h2>
                <h2 className="text-gray-500 font-semibold">{rating}/5</h2>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{year}</h2>
                <h2 className="text-gray-500 font-semibold">{duration} minutes</h2>
            </div>
            <Link to={`/allmovies/${_id}`} className="btn w-full text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">See Details</Link>
        </div>
    );
};

export default Animated;