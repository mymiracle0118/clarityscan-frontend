import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/constants";
import { logo, user, upgrade, home, close, menu } from "@/assets";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="hidden md:flex flex-col fixed justify-between items-center h-screen w-14 md:w-24 bg-[rgb(30,28,114)]">
        <Link to="/" className="mt-4">
          <img src={logo} alt="" className="w-20" />
        </Link>
        <div>
          <Link to="/" className="mt-5 flex flex-col items-center">
            <img src={home} alt="home" className="w-10 md:w-12" />
            <p className="text-center text-white text-md">Home</p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-7">
          <Link to="">
            <img src={upgrade} alt="" className="w-9 m-auto" />
            <p className="text-white text-center text-md">Upgrade</p>
          </Link>
          <Link to="" className="text-white text-xl mb-2">
            <img src={user} alt="" className="w-10 m-auto" />
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mt-1 ml-1"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-5 left-0 mx-4 my-2 z-20 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            <Link to="/" className="mt-2">
              <img src={logo} alt="" className="w-20" />
            </Link>
            <div>
              <Link to="/" className="mt-2 flex flex-col items-center">
                <img src={home} alt="home" className="w-10 md:w-12" />
                <p className="text-center text-white text-md">Home</p>
              </Link>
            </div>
            <div className="flex flex-col gap-y-2 mt-2">
              <Link to="">
                <img src={upgrade} alt="" className="w-9 m-auto" />
                <p className="text-white text-center text-md">Upgrade</p>
              </Link>
              <Link to="" className="text-white text-xl ">
                <img src={user} alt="" className="w-10 m-auto" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
