import calculateTax from "./calculateTax";

const calculateTotal = (data) => {
    const subtotal = data?.reduce((accumulator, currentValue) => {
        return accumulator + currentValue?.quantity * currentValue?.data?.price;
    }, 0);

    const shipping = subtotal < 1 ? 0 : 5;

    const tax = calculateTax(subtotal);

    const total = (subtotal + shipping + tax)?.toFixed(2);

    return {
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        total: total,
    };
};

export default calculateTotal;