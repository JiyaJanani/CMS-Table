import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import chartData from "../ChartData/PieChart";
import "./chartStyle.css";

const data02 = chartData.map((item, index) => {
  return { name: item.store, value: item.customer };
});

export default function App() {
  return (
    <div>
      <div className="head">Pie Chart (Customer count by store)</div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          data={data02}
          cx={"50%"}
          cy={"50%"}
          innerRadius={"60%"}
          outerRadius={"80%"}
          fill="#094C59"
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}
