import { Link } from "react-router-dom";
import { money, lightning, code, shield } from "@/assets";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import HalfCircle from "./HalfCircle";
import { Box } from "@mui/material";

const StatisticPanel = () => {
  return (
    <div className=" border-white border-4 rounded-[40px] px-2 md:px-6 2xl:px-8 pt-6 pb-4 md:pt-10 md:pb-6 radialbg md:w-full 2xl:max-w-[600px] mb-4 sm:mb-7 xl:mb-0 ">
      <div className="text-white flex gap-x-1 2xl:gap-x-4 mb-6 items-center">
        <img src={money} alt="" className="w-8 md:w-12 lg:w-14 2xl:w-16 h-8 md:h-12 lg:h-14 2xl:h-16" />
        <div className="flex flex-col gap-y-[0px]">
          <div className="text-sm md:text-xl lg:text-2xl xl:text-[0.9rem] 2xl:text-xl font-bold">
            SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ
          </div>
          <div className="flex text-sm md:text-lg">
            <p className="px-2 md:px-4 border-r-1 border-black block text-sm md:text-lg xl:text-sm 2xl:text-md">
              Stacks (STX)
            </p>
            <span>|</span>
            <Link className="px-2 md:px-4 text-sm md:text-lg xl:text-sm 2xl:text-md">
              View on Stacks Explorer  <LaunchOutlinedIcon sx={{ fontSize:'15px'}} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white px-4 py-6 rounded-[40px] mb-6">
        <div className="flex justify-between gap-x-2 md:gap-x-6 text-white mb-6">
          <div className="radialbg flex justify-center items-center gap-x-2 md:gap-x-4 px-3 md:px-4 2xl:px-8 h-16 py-1 rounded-full w-1/2">
            <img src={lightning} alt="" className="w-3 md:w-4 2xl:w-6" />
            <div>
              <p className="text-sm 2xl:text-xl">Scan Duration</p>
              <p className="text-center text-md 2xl:text-2xl font-bold">2 Secs</p>
            </div>
          </div>
          <div className="radialbg flex justify-center items-center gap-x-2 md:gap-x-4 px-3 md:px-4 2xl:px-8 h-16 py-1 rounded-full w-1/2">
            <img src={code} alt="" className="w-5 md:w-6 2xl:w-11" />
            <div>
              <p className="text-sm 2xl:text-xl">Lines of Code</p>
              <p className="text-center text-md 2xl:text-2xl font-bold">4000</p>
            </div>
          </div>
        </div>
        <HalfCircle score="75" />
        <div className="text-center text-neutral-950 px-3 lg:px-6">
          <p className="text-lg md:text-[24px] xl:text-lg 2xl:text-[24px] mb-1 sm:mb-0">
            Your security score is <b>average</b>
          </p>
          <p className="text-sm md:text-base xl:text-sm 2xl:text-base">
            The <b>ClarityScan</b> score is calculated based on lines of code
            and weights assigned to each issue depending on the severity and
            confidence. To improve your score, view the detailed result and
            leverage the remediation solutions provided.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[40px] flex justify-between items-center gap-x-6">
        <img src={shield} alt="" className="w-12" />
        <p className="text-sm md:text-base xl:text-sm 2xl:text-base">
          This audit report has not been verified by the <b>ClarityScan</b>{" "}
          team. To learn more about our published reports.{" "}
          <Link className="underline font-bold">click here.</Link>
        </p>
      </div>
    </div>
  );
};

export default StatisticPanel;
