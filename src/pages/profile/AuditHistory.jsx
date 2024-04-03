import React, { useState } from "react";
import ProfileSidebar from "@/components/layouts/Sidebar/ProfileSidebar";
import AuditHistoryHeader from "@/components/profile/audithistory/AuditHistoryHeader";
import AuditHistoryCard from "@/components/profile/audithistory/AuditHistoryCard";
import Filter from "@/components/profile/audithistory/Filter";
import { BTC, STX, NFT } from "@/assets";

const hitoryValues = [
  {
    chainImg: STX,
    chain: "STX",
    contractName: "Stacks(STX)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#7ED957",
    percentage: "66",
  },
  {
    chainImg: NFT,
    chain: "NFT",
    contractName: "Megapont Ape #444 (NFT)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#FF5757",
    percentage: "26",
  },
  {
    chainImg: BTC,
    chain: "BTC",
    contractName: "Bitcoin (BTC)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#FFBD59",
    percentage: "91",
  },
  {
    chainImg: STX,
    chain: "STX",
    contractName: "Stacks(STX)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#8C52FF",
    percentage: "50",
  },
  {
    chainImg: STX,
    chain: "STX",
    contractName: "Stacks(STX)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#7ED957",
    percentage: "66",
  },
  {
    chainImg: NFT,
    chain: "NFT",
    contractName: "Megapont Ape #444 (NFT)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#FF5757",
    percentage: "26",
  },
  {
    chainImg: BTC,
    chain: "BTC",
    contractName: "Bitcoin (BTC)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#FFBD59",
    percentage: "91",
  },
  {
    chainImg: STX,
    chain: "STX",
    contractName: "Stacks(STX)",
    contractID: "SP9DB612KK4J38TW6SY9296JKCSZ2ETMXX585KJZ",
    issue: [
      { Critical: 60 },
      { High: 36 },
      { Medium: 94 },
      { Low: 65 },
      { Informational: 20 },
      { Gas: 40 },
    ],
    style: "#8C52FF",
    percentage: "50",
  },
];

export default function AuditHistory() {
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
    <div>
      <ProfileSidebar />
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
    </div>
  );
}
