const ChartStateCircleCard = ({ chartState }) => {
  return (
    <div className="flex justify-between items-center bg-white py-2 xl:py-4 rounded-[50px] px-6 xl:px-10 md:w-52 xl:w-72">
      <div
        className={`border-l-[8px]  text-[#737373] xl:text-xl pl-3`}
        style={{
          borderColor: chartState.color,
        }}
      >
        {chartState.label}
      </div>
      <div className="text-center text-black text-xl lg:text-3xl font-black">
        {chartState.y}
      </div>
    </div>
  );
};

export default ChartStateCircleCard;
