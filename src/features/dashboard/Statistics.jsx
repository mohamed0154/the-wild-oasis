/* eslint-disable react/prop-types */
const Statistics = ({ iconName, statisticName, statisticNum, color, bg }) => {
  return (
    <div className="mb-5 flex items-center gap-3 overflow-hidden rounded-md bg-white p-3 dark:bg-slate-800">
      <span
        style={{ color: color, backgroundColor: bg }}
        className="rounded-full p-4 text-4xl"
      >
        {iconName}
      </span>
      <div className="flex flex-col font-mono font-semibold">
        <span className="text-sm uppercase text-slate-500">
          {statisticName}
        </span>
        <span className="text-2xl font-semibold">{statisticNum}</span>
      </div>
    </div>
  );
};

export default Statistics;
