import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import { useAuth } from "../../context/AuthProvider";
import calculateTotal from "../../helpers/calculateTotal";
import { AiOutlineArrowLeft } from "react-icons/ai";
import GetCart from "../../helpers/getCart";
import { BASE_URL } from "../../helpers/global";

const Checkout = () => {
    const { currentUser } = useAuth();
    const { data } = GetCart();
    const { subtotal, shipping, tax, total } = calculateTotal(data);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;

        let orderData = {};

        const order = data?.map((item) => {
            return {
                ...item[[0]],
                data: {
                    ...item.data,
                    quantity: item.quantity,
                },
                phone,
            };
        });

        orderData.order = order;
        orderData.price = total;
        orderData.name = name;
        orderData.phone = phone;
        orderData.address = address;

        console.log(orderData);

        fetch(`${BASE_URL}/order/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.location.replace(data.url);
            });
    };

    return (
        <div className="space-y-14 lg:space-y-20  mt-28">
            <Wrapper>
                <p className="text-3xl md:text-5xl font-black leading-10 pb-3 text-center">
                    Checkout
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-5">
                        <div className="space-y-5 w-full">
                            <p className="font-semibold text-xl md:text-2xl text-neutral mt-10">
                                Shipping Details
                            </p>

                            <div className="space-y-5 font-semibold">
                                <div>
                                    <label
                                        className="block ml-2 text-sm font-medium text-neutral"
                                        htmlFor="LoggingEmailAddress"
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
                                            disabled
                                            readOnly
                                            defaultValue={currentUser?.name}
                                            type="text"
                                            name="name"
                                            className="block w-full py-3 text-neutral bg-transparent border rounded-lg px-11"
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
                                            readOnly
                                            disabled
                                            defaultValue={currentUser?.phone}
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
                                        htmlFor="LoggingEmailAddress"
                                    >
                                        Address
                                    </label>
                                    <div className="relative flex mt-1">
                                        <span className="absolute top-3">
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
                                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                                />
                                            </svg>
                                        </span>

                                        <textarea
                                            rows="4"
                                            required={true}
                                            type="text"
                                            name="address"
                                            className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                                            placeholder="Billing address"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-8/12 bg-[#F3F3F3] mt-10">
                            <div className="flex flex-col p-10 justify-between">
                                <div className="font-semibold">
                                    <p className="text-3xl md:text-4xl text-center text-neutral mb-10">
                                        Order Summary
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-base leading-none text-neutral">
                                            Subtotal
                                        </p>
                                        <p className="text-base leading-none text-neutral">
                                            ${subtotal?.toFixed(2) ?? 0}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-neutral">
                                            Shipping
                                        </p>
                                        <p className="text-base leading-none text-neutral">
                                            ${shipping ?? 0}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-neutral">
                                            Tax
                                        </p>
                                        <p className="text-base leading-none text-neutral">
                                            ${tax ?? 0}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 md:mt-20">
                                    <hr className="h-[2px] bg-neutral" />
                                    <div className="flex items-center pb-6 justify-between ">
                                        <p className="text-2xl leading-normal text-neutral">
                                            Total
                                        </p>
                                        <p className="text-2xl font-bold leading-normal text-right text-neutral">
                                            ${total ?? 0}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        type={"submit"}
                        className={
                            "w-full rounded-sm bg-neutral text-white md:text-xl my-5"
                        }
                    >
                        PLACE ORDER
                    </Button>
                    <Link
                        to={"/cart"}
                        className="flex items-center gap-2 mb-10 cursor-pointer"
                    >
                        <AiOutlineArrowLeft className="text-xl mt-1" />
                        <p className="md:text-xl text-neutral">Back to cart</p>
                    </Link>
                </form>
            </Wrapper>
        </div>
    );
};

export default Checkout;
