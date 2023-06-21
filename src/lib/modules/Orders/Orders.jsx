import { useEffect, useState } from "react";
import { BASE_URL } from "../../helpers/global";
import axios from "axios";

const Orders = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/order/`).then(function (response) {
            setData(response?.data);
        });
    }, []);

return (
    <div className=" overflow-x-auto">
        <p className="text-3xl md:text-4xl mb-5 font-black leading-10 text-center md:text-left">
            Orders
        </p>
        <div className="overflow-x-auto mt-6">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>SL No</th>
                        <th>Food Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>Payment Status</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, i) => (
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{item?.data?.name}</td>
                            <td>{item?.data?.category}</td>
                            <td>{item?.data?.price}</td>
                            <td>{item?.name}</td>
                            <td>{item?.phone}</td>
                            <td>Paid</td>
                            <td>{item?.tranId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Orders;
