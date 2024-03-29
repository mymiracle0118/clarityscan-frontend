import { Link } from "react-router-dom";

import { money, lightning, code, shield } from "@/assets";

const PremiumPanel = () => {
  return (
    <div className="bg-[url('/src/assets/images/result/bg1.png')] text-white p-5 w-[600px] rounded-[30px] flex-none">
      <p className="text-[56px] leading-[3rem] font-black pb-7">
        Buy
        <br />
        ClarityScan
        <br />
        Premium
      </p>
      <p>
        GET A FULL REPORT WITH OUR
        <br />
        HIGHT QUALITY SCANNING
      </p>
    </div>
  );
};

export default PremiumPanel;
