import "./ChartBar.css"

function ChartBar(props) {

    let barFillheight = "0%";

    if (props.maxValue > 0) {
        barFillheight = Math.round(props.value / props.maxValue * 100) + "%";
    }

    return (<div className="chart-bar">
        <div className="chart-bar__inner">
            <div style={{ height: barFillheight }} className="chart-bar__fill">
            </div>
        </div>
        <div className="chart-bar__label">
            {props.label}
        </div>
    </div>)
}

export default ChartBar;