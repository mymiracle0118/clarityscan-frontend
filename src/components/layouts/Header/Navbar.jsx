import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "@/constants";
import { logo, menu } from '@/assets'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="columns-3">
        <img src={logo} alt="hoobank" className="w-[90px]" />
      </div>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white mr-10`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-x-2 columns-3">
        <Link to="/auth/signin" className="text-white text-xl  px-7 py-4">
          Login
        </Link>
        <Link
          to="/auth/signup"
          className="text-white text-xl px-7 py-4 border-teal-300 rounded-full border"
        >
          Signup
        </Link>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
