import { PureComponent } from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import "./chartStyle.css";
import chartdata from "../ChartData/Barchart";
import moment from "moment";

const data = chartdata.map((elem, index) => {
  return { name: moment(elem.month).format("MMMM"), customer: elem.customer };
});

export default class BarchartComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="head">Barchart (Month vs Customer count)</div>
        <BarChart
          width={360}
          height={250}
          data={data}
          barSize={10}
          margin={{
            top: 5,
            bottom: 1,
          }}
        >
          <CartesianGrid stroke="#F7F7F7" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            stroke="#000"
            fontSize={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value: string, index: number) => `$${value}`}
            stroke="rgba(157, 157, 157, 1)"
            fontSize={10}
            minTickGap={3}
            interval={"preserveStartEnd"}
          />
          <Tooltip />
          <Bar
            dataKey={"customer"}
            fill="#094C59"
            background={{ fill: "#DFE8EA", radius: [6, 6, 6, 6] }}
            width={2}
            radius={[6, 6, 6, 6]}
          />
        </BarChart>
      </div>
    );
  }
}
