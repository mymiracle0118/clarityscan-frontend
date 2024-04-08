import React from "react";

import { useNavigate } from "react-router-dom";

import ProfileSidebar from "@/components/layouts/Sidebar/ProfileSidebar";
import UserInfo from "./profile/UserInfo";
import AuditHistory from "./profile/AuditHistory";
import { useCookies } from "react-cookie";

import { BTC, STX, NFT, user } from "@/assets";
import { useState } from "react";

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

export default function Profile() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  const [path, selectPath] = useState("userinfo");
  const [imgPath, setImagPath] = useState(user);
  const selectPage = (path) => {
    console.log(path);
    selectPath(path);
  };
  const selectedAvatar = (imgPath) => {
    setImagPath(imgPath);
  };
  const handleLogout = () => {
    setCookie("user", { status: false, data: "test" });
    navigate("/");
  };
  return (
    <>
      <ProfileSidebar
        selectPage={selectPage}
        handleLogout={handleLogout}
        imgPath={imgPath}
      />
      {path == "userinfo" ? (
        <UserInfo selectedAvatar={selectedAvatar} />
      ) : (
        <div className="none"></div>
      )}
      {path == "audithistory" ? (
        <AuditHistory hitoryValues={hitoryValues} />
      ) : (
        <div className="none"></div>
      )}
    </>
  );
}
