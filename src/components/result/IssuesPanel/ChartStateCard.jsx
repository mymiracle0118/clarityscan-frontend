const ChartStateCircleCard = ({ chartState }) => {
  return (
    <div className="grid grid-gap-3 grid-cols-2 bg-white p-3 rounded-[50px] pl-6 w-[195px]">
      <div
        // className={`border-l-[5px] border-[${chartState.color}] text-[#737373] pl-3`}
        className={`border-l-[5px]  text-[#737373] pl-3`}
        style={{
          borderColor: chartState.color,
        }}
      >
        {chartState.label}
      </div>
      <div className="text-center font-medium text-black">{chartState.y}</div>
    </div>
  );
};

export default ChartStateCircleCard;
