const PremiumPanel = () => {
  return (
    <div className="bg-[url('/src/assets/images/result/premiumpanelbg.webp')] bg-cover bg-left text-white pt-7 pb-4 pl-7 pr-6 rounded-[30px] flex-none md:w-full xl:w-[calc(665/1920*100%)] 2xl:w-[calc(700/1920*100%)] 2xl:max-w-[600px]  mb-4 sm:mb-7 xl:mb-0 ">
      <p className="block sm:hidden xl:block text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[4rem] font-black pb-3 md:pb-7 ">
        Buy
        <br />
        ClarityScan
        <br />
        Premium
      </p>
      <p className="hidden sm:block xl:hidden text-4xl md:text-5xl lg:text-6xl leading-[3rem] md:leading-[4rem] font-black pb-7 ">
        Buy ClarityScan
        <br />
        Premium
      </p>
      <p className="text-md md:text-base">
        GET A FULL REPORT WITH OUR
        <br />
        HIGHT QUALITY SCANNING
      </p>
    </div>
  );
};

export default PremiumPanel;
