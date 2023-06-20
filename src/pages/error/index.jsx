import { Link } from "react-router-dom";
import error from "../../assets/404.gif";
import ButtonPrimary from "../../lib/components/ButtonPrimary";
import Wrapper from "../../lib/components/Wrapper";

const Error = () => {
    return (
        <Wrapper className="h-screen flex justify-center items-center">
            <div>
                <img src={error} alt="" />
                <div className="text-center">
                    <p className="text-2xl font-semibold md:text-3xl">
                        {"Sorry, we couldn't find this page."}
                    </p>
                    <p className="mt-4 mb-8">
                        {
                            "But don't worry, you can find plenty of other things on our homepage."
                        }
                    </p>
                    <Link to={"/"}>
                        <ButtonPrimary>Back To Home</ButtonPrimary>
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
};

export default Error;
