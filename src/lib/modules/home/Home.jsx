import { useState } from "react";
import Banner from "../../components/Banner";
import axios from "axios";
import { BASE_URL } from "../../helpers/global";
import { useEffect } from "react";
import Loader from "../../components/Loader";
import MenuCard from "../../components/MenuCard";
import Wrapper from "../../components/Wrapper";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("dessert");
    const [categories, setCategories] = useState([]);
    const [categoryWiseData, setCategoryWiseData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${BASE_URL}/menu/categories`).then(function (response) {
            const filteredCategory = response?.data?.data?.filter(
                (data) => data !== "offered" && data !== "popular"
            );
            setCategories(filteredCategory);
        });

        axios
            .get(`${BASE_URL}/menu/${selectedCategory}`)
            .then(function (response) {
                setCategoryWiseData(response?.data?.data);
                setLoading(false);
            });
    }, [selectedCategory]);

    return (
        <div className="space-y-14 lg:space-y-20">
            <Banner />
            <Wrapper>
                <div className="flex justify-center gap-5 lg:gap-14 mb-10">
                    {categories?.map((category, index) => (
                        <p
                            onClick={() => setSelectedCategory(category)}
                            key={index}
                            className={`${
                                selectedCategory === category
                                    ? "text-primary"
                                    : ""
                            }  capitalize font-bold lg:text-2xl cursor-pointer hover:text-primary`}
                        >
                            {category}
                        </p>
                    ))}
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-12 gap-auto md:gap-5 lg:gap-10">
                        {categoryWiseData?.map((item) => (
                            <MenuCard
                                item={item}
                                key={item?._id}
                                img={item?.image}
                                title={item?.name}
                                description={item?.recipe}
                                price={item?.price}
                            />
                        ))}
                    </div>
                )}
            </Wrapper>
            <div></div>
        </div>
    );
};

export default Home;
