import { FaEdit } from "react-icons/fa";
import { MdDelete, MdFavorite } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {

    const navigate = useNavigate();

    const data = useLoaderData();
    const { _id, title, year, genre, rating, summary, duration, poster, cover } = data;

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
                fetch(`http://localhost:5000/allmovies/${_id}`,{
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


    return (
        <div>
            <div className="w-full">
                <img className="w-full max-h-[500px] object-cover brightness-50" src={cover} alt="movie cover photo" />
            </div>
            <div className="w-full h-[400px] relative">
                <div className="absolute border p-7 bg-base-100 rounded-2xl -top-28 flex items-start justify-start gap-7 w-8/12 mx-auto inset-x-0">
                    <img className="w-60 rounded-xl" src={poster} alt="movie poster" />
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
                            <button onClick={() => handleDelete(_id)} className="btn mr-2"><MdDelete />Delete</button>
                            <Link to={`/allmovies/updatemovie/${_id}`} className="btn mr-2"><FaEdit />Update</Link>
                            <button className="btn"><MdFavorite />Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;