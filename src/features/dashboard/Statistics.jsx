import { useContext } from "react";
import { DarkContext } from "../../App";

/* eslint-disable react/prop-types */
const Statistics = ({ iconName, statisticName, statisticNum, color, bg }) => {
  const { darkMood } = useContext(DarkContext);

  return (
    <div className="flex items-center gap-3 overflow-hidden rounded-md bg-white p-3 dark:bg-slate-800">
      <span
        style={{
          color: +darkMood ? bg : color,
          backgroundColor: +darkMood ? color : bg,
        }}
        className="rounded-full p-4 text-4xl"
      >
        {iconName}
      </span>
      <div className="flex flex-col font-semibold">
        <span className="text-sm uppercase text-slate-500">
          {statisticName}
        </span>
        <span className="text-2xl font-semibold">{statisticNum}</span>
      </div>
    </div>
  );
};

export default Statistics;
