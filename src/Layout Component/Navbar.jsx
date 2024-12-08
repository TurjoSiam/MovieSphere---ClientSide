import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../../src/assets/logo.png'
import { toast } from "react-toastify";


const Navbar = () => {

    const { user, userSignout } = useContext(AuthContext);

    const handleSignout = () => {
        userSignout()
            .then(() => {
                toast.success('User signed out')
            })
            .catch((error) => {
                console.log('ERROR', error);
            })
    }

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allmovies">All Movies</NavLink></li>
        {
            user && <>
                <li><NavLink to="/addmovies">Add Movie</NavLink></li>
                <li><NavLink to={`/myfavorite/${user?.email}`}>My Favorite</NavLink></li>
            </>
        }
        <li><NavLink to="/policy">Policy</NavLink></li>
    </>

    return (
        <div className="w-full md:10 lg:px-20 mx-auto sticky top-0 bg-[#ffffffbe] backdrop-blur-2xl z-10">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <Link to="/allmovies" className="flex items-center gap-1">
                        <img className="w-8" src={logo} alt="logo" />
                        <h2 className="text-3xl hidden md:block text-orange-800 font-bold">Movie Sphere</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ?
                            <>
                                <div className="mr-3 tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className="w-10 h-10 rounded-full object-cover" src={user?.photoURL} alt="profile photo" />
                                </div>
                                <Link onClick={handleSignout} className="btn" to="/">Logout</Link>
                            </>
                            :
                            <>
                                <Link className="btn mr-3" to="login">Login</Link>
                                <Link className="btn" to="register">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;