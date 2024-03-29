import { money, lightning, code, shield } from "@/assets";
import { Link } from "react-router-dom";
import CanvasJSReact from "@canvasjs/react-charts";
import ChartStateCard from "./ChartStateCard";
import ChartStateCircleCard from "./ChartStateCard";
import ViewAuditReportButton from "./ViewAuditReportButton";
import PieChart from "./PieChart";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const IssuesPanel = () => {
  const chartValues = [
    { label: "Critical", y: 60, color: "#7140e2" },
    { label: "High", y: 36, color: "#e8285c" },
    { label: "Medium", y: 94, color: "#35c359" },
    { label: "Low", y: 65, color: "#3087f8" },
    { label: "Informational", y: 20, color: "#fdd227" },
    { label: "Gas", y: 40, color: "#fb65c3" },
  ];
  const onclick = () => {
    console.log("handle click");
  };
  const issueCount = chartValues.reduce((a, item) => a + item.y, 0);

  return (
    <div className=" border-white border-2 rounded-3xl p-8 text-white w-[100%] min-w-[695px]">
      <div className="flex ">
        <div className="grid w-[70%] px-5">
          <PieChart data={chartValues} />
          <div className="mt-5">
            <div className="">
              <span className="text-5xl font-bold">{issueCount}</span>
              <span className="ml-5 ">Total Vulnerabilities found</span>
            </div>
            <div className="flex-1 mt-5">
              <ViewAuditReportButton handleClick={onclick} />
            </div>
          </div>
        </div>
        <div className="" style={{ float: "right" }}>
          {chartValues.map((item, i) => (
            <div key={i} className="my-10">
              <ChartStateCircleCard chartState={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssuesPanel;
