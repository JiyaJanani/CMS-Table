import "./App.css";
import BarchartComponent from "./Charts/BarChartComponent";
import LineChartComponent from "./Charts/LineChartComponent";
import PieChartComponent from "./Charts/PieChartComponent";
import ScatterChartComponent from "./Charts/ScatterChart";
import DataTable from "./Table";

function App() {
  return (
    <div className="App">
      <DataTable />
      <div>
        <BarchartComponent />
        <PieChartComponent />
        <LineChartComponent />
        <ScatterChartComponent />
      </div>
    </div>
  );
}

export default App;
