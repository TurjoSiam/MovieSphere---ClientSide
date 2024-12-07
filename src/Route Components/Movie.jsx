
const Movie = ({ movie }) => {

    const { title, year, genre, rating, duration, poster } = movie;

    return (
        <div className="w-[250px]">
            <img className="w-[250px] h-[350px] object-cover rounded-lg mb-2 transform hover:scale-105 hover:duration-200 ease-in-out" src={poster} alt="movie poster" />
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{genre}</h2>
                <h2 className="text-gray-500 font-semibold">{rating}/5</h2>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{year}</h2>
                <h2 className="text-gray-500 font-semibold">{duration} minutes</h2>
            </div>
            <button className="btn w-full">See Details</button>
        </div>
    );
};

export default Movie;