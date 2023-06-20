import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="flex justify-center">
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
                ballColors={["#fff", "#fff", "#fff"]}
                backgroundColor="#D99904"
            />
        </div>
    );
};

export default Loader;
