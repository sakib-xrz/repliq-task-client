/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    console.log(currentUser);
    if (loading) {
        return <Loader />;
    }

    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
