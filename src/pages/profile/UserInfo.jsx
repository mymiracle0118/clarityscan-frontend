import React from "react";
import { Link } from "react-router-dom";
import { facebook, twitter, instagram, linkdin } from "@/assets";
import UserinfoHeader from "@/components/profile/userinfo/UserinfoHeader";
import UserinfoEditPanel from "@/components/profile/userinfo/UserinfoEditPanel";

export default function UserInfo(props) {
  const { selectedAvatar } = props;
  return (
    <>
      <section className="md:pl-44 lg:pl-52 bg-[#0A0C10] w-full h-full min-h-screen text-white">
        <div className="p-5 pt-7 md:p-12">
          <div className="flex justify-between xl:justify-center gap-x-0 xl:gap-x-48 items-end">
            <p className="text-3xl lg:text-5xl font-extrabold">
              Welcome, User <span className="text-4xl lg:text-6xl">👋</span>
            </p>
            {/* <div className="flex gap-x-5">
              <Link to="">
                <img src={facebook} alt="" className="w-6 lg:w-10" />
              </Link>
              <Link to="">
                <img src={twitter} alt="" className="w-6 lg:w-10" />
              </Link>
              <Link to="">
                <img src={instagram} alt="" className="w-6 lg:w-10" />
              </Link>
              <Link to="">
                <img src={linkdin} alt="" className="w-6 lg:w-10" />
              </Link>
            </div> */}
          </div>
          <UserinfoHeader />
          <UserinfoEditPanel selectedAvatar={selectedAvatar} />
        </div>
      </section>
    </>
  );
}
