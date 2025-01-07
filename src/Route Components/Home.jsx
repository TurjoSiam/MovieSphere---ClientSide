import { useEffect, useState } from "react";
import ActionMovies from "../Home Components/ActionMovies";
import AnimatedMovies from "../Home Components/AnimatedMovies";
import Banner from "../Home Components/Banner";
import FeaturedMovies from "../Home Components/FeaturedMovies";


const Home = () => {

    document.title = "Movie Sphere | Home"

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check and set the initial theme
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDarkMode(!isDarkMode);
    }

        return (
            <div>
                <Banner></Banner>
                <FeaturedMovies></FeaturedMovies>
                <ActionMovies></ActionMovies>
                <AnimatedMovies></AnimatedMovies>
            </div>
        );
    };

    export default Home;