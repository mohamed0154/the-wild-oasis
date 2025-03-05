import CreatePieChart from "./CreatePieChart";

const PieChart = () => {
  return (
    <div className="h-[300px] w-[50%] bg-white p-2 dark:bg-slate-800 max-lg:w-full">
      <h1 className="mx-5 mt-3 text-xl font-semibold tracking-wide">
        Stay duration summary
      </h1>

      <CreatePieChart />
    </div>
  );
};

export default PieChart;
