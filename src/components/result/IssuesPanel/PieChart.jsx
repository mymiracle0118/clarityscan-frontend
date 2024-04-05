import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const PieChart = ({ data }) => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "",
    },
    containerBackgroundColor: "#0c0921",
    backgroundColor: "transparent",
    toolbar: {},
    data: [
      {
        type: "doughnut",
        startAngle: 260,
        toolTipContent: "<b>{label}</b>: {y}%",
        innerRadius: 65,
        indexLabelFontSize: 0,
        indexLabelLineThickness: 0,
        indexLabelFontColor: "#fff",
        indexLabel: "{label} - {y}%",
        labelFontColor: "#fff",
        dataPoints: data,
      },
    ],
  };
  const cssStyles = `
  .canvasjs-chart-toolbar {
    display: none !important;
  }
`;
  return (
    <div className="order-2 sm:order-1">
      <style>{cssStyles}</style>{" "}
      <div style={{ display: "contents" }} >
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};

export default PieChart;
