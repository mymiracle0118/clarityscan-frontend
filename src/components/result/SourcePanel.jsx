import { Link } from "react-router-dom";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { codesample, crown2 } from "@/assets";

const SourcePanel = () => {
  return (
    <div className="sourcepanelbg relative">
      <div className=" border-l-2 border-transparent hover:bg-black hover:opacity-50 hover:border-sky-500 duration-500">
        <img
          src={codesample}
          alt=""
          className="hover:bg-black hover:opacity-40 duration-500 h-[18rem] 2xl:h-auto"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sourcepanellink">
        <div className="flex items-center gap-x-2">
          <img src={crown2} alt="" className="w-[20px] sm:w-[25px] lg:w-[30px]" />
          <Link to="#" className="text-white text-[16px] sm:text-[20px] lg:text-[30px] sm:w-[400px] lg:w-[513px]">
            Upgrade to Access the audited code{"   "}
            <LaunchOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SourcePanel;
