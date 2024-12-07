import { useLoaderData } from "react-router-dom";
import Featured from "./Featured";


const Home = () => {

    const data = useLoaderData();

    return (
        <div className="mx-auto w-9/12 my-10">
            <h1 className="text-3xl font-bold mb-7">Featured Movies</h1>
            <div className="grid grid-cols-3 gap-14 justify-items-center">
            {
                data.map(movie => <Featured key={movie._id} movie={movie}></Featured>)
            }
            </div>
        </div>
    );
};

export default Home;