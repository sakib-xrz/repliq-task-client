/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const AdminRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (currentUser && currentUser?.role === "admin") {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
