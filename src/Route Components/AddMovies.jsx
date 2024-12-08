
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddMovies = () => {

    document.title = 'Movie Sphere | Add Movie';

    const { user } = useContext(AuthContext);

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    }

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = data => {
        data.rating = rating;

        fetch('https://server-side-alpha-dusky.vercel.app/allmovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                Swal.fire({
                    title: "Added!",
                    text: "Your movie has been added.",
                    icon: "success"
                });
            })
    }




    return (
        <div className="w-10/12 md:w-full mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">Add New Movie</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg">
                {/* title and genre */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Movie Title
                        </label>
                        <input {...register("title", { required: 'Title is required', minLength: { value: 2, message: 'Title must be at least 2 characters' } })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Movie title" />
                        {
                            errors.title && (
                                <p className="text-red-500 text-xs italic">{errors.title.message}</p>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Genre
                        </label>
                        <select {...register("genre", { required: 'Genre is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Select a genre</option>
                            <option value="Animated">Animated</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Horror">Horror</option>
                            <option value="Music">Music</option>
                        </select>
                        {
                            errors.genre && (
                                <p className="text-red-500 text-xs italic">{errors.genre.message}</p>
                            )
                        }
                    </div>
                </div>
                {/* duration and release year */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Duration
                        </label>
                        <input {...register("duration", { required: 'Duration is required', min: { value: 61, message: 'Duration must greater than 60 minutes' } })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="Duration (minutes)" />
                        {
                            errors.duration && (
                                <p className="text-red-500 text-xs italic">{errors.duration.message}</p>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Release Year
                        </label>
                        <select {...register("year", { required: 'Year is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="">Select a year</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                        </select>
                        {
                            errors.year && (
                                <p className="text-red-500 text-xs italic">{errors.year.message}</p>
                            )
                        }
                    </div>
                </div>
                {/* image url and rating */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Poster
                        </label>
                        <input {...register("poster", { required: 'Poster is required' })} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" placeholder="Image URL" />
                        {
                            errors.poster && (
                                <p className="text-red-500 text-xs italic">{errors.poster.message}</p>
                            )
                        }
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Rating
                        </label>
                        <div className="flex items-center gap-2">
                            <Rating onClick={handleRating} transition={true} allowFraction={true}></Rating>
                            <input readOnly className="py-2 text-center appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 rounded"  {...register("rating")} type="text" value={rating} />
                        </div>
                        {
                            rating === 0 && (
                                <p className="text-red-500 text-xs italic">Rating is required</p>
                            )
                        }
                    </div>
                </div>
                {/* email and cover photo */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input {...register("email")} className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" readOnly defaultValue={user?.email} />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Cover Photo (Optional)
                        </label>
                        <input {...register("cover")} className="appearance-none block w-full bg-gray-100 text-gray-500 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" placeholder="Add cover photo" />
                    </div>
                </div>
                {/* email */}

                {/* summary */}
                <div className="w-full mb-10">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Summary
                    </label>
                    <textarea {...register("summary", { required: 'Summary is required', minLength: { value: 10, message: 'Must be at least 10 characters long' } })} className="appearance-none block w-full h-32 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Write small summary of the movie" />
                    {
                        errors.summary && (
                            <p className="text-red-500 text-xs italic">{errors.summary.message}</p>
                        )
                    }
                </div>
                {/* submit */}
                <input className="btn w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit" value="Add Movie" />

            </form>
        </div>
    );
};

export default AddMovies;