import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Favorite = ({ movie }) => {

    const {_id} = movie;

    const user = useContext(AuthContext);

    const handleDelete = (_id) => {
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
                fetch(`http://localhost:5000/favoritemovies/${user?.user.email}/${_id}`, {
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
                            window.location.reload();
                        }
                    })
            }
        });
    }



    const { title, year, genre, rating, duration, poster } = movie;

    return (
        <div className="w-[200px]">
            <Link to={`/favoritemovies/${_id}`}><img className="w-[200px] h-[300px] object-cover rounded-lg mb-2 transform hover:scale-105 hover:duration-200 ease-in-out" src={poster} alt="movie poster" /></Link>
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{genre}</h2>
                <h2 className="text-gray-500 font-semibold">{rating}/5</h2>
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-gray-500 font-semibold">{year}</h2>
                <h2 className="text-gray-500 font-semibold">{duration} minutes</h2>
            </div>
            <button onClick={() => handleDelete(_id)} className="btn w-full">Delete Favorite</button>
        </div>
    );
};

export default Favorite;