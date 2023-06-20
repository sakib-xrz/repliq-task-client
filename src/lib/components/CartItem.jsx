/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const CartItem = ({ item, refetch }) => {
    const { image, price, name, category } = item.data;
    const [quantity, setQuantity] = useState(item?.quantity ?? 1);

    const [totalPrice, setTotalPrice] = useState(quantity * price);


    const handleAddToCart = (item) => {
        setQuantity(quantity + 1);
        setTotalPrice((quantity + 1) * price);
        const cart = localStorage.getItem("cart");
        const cartItems = JSON.parse(cart);

        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.data._id === item.data._id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                };
            }
            return cartItem;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        refetch();
    };

    const handleDecreaseCart = () => {
        setQuantity(quantity - 1);
        setTotalPrice((quantity - 1) * price);
        const cart = localStorage.getItem("cart");
        const cartItems = JSON.parse(cart);

        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.data._id === item.data._id) {
                return {
                    ...cartItem,
                    quantity: cartItem.quantity - 1,
                };
            }
            return cartItem;
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        refetch();
    };

    const handleRemove = (item) => {
        const data = JSON.parse(localStorage.getItem("cart"));
        const deleteItem = item.data._id;

        const updatedData = data.filter((item) => item.data._id !== deleteItem);
        localStorage.setItem("cart", JSON.stringify(updatedData));
        refetch();
    };

    return (
        <div className="md:flex md:gap-5 items-center py-4 border-t border-gray-200">
            <div className="md:pl-3 flex justify-between">
                <img
                    src={image}
                    className="w-20 h-20 md:w-32 md:h-32 object-center object-cover rounded-md"
                />
                <div className="flex gap-2 md:hidden">
                    <AiOutlineHeart className="w-6 h-6 text-red-500 cursor-pointer" />
                    <RxCross2
                        onClick={() => {
                            handleRemove(item), refetch();
                        }}
                        className="w-6 h-6 text-red-500 cursor-pointer"
                    />
                </div>
            </div>
            <div className="md:pl-3 md:w-3/4">
                <div className="flex justify-between w-full pt-1">
                    <div>
                        <p className="font-semibold text-xl md:text-2xl text-neutral">
                            {name}
                        </p>
                        <p className="text-neutral font-medium">
                            <span>Price:</span> ${price?.toFixed(2)}
                        </p>
                        <p className="text-neutral font-medium capitalize">
                            <span>Category:</span> {category}
                        </p>
                    </div>
                    <div className="md:flex gap-2 hidden">
                        <AiOutlineHeart className="w-6 h-6 text-red-500 cursor-pointer" />
                        <RxCross2
                            onClick={() => {
                                handleRemove(item), refetch();
                            }}
                            className="w-6 h-6 text-red-500 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between pt-3">
                    <div className="cart-product-quantity font-medium">
                        <button
                            className="font-bold disabled:opacity-20"
                            disabled={quantity < 2}
                            onClick={() => handleDecreaseCart(item)}
                        >
                            -
                        </button>
                        <div className="count">{quantity}</div>
                        <button
                            className="font-bold "
                            onClick={() => handleAddToCart(item)}
                        >
                            +
                        </button>
                    </div>
                    <div className="flex gap-2">
                        <p className="font-black text-neutral">Total:</p>
                        <p className="font-black text-neutral">
                            ${totalPrice?.toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
