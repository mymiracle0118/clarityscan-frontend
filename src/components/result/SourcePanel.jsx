import { Link } from "react-router-dom";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { codesample, crown2 } from "@/assets";

const SourcePanel = () => {
  return (
    <div className="sourcepanelbg">
      <div className=" border-l-2 border-transparent hover:bg-black hover:opacity-50 hover:border-sky-500 duration-500">
        <img
          src={codesample}
          alt=""
          className="relative hover:bg-black hover:opacity-40 duration-500 h-[18rem] 2xl:h-auto"
        />
      </div>
      <div className="absolute bottom-[10rem] left-[3rem] sm:left-[11rem] lg:left-[17rem] xl:left-[65rem] sourcepanellink">
        <div className="flex items-center gap-x-2">
          <img src={crown2} alt="" className="w-[20px] md:w-[30px]" />
          <p className="text-white text-[16px] md:text-[30px]">
            <Link to="/">
              Upgrade to Access the audited code{"   "}
              <LaunchOutlinedIcon />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourcePanel;
