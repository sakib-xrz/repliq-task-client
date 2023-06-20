import { Outlet } from "react-router-dom";
import DashboardNav from "../../components/DashboardNav";

const Dashboard = () => {
    return (
        <div className="pt-14 md:pt-20 space-y-14 lg:space-y-20">
            <DashboardNav />
            {Outlet}
        </div>
    );
};

export default Dashboard;
