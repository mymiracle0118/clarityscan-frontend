import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { logo, user, logout, history1, home, close, menu } from "@/assets";
// import { Button } from "@mui/material";

const ProfileSidebar = (props) => {
  const { selectPage, imgPath, handleLogout } = props;
  const [toggle, setToggle] = useState(false);
  const sidebarRef = useRef(null);

  // Function to handle click outside of sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const logOutBtnClick = () => {
    handleLogout();
  };

  // Function to handle scroll
  const handleScroll = () => {
    setToggle(false);
  };

  const selectPageButtonClick = (path) => {
    selectPage(path);
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
    <>
      <div className="hidden md:flex flex-col fixed justify-between items-center h-full md:w-44 lg:w-52 bg-[#1D1E29] border-r-4 rounded-e-3xl border-white">
        <Link to="#" className="mt-3">
          <img
            src={imgPath}
            alt=""
            className="md:w-32 lg:w-40 md:h-32 lg:h-40 border-[6px] border-[#494967] rounded-full object-cover"
          />
        </Link>
        <div>
          <Link to="/">
            <div className="hover:bg-[#41424D] md:w-44 lg:w-52 py-1">
              <img src={home} alt="" className="w-12 m-auto" />
            </div>
          </Link>
          <button
            onClick={() => {
              selectPageButtonClick("userinfo");
            }}
          >
            <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-5">
              <img src={user} alt="" className="w-12 m-auto" />
            </div>
          </button>
          <button
            onClick={() => {
              selectPageButtonClick("audithistory");
            }}
          >
            <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-5">
              <img src={history1} alt="" className="w-12 m-auto" />
            </div>
          </button>
          <button onClick={logOutBtnClick} className="mt-4">
            <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-5">
              <img src={logout} alt="" className="w-12 m-auto" />
            </div>
          </button>
        </div>
        <Link to="/" className="mb-10">
          <img src={logo} alt="" className="md:w-20 lg:w-24" />
        </Link>
      </div>
      <div className="flex justify-start items-center md:hidden absolute">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mt-1 ml-1 z-30"
          onClick={(event) => {
            event.stopPropagation(); // Stop event propagation
            setToggle((previous) => !previous);
          }}
        />
        <div
          ref={sidebarRef}
          className={`${
            toggle ? "flex" : "hidden"
          } p-2 ss:p-6 bg-black-gradient absolute top-0 left-0 z-20 min-w-[140px] sidebar flex flex-col justify-between items-center h-screen`}
        >
          <ul className="list-none flex flex-col justify-between items-center gap-y-3 flex-1">
            <Link to="/" className="mt-3">
              <img
                src={imgPath}
                alt=""
                className="w-24 lg:w-40 h-24 lg:h-40 border-[6px] border-[#494967] rounded-full object-cover"
              />
            </Link>
            <div>
              <Link to="/">
                <div className="hover:bg-[#41424D] md:w-44 lg:w-52 py-1">
                  <img src={home} alt="" className="w-8 ss:w-12 m-auto" />
                </div>
              </Link>
              <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-3 ss:mt-5">
                <button
                  onClick={() => {
                    selectPageButtonClick("userinfo");
                  }}
                >
                  <img src={user} alt="" className="w-8 ss:w-12 m-auto" />
                </button>
              </div>
              <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-3 ss:mt-5">
                <button
                  onClick={() => {
                    selectPageButtonClick("audithistory");
                  }}
                >
                  <img src={history1} alt="" className="w-8 ss:w-12 m-auto" />
                </button>
              </div>
              <button onClick={logOutBtnClick} className="mt-4">
                <div className="hover:bg-[#41424D]  md:w-44 lg:w-52 py-1 mt-3 ss:mt-5">
                  <img src={logout} alt="" className="w-8 ss:w-12 m-auto" />
                </div>
              </button>
            </div>
            <Link to="/" className="mb-2 ss:mb-10">
              <img src={logo} alt="" className="w-16 ss:w-20 lg:w-24" />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileSidebar;
