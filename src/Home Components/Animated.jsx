import { Link } from "react-router-dom";


const Animated = ({ movie }) => {

    const { _id, title, year, genre, rating, duration, poster } = movie;

    return (
        <div className="w-[200px]">
            <img className="w-[200px] h-[300px] object-cover rounded-lg mb-2 transform hover:scale-105 hover:duration-200 ease-in-out" src={poster} alt="movie poster" />
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{genre}</h2>
                <h2 className="text-gray-500 font-semibold">{rating}/5</h2>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{year}</h2>
                <h2 className="text-gray-500 font-semibold">{duration} minutes</h2>
            </div>
            <Link to={`/allmovies/${_id}`} className="btn w-full">See Details</Link>
        </div>
    );
};

export default Animated;