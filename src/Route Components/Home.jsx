import ActionMovies from "../Home Components/ActionMovies";
import AnimatedMovies from "../Home Components/AnimatedMovies";
import Banner from "../Home Components/Banner";
import FeaturedMovies from "../Home Components/FeaturedMovies";


const Home = () => {


    return (
        <>
            <Banner></Banner>
            <FeaturedMovies></FeaturedMovies>
            <ActionMovies></ActionMovies>
            <AnimatedMovies></AnimatedMovies>
        </>
    );
};

export default Home;