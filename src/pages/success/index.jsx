import { Link, useLocation } from "react-router-dom";
import Button from "../../lib/components/Button";
import { useAuth } from "../../lib/context/AuthProvider";

const Success = () => {
    const location = useLocation();
    const { currentUser } = useAuth();
    const tranId = location.pathname.split("/").splice(-1)[0];
    return (
        <div className="h-screen flex justify-center items-center">
            <div>
                <div className="bg-white p-6 md:mx-auto">
                    <svg
                        viewBox="0 0 24 24"
                        className="text-green-600 w-20 h-20 mx-auto my-6"
                    >
                        <path
                            fill="currentColor"
                            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        ></path>
                    </svg>
                    <div className="text-center">
                        <h3 className="md:text-4xl text-base text-green-600 font-semibold text-center">
                            Payment Success!
                        </h3>
                        <p className="text-gray-600 my-2">
                            Thank you for completing your secure online payment.
                        </p>
                        <p className="mb-4">
                            {" "}
                            Your transaction id <br />{" "}
                            <code className="font-bold">{tranId}</code>
                        </p>
                        <Link to={`/orders/${currentUser.phone}`}>
                            <Button
                                onClick={() => localStorage.removeItem("cart")}
                                className={"bg-green-600 text-white"}
                            >
                                See Your Order
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Success;
