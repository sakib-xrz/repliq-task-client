import useTitle from "../../lib/hooks/useTitle";

const Home = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Home");
    return <div>Home</div>;
};

export default Home;
