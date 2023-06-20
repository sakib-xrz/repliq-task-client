import useTitle from "../../lib/hooks/useTitle";
import LoginPage from "../../lib/modules/entrance/Login";

const Login = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Login");
    return (
        <div>
            <LoginPage />
        </div>
    );
};

export default Login;
