import { useLoaderData } from "react-router-dom";


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <h3>total number of data are: {data.length}</h3>
        </div>
    );
};

export default Home;