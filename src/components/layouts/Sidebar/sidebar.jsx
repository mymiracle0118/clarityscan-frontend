import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "@/constants";
import { logo, user, upgrade, home } from "@/assets";

const Sidebar = () => {
  return (
    <div className="h-full w-28 flex flex-col justify-between items-center fixed bg-[#140B4A]">
      <Link to="/" className="mt-5">
        <img src={logo} alt="hoobank" className="w-[80px]" />
      </Link>
      <div>
        <Link to="/" className="mt-5">
          <img src={home} alt="hoobank" className="w-[60px]" />
        </Link>
        <p className="text-center text-white text-md">Home</p>
      </div>
      <div className="flex flex-col gap-y-7">
        <Link to="">
          <img src={upgrade} alt="hoobank" className="w-9 m-auto" />
          <p className="text-white text-center text-md">Upgrade</p>
        </Link>
        <Link to="" className="text-white text-xl px-7 py-4 mb-3">
          <img src={user} alt="" className="w-10 m-auto" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
