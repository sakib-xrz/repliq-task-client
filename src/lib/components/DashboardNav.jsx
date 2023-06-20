import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
    const [selected, setSelected] = useState("Summery");
    const routes = [
        { name: "Summery", path: "/dashboard/summery" },
        { name: "Customers", path: "/dashboard/customers" },
        { name: "Orders", path: "/dashboard/orders" },
        { name: "Products", path: "/dashboard/products" },
    ];

    return (
        <ul className="flex justify-center gap-5 lg:gap-10 mb-10 mt-5">
            {routes.map((item, i) => (
                <Link
                    to={item?.path}
                    key={i}
                    onClick={() => setSelected(item?.name)}
                    className={`${
                        selected === item?.name ? "text-primary" : ""
                    }  capitalize font-bold lg:text-2xl cursor-pointer hover:text-primary`}
                >
                    {item?.name}
                </Link>
            ))}
        </ul>
    );
};

export default DashboardNav;
