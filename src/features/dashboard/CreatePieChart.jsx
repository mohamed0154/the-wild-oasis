import {} from "@material-tailwind/react";
import {
  PieChart,
  Tooltip,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

const data = [
  { name: "Group A", value: 400, color: "#ef4444" },
  { name: "Group B", value: 300, color: "#eab308" },
  { name: "Group C", value: 300, color: "#1d4ed8" },
  { name: "Group D", value: 200, color: "#84cc16" },
];

const CreatePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
          nameKey="name"
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CreatePieChart;
