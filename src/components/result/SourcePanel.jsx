import { Link } from "react-router-dom";

import { codesample, crown2 } from "@/assets";

const SourcePanel = () => {
  return (
    <div className="sourcepanelbg">
      <div className="relative border-l-2 border-transparent hover:bg-black hover:opacity-50 hover:border-sky-500 duration-500">
        <img
          src={codesample}
          alt=""
          className="hover:bg-black hover:opacity-40 duration-500"
        />
      </div>
      <div className="absolute top-[78%] left-[60%] sourcepanellink">
        <div className="flex items-center gap-x-2">
          <img src={crown2} alt="" className="w-[30px]" />
          <p className="text-white text-[30px]">
            Upgrade to Access the audited code
            <Link to="/">
              <i></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourcePanel;
