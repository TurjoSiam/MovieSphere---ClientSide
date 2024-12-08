import { Link, useLoaderData } from "react-router-dom";
import Movie from "./Movie";
import { useState } from "react";


const AllMovies = () => {

    document.title = 'Movie Sphere | All Movies';

    const data = useLoaderData();

    const [searchQuery, setSearchQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    

    const handleSearch = (e) => {
        e.preventDefault();

        const form = e.target;

        const query = form.search.value?.toLowerCase();
        setSearchQuery(query);

        const filter = data.filter(movie => movie.title?.toLowerCase().includes(searchQuery));
        setFiltered(filter);
        console.log(filtered);
    }
    


    return (
        <div className="mx-auto md:w-9/12 my-10">
            <div className="md:flex text-center md:text-start flex-col items-center md:justify-between mb-10">
                <h1 className="text-3xl font-bold mb-7">All Movies</h1>
                <div>
                    <form onSubmit={handleSearch} className="flex items-center gap-2">
                        <input type="text" name="search" className="border-2 border-orange-700 rounded-full h-9 w-52 text-center py-2" placeholder="Search by Name" />
                        <input className="btn" type="submit" value="Search" />
                    </form>
                    <Link className="flex items-center gap-1 w-52 h-10">
                        <img className="w-10 object-cover rounded-md h-10" src={filtered[0]?.poster} alt="" />
                        <h2 className="text-xl font-bold">{filtered[0]?.title}</h2>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-14 justify-items-center">
                {
                    data.map(movie => <Movie key={movie._id} movie={movie}></Movie>)
                }
            </div>
        </div>
    );
};

export default AllMovies;