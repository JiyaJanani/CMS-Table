import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import ScatterChartData from "../ChartData/ScatterChart";
import "./chartStyle.css";

const data = ScatterChartData.map((item, index) => {
  return { year: Number(item.year), customer: item.customer };
});
debugger;
export default class ScatterChartComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="head">Scatter Plot (Year vs Store Count)</div>
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis
            type="number"
            dataKey="year"
            // ticks={[2010, 2012, 2014, 2016, 2018, 2020, 2022]}
            domain={["auto", "auto"]}
          />
          <YAxis type="number" dataKey="customer" name="" unit="" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="A school" data={data} fill="#094C59">
            <LabelList dataKey="" />
          </Scatter>
        </ScatterChart>
      </div>
    );
  }
}
