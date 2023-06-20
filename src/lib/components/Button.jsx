/* eslint-disable react/prop-types */
const Button = ({ children, className, type, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`${className} font-medium py-2 px-6 rounded-md hover:bg-dark 
    duration-500`}
        >
            {children}
        </button>
    );
};

export default Button;
