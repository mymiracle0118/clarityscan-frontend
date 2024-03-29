import { Link } from "react-router-dom";

import { money, lightning, code, shield } from "@/assets";

import HalfCircle from "./HalfCircle";

const StatisticPanel = () => {
  return (
    <div className=" border-white border-2 rounded-[40px] p-8 radialbg w-[1000px]">
      <div className="text-white flex gap-x-4 mb-6">
        <img src={money} alt="" className="w-16 h-16" />
        <div>
          <p className="text-[20px] font-bold">
            SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ
          </p>
          <div className="flex text-[18px]">
            <p className="px-4 border-r-1 border-black block">Stacks (STX)</p>
            <Link className="px-4">
              View on Stacks Explorer<i></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white px-2 py-6 rounded-[40px] mb-6">
        <div className="flex justify-between gap-x-6 text-white">
          <div className="flex justify-center gap-x-4 w-1/2 radialbg p-3 items-center rounded-full">
            <img src={lightning} alt="" className="w-6" />
            <div>
              <p>Scan Duration</p>
              <p className="text-center">2 Secs</p>
            </div>
          </div>
          <div className="flex justify-center gap-x-4 w-1/2 radialbg p-3 items-center rounded-full">
            <img src={code} alt="" className="w-12 h-12" />
            <div>
              <p>Lines of Code</p>
              <p className="text-center">4000</p>
            </div>
          </div>
        </div>
        <HalfCircle score="60" />
        <div className="text-center text-neutral-950">
          <p className="text-[24px]">
            Your security score is <b>average</b>
          </p>
          <p>
            The <b>ClarityScan</b> score is calculated based on lines of code
            and
            <br />
            weights assigned to each issue depending on the severity and
            <br />
            confidence. To improve your score, view the detailed result and
            <br />
            leverage the remediation solutions provided.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-[40px] flex justify-between items-center gap-x-6">
        <img src={shield} alt="" className="w-12" />
        <p>
          This audit report has not been verified by the ClarityScan team. To
          learn more about our published reports.{" "}
          <Link className="underline">click here.</Link>
        </p>
      </div>
    </div>
  );
};

export default StatisticPanel;
