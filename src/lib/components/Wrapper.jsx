/* eslint-disable react/prop-types */
const Wrapper = ({ children, className, maxWidth }) => {
    return (
        <div
            className={`w-full ${maxWidth ?? "max-w-[1280px]"} px-5 md:px-10 mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;
