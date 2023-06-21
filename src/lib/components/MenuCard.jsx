/* eslint-disable react/prop-types */
import { toast } from "react-hot-toast";
import GetCart from "../helpers/getCart";
import setCart from "../helpers/setCart";
import ButtonPrimary from "./ButtonPrimary";

const MenuCard = ({ img, title, description, price, item }) => {
    const handleAddToCart = (data) => {
        const cartItem = {
            data,
            quantity: 1,
        };
        setCart(cartItem);
        toast.success("Successfully Added")
    };

    const { refetch } = GetCart();

    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-4 shadow-md rounded-md mb-5 md:mb-0 relative">
            <img
                className="w-full h-[13rem] object-cover rounded-t-md"
                src={img}
                alt=""
            />
            <div className="bg-[#F3F3F3] rounded-b-md">
                <div className="text-center pt-7">
                    <h3 className="text-xl font-bold">
                        {title}
                    </h3>
                    <p className="px-5 pt-2">{description.slice(0, 55)}...</p>
                    <p className="px-3 shadow-md py-1 absolute top-5 right-0 font-bold text-primary bg-white rounded-l-md">${price}</p>
                </div>
                <div className="w-full flex justify-center py-7">
                    <ButtonPrimary
                        bgColor={"bg-black/10"}
                        onClick={() => {handleAddToCart(item), refetch()}}
                    >
                        ADD TO CART
                    </ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
