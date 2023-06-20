import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Wrapper from "../../components/Wrapper";
import { AiOutlineArrowLeft } from "react-icons/ai";
import GetCart from "../../helpers/getCart";
import { Link } from "react-router-dom";
import calculateTax from "../../helpers/calculateTax";

const Cart = () => {
    const { data, refetch } = GetCart();

    const handleClear = () => {
        localStorage.removeItem("cart");
    };

    const subtotal = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.quantity * currentValue?.data?.price;
    }, 0);

    const shipping = subtotal < 1 ? 0 : 5;

    const tax = calculateTax(subtotal);

    const total = (subtotal + shipping + tax)?.toFixed(2);
    return (
        <Wrapper className="pt-14 md:pt-20 space-y-14 lg:space-y-20">
            {!data || data?.length === 0 ? (
                <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-black text-center leading-10 uppercase">
                            No item available
                        </h1>
                        <Link
                            to={"/"}
                            className="flex items-center justify-center gap-2 mt-5 lg:mt-10 cursor-pointer"
                        >
                            <Button
                                className={
                                    "rounded-sm bg-neutral md:text-xl uppercase"
                                }
                            >
                                Order some food
                            </Button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="lg:flex lg:gap-x-4">
                    <div className="lg:w-8/12 w-full md:py-12 py-8 bg-white">
                        <div className="flex pb-10 justify-between items-center text-neutral">
                            <p className="text-3xl md:text-5xl font-black leading-10">
                                Food Cart
                            </p>
                            <p
                                onClick={() => {
                                    handleClear(), refetch();
                                }}
                                className="text-md md:text-xl font-medium hover:text-red-500 md:mr-5 border border-neutral cursor-pointer duration-300 hover:border-red-500 px-2 py-1 rounded-md"
                            >
                                Clear Cart
                            </p>
                        </div>
                        {data?.map((item, index) => (
                            <CartItem
                                key={index}
                                item={item}
                                refetch={refetch}
                            />
                        ))}
                    </div>
                    <div className="lg:w-4/12 w-full bg-[#F3F3F3] lg:h-[calc(100vh-5rem)] sticky top-20">
                        <div className="flex flex-col p-10 lg:pt-20 justify-between lg:h-[calc(100vh-5rem)]">
                            <div className="font-semibold">
                                <p className="text-3xl md:text-4xl font-black text-center text-neutral">
                                    Order Summary
                                </p>
                                <div className="flex items-center justify-between pt-16">
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

                            <div className="mt-10 md:mt-14 lg:mt-0">
                                <hr className="h-[2px] bg-neutral" />
                                <div className="flex items-center pb-6 justify-between ">
                                    <p className="text-2xl leading-normal text-neutral">
                                        Total
                                    </p>
                                    <p className="text-2xl font-bold leading-normal text-right text-neutral">
                                        ${total ?? 0}
                                    </p>
                                </div>

                                <Link to={"/checkout"}>
                                    <Button
                                        className={
                                            "w-full rounded-sm bg-neutral md:text-xl"
                                        }
                                    >
                                        PROCEED TO CHECKOUT
                                    </Button>
                                </Link>
                                <Link
                                    to={"/shop"}
                                    className="flex items-center gap-2 mt-5 cursor-pointer"
                                >
                                    <AiOutlineArrowLeft className="text-xl mt-1" />
                                    <p className="md:text-xl text-neutral">
                                        Back to shop
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div></div>
        </Wrapper>
    );
};

export default Cart;
