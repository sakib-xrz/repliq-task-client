import useTitle from "../../lib/hooks/useTitle";
import RegisterPage from "../../lib/modules/entrance/Register";

const Register = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Register");
    return (
        <div>
            <RegisterPage />
        </div>
    );
};

export default Register;
