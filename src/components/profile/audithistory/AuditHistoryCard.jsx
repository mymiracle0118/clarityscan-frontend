import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const AuditHistoryCard = ({ historyState }) => {

  return (
    <div className="bg-[#12161D] p-2 ss:p-3 sm:p-4 rounded-[30px] ss:rounded-[40px] flex items-center">
      <div>
        <div className="flex items-center gap-x-2 mb-4 ss:mb-8">
          <img src={historyState.chainImg} alt="" className="w-6 ss:w-8 md:w-12 rounded-full" />
          <div>
            <p className="text-[0.7rem] ss:text-xs md:text-sm">{historyState.contractID}</p>
            <p className="text-[0.7rem] ss:text-xs md:text-sm">{historyState.contractName}</p>
          </div>
        </div>
        <div className="flex justify-center gap-x-2 sm:gap-x-6 md:gap-x-16">
          <div className="text-white">
            <div className="flex flex-col gap-y-2 ss:gap-y-4 md:gap-y-6">
              <div>
                <span className="text-xs ss:text-sm sm:text-md md:text-lg px-2">
                  {
                    historyState.issue.find((issue) =>
                      issue.hasOwnProperty("Critical")
                    )?.Critical
                  }
                </span>
                <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#713AE5] px-2">
                  Critical
                </span>
              </div>
              <div>
                <span className="text-xs ss:text-md md:text-lg px-2">
                  {
                    historyState.issue.find((issue) =>
                      issue.hasOwnProperty("High")
                    )?.High
                  }
                </span>
                <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#ED2E5B] px-2">
                  High
                </span>
              </div>
              <div>
                <span className="text-xs ss:text-md md:text-lg px-2">
                  {
                    historyState.issue.find((issue) =>
                      issue.hasOwnProperty("Medium")
                    )?.Medium
                  }
                </span>
                <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#1FC355] px-2">
                  Medium
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 ss:gap-y-4 md:gap-y-6">
            <div>
              <span className="text-xs ss:text-md md:text-lg px-2">
                {
                  historyState.issue.find((issue) =>
                    issue.hasOwnProperty("Low")
                  )?.Low
                }
              </span>
              <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#1F84FB] px-2">Low</span>
            </div>
            <div>
              <span className="text-xs ss:text-md md:text-lg px-2">
                {
                  historyState.issue.find((issue) =>
                    issue.hasOwnProperty("Informational")
                  )?.Informational
                }
              </span>
              <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#FFDE59] px-2">
                Informational
              </span>
            </div>
            <div>
              <span className="text-xs ss:text-md md:text-lg px-2">
                {
                  historyState.issue.find((issue) =>
                    issue.hasOwnProperty("Gas")
                  )?.Gas
                }
              </span>
              <span className="text-xs ss:text-sm sm:text-md border-l-[5px] border-[#FF66C4] px-2">Gas</span>
            </div>
          </div>
        </div>
      </div>
      <CircularProgressbarWithChildren
        value={historyState.percentage}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "24px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: historyState.style,
          textColor: "#D9D9D9",
          trailColor: "#2E323F",
        })}
        className="w-10 ss:w-16 sm:w-24 md:w-44"
      >
        <div className="text-center mt-12 ss:mt-16 sm:mt-0 text-[#D9D9D9]">
          <p className="sm:text-sm md:text-3xl text-extrabold">{historyState.percentage}</p>
          <p className="text-[0.55rem] ss:text-xs md:text-base mt-4 ss:mt-8 sm:mt-0">
            vulnerabilities
            <br />
            found
          </p>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default AuditHistoryCard;
