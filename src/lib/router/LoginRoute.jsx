/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Loader from "../components/Loader";

const LoginRoute = ({ children }) => {
     const { currentUser, loading } = useAuth();

     if (loading) {
         return <Loader />;
     }

     if (!currentUser === null) {
         return <Navigate to="/login" replace />;
     }

     // Add additional logic here
     const isLoginPage = window.location.pathname === "/login";
     const isSignupPage = window.location.pathname === "/register";

     if (currentUser && (isLoginPage || isSignupPage)) {
         return <Navigate to="/home" replace />;
     }

     return children;
};

export default LoginRoute;
