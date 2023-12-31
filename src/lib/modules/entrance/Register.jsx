import { useState } from "react";
import image from "../../../assets/others/authentication2.png";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/icons/logo.png";
import Spinner from "../../components/Spinner";
import { BASE_URL } from "../../helpers/global";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState({
        password: false,
    });
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const data = {
            name,
            phone,
            password,
        };
        setIsLoading(true);
        fetch(`${BASE_URL}/user/create-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setIsLoading(false);
                if (data?.success) {
                    form.reset();
                    setError("");
                    Swal.fire({
                        icon: "success",
                        title: `${data?.message}`,
                        confirmButtonText: "OKAY",
                        customClass: {
                            confirmButton: "my-custom-button-class",
                        },
                    });
                    setTimeout(navigate("/login"), 3000);
                } else {
                    setError(data?.message);
                    toast.error(data?.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
    };

    return (
        <div className="BG-IMAGE lg:px-40 lg:py-14">
            <div className="lg:shadow-xl lg:rounded-md flex min-h-screen lg:min-h-full justify-center items-center py-10 px-5 lg:px-10 lg:py-20">
                <div className="w-full lg:w-6/12">
                    <div className="flex justify-center">
                        <Link to={"/"}>
                            <img
                                className="w-28 h-auto cursor-pointer"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <h3 className="my-3 text-3xl font-bold text-center text-neutral">
                        Sign Up
                    </h3>
                    {error && (
                        <div className="flex justify-center items-center gap-1">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-5 h-5 text-red-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>{" "}
                            <p className="text-md font-bold text-red-500 text-center">
                                {error}
                            </p>
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="md:w-7/12 mx-auto space-y-4 font-semibold"
                    >
                        <div>
                            <label
                                className="block ml-2 text-sm font-medium text-neutral"
                                htmlFor="Name"
                            >
                                Name
                            </label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-3 text-neutral/30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </span>

                                <input
                                    required={true}
                                    type="text"
                                    name="name"
                                    className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                    placeholder="Your name"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="block ml-2 text-sm font-medium text-neutral"
                                htmlFor="LoggingEmailAddress"
                            >
                                Phone
                            </label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-6 h-6 mx-3 text-neutral/30"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                        />
                                    </svg>
                                </span>

                                <input
                                    required={true}
                                    type="phone"
                                    name="phone"
                                    className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                    placeholder="Phone number"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                className="block ml-2 text-sm font-medium text-neutral"
                                htmlFor="Password"
                            >
                                Password
                            </label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 mx-3 text-neutral/30"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </span>

                                {open.password ? (
                                    <span
                                        onClick={() =>
                                            setOpen((prevState) => ({
                                                ...prevState,
                                                password: false,
                                            }))
                                        }
                                        className="absolute right-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </span>
                                ) : (
                                    <span
                                        onClick={() =>
                                            setOpen((prevState) => ({
                                                ...prevState,
                                                password: true,
                                            }))
                                        }
                                        className="absolute right-2"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                            />
                                        </svg>
                                    </span>
                                )}

                                <input
                                    required={true}
                                    type={`${
                                        open.password ? "text" : "password"
                                    }`}
                                    name="password"
                                    className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="">
                            <Button
                                disabled={isLoading}
                                type="submit"
                                className={
                                    "w-full font-bold disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white"
                                }
                            >
                                {isLoading ? (
                                    <div className="flex justify-center">
                                        <Spinner />
                                    </div>
                                ) : (
                                    "Register Now"
                                )}
                            </Button>
                        </div>
                        <div className="flex items-center justify-center py-4 text-center">
                            <span className="text-sm text-neutral ">
                                {`Already have an account?`}{" "}
                            </span>

                            <Link
                                to="/login"
                                className="mx-2 text-sm font-bold text-primary hover:underline"
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:w-6/12 lg:flex justify-center items-center">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;
