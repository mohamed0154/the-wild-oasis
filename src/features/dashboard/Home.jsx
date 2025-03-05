import CreateCharts from "./CreateChart";
import Statistics from "./Statistics";
import Activities from "./Activities";
import PieChart from "./PieChart";

import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";

const Home = () => {
  return (
    <>
      <h1 className="my-6 mt-16 text-3xl font-semibold">Dashboard</h1>

      <div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Statistics
            iconName={<HiOutlineBanknotes />}
            statisticName="Sales"
            statisticNum="$625"
            color="green"
            bg="#dcfce7"
          />
          <Statistics
            iconName={<HiOutlineBriefcase />}
            statisticName="bookings"
            statisticNum="20"
            color="blue"
            bg="#e0f2fe"
          />
          <Statistics
            iconName={<HiOutlineCalendarDays />}
            statisticName="Check ins"
            statisticNum="10"
            color="indigo"
            bg="#e0e7ff"
          />
          <Statistics
            iconName={<HiOutlineChartBar />}
            statisticName="Occupancy rate"
            statisticNum="48%"
            color="brown"
            bg="#fef9c3"
          />
        </div>
        <div className="my-5 flex items-start gap-3 max-lg:flex-col">
          <Activities />
          <PieChart />
        </div>
        <div className="h-[300px] bg-white p-3">
          <CreateCharts />
        </div>
      </div>
    </>
  );
};

export default Home;
