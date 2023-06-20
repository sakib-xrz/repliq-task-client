import useTitle from "../../lib/hooks/useTitle";
import CartPage from "../../lib/modules/cart/Cart";

const Cart = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        useTitle("Cart");
    return (
        <div>
            <CartPage />
        </div>
    );
};

export default Cart;
