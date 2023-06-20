import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../helpers/global";
import { useAuth } from "../../context/AuthProvider";
import Wrapper from "../../components/Wrapper";
import Loader from "../../components/Loader";

const MyOrder = () => {
    const { currentUser } = useAuth();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(data);

    useEffect(() => {
        axios
            .get(`${BASE_URL}/order/${currentUser?.phone}`)
            .then(function (response) {
                setData(response?.data?.data);
                setLoading(false);
            });
    }, [currentUser?.phone]);

    return (
        <Wrapper className={"my-28"}>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center">
                        My Order
                    </p>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-center">
                                    <th>Food Image</th>
                                    <th>Ordered Food</th>
                                    <th>Customer Info</th>
                                    <th>Shipping Address</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr key={item?._id} className="text-center">
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item?.data?.image}
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div>
                                                    <div className="font-bold">
                                                        {item?.data?.name}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {item?.data?.category}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item?.name}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">
                                                {item?.phone}
                                            </span>
                                        </td>
                                        <td>{item?.address}</td>
                                        <th>
                                            <button className="bg-green-500 text-white rounded-md btn-xs cursor-default">
                                                Paid
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </Wrapper>
    );
};

export default MyOrder;
