import { Outlet } from "react-router-dom";
import Navbar from "../Layout Component/Navbar";
import Footer from "../Layout Component/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;