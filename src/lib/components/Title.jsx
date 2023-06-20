/* eslint-disable react/prop-types */
const Title = ({ title, subtitle }) => {
    return (
        <div className="my-10 flex justify-center">
            <div className="flex flex-col justify-center">
                <p className="text-primary text-center text-md italic lg:text-lg mb-4">
                    --- {subtitle} ---
                </p>
                <span className="text-center border-t-4 border-b-4 border-secondary text-2xl lg:text-5xl py-2">
                    {title}
                </span>
            </div>
        </div>
    );
};

export default Title;
