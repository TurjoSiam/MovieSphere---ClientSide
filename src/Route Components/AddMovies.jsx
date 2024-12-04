
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";


const AddMovies = () => {

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => {
        setRating(rate);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.rating = rating;

        fetch('http://localhost:5000/allmovies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }

    // fetch('http://localhost:5000/allmovies', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // })




    return (
        <div className="w-full mx-auto my-10">
            <h2 className="text-3xl font-bold mb-10 mx-auto w-full max-w-lg text-center">Add New Movie</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto max-w-lg">
                {/* title and genre */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Movie Title
                        </label>
                        <input {...register("title")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Movie title" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Genre
                        </label>
                        <select {...register("genre")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option className="flex items-center justify-between">Select a genre</option>
                            <option value="Animated">Animated</option>
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                        </select>
                    </div>
                </div>
                {/* duration and release year */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Duration
                        </label>
                        <input {...register("duration")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="Duration (minutes)" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Release Year
                        </label>
                        <select {...register("year")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option className="flex items-center justify-between">Select a year</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                </div>
                {/* image url and rating */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Poster
                        </label>
                        <input {...register("poster")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="url" placeholder="Image URL" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Rating
                        </label>
                        <input hidden {...register("rating")} type="number" value={rating} />
                        <Rating onClick={handleRating}></Rating>
                    </div>
                </div>
                {/* summary */}
                <div className="w-full mb-10">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Summary
                    </label>
                    <input {...register("summary")} className="appearance-none block w-full h-32 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Write small summary of the movie" />
                </div>
                {/* submit */}
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddMovies;