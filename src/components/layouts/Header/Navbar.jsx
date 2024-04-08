import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "@/constants";
import { logo, menu, close } from "@/assets";

import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null);

  // Function to handle click outside of sidebar
  const handleClickOutside = (event) => {
    // if (sidebarRef.current && !sidebarRef.currenct.contains(event.target)) {
    //   setToggle(false);
    // }
  };

  // Function to handle scroll
  const handleScroll = () => {
    setToggle(false);
  };

  // Add event listeners on mount to handle clicks and scrolls outside of sidebar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex p-6 justify-between items-center navbar max-w-7xl m-auto">
      <Link to="/">
        <img src={logo} alt="hoobank" className="w-[90px]" />
      </Link>
      <ul className="list-none lg:flex hidden justify-center items-center gap-x-10">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className="font-poppins font-normal cursor-pointer text-[16px] text-white"
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      {!cookies.user?.status && (
        <>
          <div className="lg:flex hidden gap-x-2 columns-3">
            <Link to="/signin" className="text-white text-xl  px-7 py-4">
              Login
            </Link>
            <Link
              to="/signup"
              className="text-white text-xl px-7 py-4 border-teal-300 rounded-full border"
            >
              Signup
            </Link>
          </div>
          <div className="flex justify-start items-center lg:hidden absolute right-0">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-10 h-10 mr-4 object-contain z-30"
              onClick={(event) => {
                event.stopPropagation(); // Stop event propagation
                setToggle((previous) => !previous);
              }}
            />
          </div>
        </>
      )}
      <div
        ref={sidebarRef}
        className={`${
          toggle ? "flex" : "hidden"
        } p-2 bg-[#04091E] absolute top-0 left-0 z-20 w-[300px] sidebar flex flex-col justify-start items-start h-screen`}
      >
        <ul className="list-none flex flex-col justify-start items-start w-full">
          <Link to="/" className="flex justify-start mt-3">
            <img src={logo} alt="" className="w-[90px]" />
          </Link>
          <ul className="list-none flex flex-col mt-10 w-full">
            {navLinks.map((nav, i) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] border-b-2 border-gray-700 w-full ${
                  i === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          {!cookies.user?.status && (
            <>
              <div className="flex gap-x-2 mt-8">
                <Link to="/signin" className="text-white text-xl  px-7 py-4">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white text-xl px-7 py-4 border-teal-300 rounded-full border"
                >
                  Signup
                </Link>
              </div>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
