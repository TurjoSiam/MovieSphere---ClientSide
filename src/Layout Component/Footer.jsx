import { Link } from "react-router-dom";
import logo from '../../src/assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Footer = () => {

    const {user} = useContext(AuthContext);

    const link = <>
        <Link to="/">Home</Link>
        <Link to="/allmovies">All Movies</Link>
        <Link to="/addmovies">Add Movie</Link>
        <Link to={`/myfavorite/${user?.email}`}>My Favorite</Link>
        <Link to="/policy">Policy</Link>
    </>

    return (
        <div>
            <footer className="footer bg-orange-50 text-base-content p-10">
                <aside className="space-y-3">
                    <Link to="/allmovies" className="flex items-center gap-1">
                        <img className="w-10" src={logo} alt="logo" />
                        <h2 className="text-4xl text-orange-800 font-bold">Movie Sphere</h2>
                    </Link>
                    <p>
                        MOVIE SPHERE Int. Ltd.
                        <br />
                        Streaming movies and tv-series since 2005
                    </p>
                    <p className="md:w-60 lg:w-96 text-xs text-gray-500">
                        Dive into a world of unlimited entertainment with Movie Sphere, where movies come to life. From Hollywood blockbusters to indie gems, thrilling action to heartwarming romances.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    {link}
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/policy" className="link link-hover">Terms of use</Link>
                    <Link to="/policy" className="link link-hover">Privacy policy</Link>
                    <Link to="/policy" className="link link-hover">Cookie policy</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a href="https://www.facebook.com/tur.jo.9275" className="link link-hover text-2xl ml-2 hover:text-amber-800"><FaFacebook /></a>
                    <a href="https://x.com/SiamTurjo" className="link link-hover text-2xl ml-2 hover:text-amber-800"><FaTwitter /></a>
                    <a href="https://www.youtube.com/@turjosiam" className="link link-hover text-2xl ml-2 hover:text-amber-800"><FaYoutube /></a>
                    <a href="https://github.com/TurjoSiam" className="link link-hover text-2xl ml-2 hover:text-amber-800"><FaInstagram /></a>
                </nav>
            </footer>
            <div className="border-t mx-auto border-gray-400"></div>
            <p className="py-5 bg-zinc-600 text-center text-gray-200">© All rights reserved. TurJo Siam | 2024</p>
        </div>
    );
};

export default Footer;