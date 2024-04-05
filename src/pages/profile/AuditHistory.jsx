import React, { useState } from "react";

import AuditHistoryHeader from "@/components/profile/audithistory/AuditHistoryHeader";
import AuditHistoryCard from "@/components/profile/audithistory/AuditHistoryCard";
import Filter from "@/components/profile/audithistory/Filter";

export default function AuditHistory(props) {
  const { hitoryValues } = props;
  const [selectedChain, setSelectedChain] = useState(hitoryValues);

  const filterButtonSelect = (chain) => {
    // console.log(chain);
    let result;
    if (chain.value == "all") {
      result = hitoryValues;
    } else {
      result = hitoryValues.filter((item) => item.chain == chain.value);
    }
    // console.log(result);
    setSelectedChain(result);
  };

  return (
    <>
      <section className="md:pl-44 lg:pl-52 bg-[#0A0C10] w-full h-full min-h-screen text-white">
        <div className="p-4 md:p-6">
          <AuditHistoryHeader />
          <Filter filterButtonSelect={filterButtonSelect} />
          <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
            {selectedChain.map((item, i) => (
              <div key={i}>
                <AuditHistoryCard historyState={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
