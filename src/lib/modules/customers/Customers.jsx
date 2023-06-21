import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { BASE_URL } from "../../helpers/global";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import axios from "axios";

const Customers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState([]);

    const [error, setError] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}/user/`).then(function (response) {
            setData(response?.data);
        });
    }, []);

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
                    setShowModal(false);
                    window.location.reload();
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
        <div className=" overflow-x-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-3xl md:text-4xl mb-5 font-black leading-10">
                    Customers
                </p>
                <div
                    className={"badge badge-primary text-white cursor-pointer"}
                    onClick={() => setShowModal(true)}
                >
                    CREATE NEW CUSTOMER
                </div>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Role</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => (
                            <tr key={item?.id}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.phone}</td>
                                <td className="capitalize">{item?.role}</td>
                                <td>{item?.createdAt.split("T")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* modal  */}

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-center justify-center p-5 rounded-t">
                                    <h3 className="text-3xl text-center font-semibold">
                                        Create Customer
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setShowModal(false), setError("");
                                        }}
                                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                                    >
                                        ✕
                                    </button>
                                </div>
                                {/*body*/}
                                <form
                                    className="p-10 pt-0"
                                    onSubmit={handleSubmit}
                                >
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

                                    <div className="space-y-4 my-5">
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Phone"
                                            name="phone"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Password"
                                            name="password"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                    </div>

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
                                            "Create Customer"
                                        )}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    );
};

export default Customers;
