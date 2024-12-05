import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="w-full flex items-center justify-center h-screen">
            <span className="loading mx-auto loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;