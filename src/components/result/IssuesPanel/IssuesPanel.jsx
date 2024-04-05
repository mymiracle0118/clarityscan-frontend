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
    <div className=" border-white border-4 rounded-[40px] px-2 py-6 2xl:px-7 xl:pl-10 2xl:pl-20 text-white bg-[#0A081D] xl:w-3/5 md:w-full">
      <div className="sm:flex justify-between md:gap-x-4 xl:gap-x-12" >
        <div className="w-full lg:w-[600px] flex flex-col">
          <PieChart data={chartValues} />
          <div className="mt-6 lg:pl-6 xl:pl-0 order-1 sm:order-2">
            <div className="flex items-center justify-center md:justify-normal">
              <span className="text-6xl font-bold">{issueCount}</span>
              <span className="ml-5 text-xl">Total Vulnerabilities found</span>
            </div>
            <div className="flex-1 mt-10 hidden sm:flex justify-center md:justify-normal mb-5 sm:mb-0">
              <ViewAuditReportButton handleClick={onclick} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {chartValues.map((item, i) => (
            <div key={i} className="mb-5 md:mb-10 last:mb-0 w-48 md:w-auto mx-auto">
              <ChartStateCircleCard chartState={item} />
            </div>
          ))}
        </div>
        <div className="flex-1 mt-10 sm:hidden flex justify-center md:justify-normal mb-5 sm:mb-0">
              <ViewAuditReportButton handleClick={onclick} />
            </div>
      </div>
    </div>
  );
};

export default IssuesPanel;
