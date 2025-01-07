
import Movie from "./Movie";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";


const AllMovies = () => {

    document.title = 'Movie Sphere | All Movies';

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/allmovies?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [search]);




    return (
        <div className="mx-auto md:w-9/12 my-10">
            <div className="md:w-11/12 mx-auto gap-3 flex flex-col md:flex-row items-center justify-between mb-7">
                <h1 className="text-3xl font-bold">All Movies</h1>
                <form className="flex items-center gap-2">
                    <CiSearch className="text-3xl" />
                    <input onChange={e => setSearch(e.target.value)} type="text" placeholder="Search by Movie Name" className="input input-bordered w-full max-w-xs" />
                </form>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-14 justify-items-center">
                {
                    data.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;