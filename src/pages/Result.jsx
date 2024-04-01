import Sidebar from "@/components/layouts/Sidebar/sidebar";
import PremiumPanel from "@/components/result/PremiumPanel";
import SourcePanel from "@/components/result/SourcePanel";
import { StatisticPanel } from "@/components/result/StatisticPanel";
import IssuesPanel from "@/components/result/IssuesPanel/IssuesPanel";
import "@/assets/sass/globals.scss";

export default function Result() {
  return (
    <div className="bg-gradient-to-r from-[#04040F] to-[#3432CA] relative">
      <Sidebar />
      <div className="pl-[10px] sm:pl-[60px] md:pl-[166px] py-8 pr-[10px] md:pr-[70px]">
        <div className="none xl:flex gap-x-16 mb-4 md:mb-6 lg:mb-10">
          <StatisticPanel />
          <IssuesPanel />
        </div>
        <div className="none xl:flex gap-x-16">
          <PremiumPanel />
          <SourcePanel />
        </div>
      </div>
    </div>
  );
}
