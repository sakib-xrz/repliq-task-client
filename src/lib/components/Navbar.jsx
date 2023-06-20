import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/logo-text.png";
import Button from "./Button";
import GetCart from "../helpers/getCart";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);

    const { data } = GetCart();

    const cartQuantity = data?.length;

    return (
        <div className="shadow-lg w-full fixed bg-black/40 top-0 z-10">
            <div className="grid grid-cols-12 lg:flex justify-between items-center py-4 lg:px-14 px-7">
                {/* logo  */}
                <Link
                    className="col-span-4 lg:col-span-3 flex justify-center lg:justify-start"
                    to={"/"}
                >
                    <img className="w-36 h-auto" src={logo} alt="" />
                </Link>

                {/* mobile menu cart and user  */}
                <div className="col-span-8 flex items-center gap-4 justify-end">
                    <Link
                        to={"/cart"}
                        className="relative mr-2 text-white lg:hidden"
                    >
                        <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                            {cartQuantity ?? 0}
                        </small>
                        <AiOutlineShoppingCart className="text-2xl font-medium" />
                    </Link>
                    {currentUser ? (
                        <div className="lg:hidden dropdown dropdown-hover dropdown-end">
                            <label
                                tabIndex={0}
                                className="rounded-full p-[2px] border-2 border-primary avatar cursor-pointer"
                            >
                                <div className="w-6 md:w-8 rounded-full">
                                    {currentUser?.photo && (
                                        <img alt="" src={currentUser?.photo} />
                                    )}
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content p-2 shadow-md bg-white font-medium text-neutral rounded-md min-w-max"
                            >
                                <li className="cursor-default">
                                    <p className="cursor-default hover:bg-white text-primary">
                                        {currentUser?.name}
                                    </p>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => logout()}
                                        className="hover:bg-red-500 hover:text-white text-red-500"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="md:hidden">
                            <Link to={"/login"}>
                                <Button>Log In</Button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="hidden lg:flex lg:items-center space-y-7 lg:space-y-0 lg:space-x-5">
                    <Link to={"/cart"} className="relative hidden lg:block">
                        <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                            {cartQuantity ?? 0}
                        </small>
                        <AiOutlineShoppingCart className="text-2xl font-medium text-white" />
                    </Link>
                    {currentUser ? (
                        <div className="hidden lg:block dropdown dropdown-hover dropdown-end">
                            <label
                                tabIndex={0}
                                className="rounded-full p-[2px] border-2 border-primary avatar ml-2 cursor-pointer"
                            >
                                <div className="w-6 md:w-8 rounded-full">
                                    {currentUser?.photo && (
                                        <img alt="" src={currentUser?.photo} />
                                    )}
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content p-2 shadow-md bg-white font-medium text-neutral rounded-md min-w-max"
                            >
                                <li className="cursor-default">
                                    <p className="cursor-default hover:bg-white text-primary">
                                        {currentUser?.name}
                                    </p>
                                </li>
                                <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={() => logout()}
                                        className="hover:bg-red-500 hover:text-white text-red-500"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <Link to={"/login"}>
                                <Button>Log In</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
