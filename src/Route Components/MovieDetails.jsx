import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdFavorite } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MovieDetails = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    const { _id, title, year, genre, rating, summary, duration, poster, cover } = data;

    const user = useContext(AuthContext);
    const email = user.user.email;

    const favorite = {
        title: title,
        year: year,
        genre: genre,
        rating: rating,
        summary: summary,
        duration: duration,
        poster: poster,
        cover: cover,
        email: email
    }

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-side-alpha-dusky.vercel.app/allmovies/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your movie has been deleted.",
                                icon: "success"
                            });
                        }
                        navigate("/allmovies")
                    })
            }
        });
    }

    const handleAllMovies = () => {
        navigate("/allmovies")
    }


    const handleFavorite = () => {
        fetch('https://server-side-alpha-dusky.vercel.app/favoritemovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(favorite)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Added!",
                    text: "Your movie has been added to Favorite.",
                    icon: "success"
                });
            })
    }



    return (
        <div>
            <div className="w-full">
                <img className="w-full max-h-[500px] object-cover brightness-50" src={cover} alt="movie cover photo" />
            </div>
            <div className="w-full h-[1000px] md:[500px] lg:h-[400px] relative">
                <div className="absolute border p-7 bg-base-100 rounded-2xl -top-28 flex-col md:flex items-start justify-start gap-7 w-10/12 md:w-8/12 mx-auto inset-x-0">
                    <div className="w-full">
                        <img className="w-60 rounded-xl" src={poster} alt="movie poster" />
                        <button onClick={handleAllMovies} className="btn mt-3 w-full text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">All Movies</button>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">{title}</h2>
                        <p className="text-gray-700">{summary}</p>
                        <div className="space-y-1">
                            <h3><span className="font-semibold">Genre:</span> {genre}</h3>
                            <h3><span className="font-semibold">Release Year:</span> {year}</h3>
                            <h3><span className="font-semibold">Duration:</span> {duration} minuter</h3>
                            <h3><span className="font-semibold">Rating:</span> {rating}/5</h3>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(_id)} className="btn mr-2 text-black bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><MdDelete />Delete</button>
                            <Link to={`/allmovies/updatemovie/${_id}`} className="btn mr-2 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><FaEdit />Update</Link>
                            <button onClick={handleFavorite} className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><MdFavorite />Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;