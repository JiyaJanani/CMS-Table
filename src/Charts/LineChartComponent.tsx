import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import chartData from "../ChartData/LineChart";
import "./chartStyle.css";

const data = chartData.map((data: any, index: any) => {
  return { year: data.year, customer: data.customer };
});

export default class LineChartComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="head">Line Chart (Year vs Customer count)</div>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="customer"
            stroke="#094C59"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </div>
    );
  }
}
