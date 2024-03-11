import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {

    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...values);

    console.log(values);
    console.log(totalMax);

    return (<div className="chart">{props.dataPoints.map(dataPoint =>
        <ChartBar key={dataPoint.label} label={dataPoint.label} maxValue={totalMax} value={dataPoint.value} />
    )}</div>)
}

export default Chart;