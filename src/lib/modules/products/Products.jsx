import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import axios from "axios";
import { BASE_URL } from "../../helpers/global";
import { toast } from "react-hot-toast";

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/menu/`).then(function (response) {
            setData(response?.data?.data);
        });
    }, []);

    const category = [
        "dessert",
        "drinks",
        "offered",
        "pizza",
        "popular",
        "salad",
        "soup",
    ];

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const recipe = form.recipe.value;
        const category = selectedItem;
        const image = form.image.value;
        const price = form.price.value;

        const data = {
            name,
            recipe,
            category,
            image,
            price,
        };

        const token = localStorage.getItem("accessToken");

        setIsLoading(true);

        try {
            const response = await fetch(`${BASE_URL}/menu/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Product Created Successful");
                setShowModal(false);
                setTimeout(() => window.location.reload(), 2000);
                console.log("Menu item created successfully!");
            } else {
                console.error("Failed to create menu item:", response.status);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }

        setIsLoading(false);
    };

    return (
        <div className=" overflow-x-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-3xl md:text-4xl mb-5 font-black leading-10">
                    Products
                </p>
                <div
                    className={"badge badge-primary text-white cursor-pointer"}
                    onClick={() => setShowModal(true)}
                >
                    CREATE NEW PRODUCT
                </div>
            </div>

            <div className="overflow-x-auto my-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL No</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.category}</td>
                                <td>{item?.price}</td>
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
                                        Create Product
                                    </h3>
                                    <button
                                        onClick={() => {
                                            setShowModal(false),
                                                setShowDropDown(false);
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
                                    <div className="space-y-4 my-5">
                                        <input
                                            placeholder="Name"
                                            name="name"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Recipe"
                                            name="recipe"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                        <input
                                            placeholder="Image URL"
                                            name="image"
                                            className="input input-bordered input-md rounded-md w-full"
                                        />
                                        <div className="dropdown w-full">
                                            <label
                                                onClick={() => {
                                                    setShowDropDown(true);
                                                }}
                                                className="btn w-full bg-transparent justify-start text-gray-400 font-normal capitalize hover:bg-transparent"
                                            >
                                                {selectedItem
                                                    ? selectedItem
                                                    : "Select Category"}
                                            </label>
                                            <ul
                                                className={` menu p-2 shadow bg-base-100 rounded-box w-full ${
                                                    showDropDown
                                                        ? "block"
                                                        : "hidden"
                                                } `}
                                            >
                                                {category.map((item, index) => (
                                                    <li
                                                        key={index}
                                                        onClick={() => {
                                                            setSelectedItem(
                                                                item
                                                            ),
                                                                setShowDropDown(
                                                                    false
                                                                );
                                                        }}
                                                    >
                                                        <p className="capitalize">
                                                            {item}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <input
                                            placeholder="Price"
                                            name="price"
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
                                            "Create Product"
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

export default Products;
