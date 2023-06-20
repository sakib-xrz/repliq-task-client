import useTitle from "../../lib/hooks/useTitle";
import HomePage from "../../lib/modules/home/Home";

const Home = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Home");
    return (
        <div>
            <HomePage />
        </div>
    );
};

export default Home;
