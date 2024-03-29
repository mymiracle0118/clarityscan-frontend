import Sidebar from "@/components/layouts/Sidebar/sidebar";
import PremiumPanel from "@/components/result/PremiumPanel";
import SourcePanel from "@/components/result/SourcePanel";
import { StatisticPanel } from "@/components/result/StatisticPanel";
import IssuesPanel from "@/components/result/IssuesPanel/Index.container";

import "@/assets/sass/globals.scss";

export default function Result() {
  return (
    <div className="relative bg-[#0F002E]">
      <Sidebar />
      <div className="ml-28 p-16">
        <div className="flex mb-6 gap-x-20">
          <StatisticPanel />
          <IssuesPanel />
        </div>
        <div className="flex gap-x-20">
          <PremiumPanel />
          <SourcePanel />
        </div>
      </div>
    </div>
  );
}
