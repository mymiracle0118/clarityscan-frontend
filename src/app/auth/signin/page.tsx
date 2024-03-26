"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLogin } from "@/hooks/auth/useLogin";
import { useCallback } from "react";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();
  const router = useRouter();
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const onLogout = useCallback(() => {}, []);

  const onSubmit = () => {
    if (!email || !password) {
      alert("Please enter information");
    } else {
      login(email, password)
        .then((res) => {
          console.log(res);
          // router.push("/profile");
        })
        .catch((e) => alert(e));
    }
  };

  return (
    <div className="signup flex w-screen h-screen">
      <div className="w-1/2 h-screen img-panel">

      </div>
      <div className="w-1/2 h-screen flex flex-wrap place-content-center main-board">
        <div className="text-white max-w-[500px]">
          <div className="text-center text-[48px] font-bold">Sign in for an account</div>
          <div className="text-[18px] text-center">Send, spend and save smarter</div>
          <form
            className="mt-3"
            onSubmit={e => e.preventDefault()}
            noValidate
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or Email"
              className="common-input w-full my-4"
              type="email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="common-input w-full my-4"
              type="password"
            />
            <div className="flex gap-x-3 items-center justify-center">
              <input type="checkbox" name="" id="" />
              <label htmlFor="checkbox-label" className="checkbox-label">By creating an account, you agreeing to our Privacy Policy, and Electronics Communication Policy.</label>
            </div>
            <button
              onClick={onSubmit}
              className="common-btn w-full my-4 py-[12px] btn-animation"
            >
              Sign In
            </button>
            <div className='w-full text-[14px] text-center text-white mt-[70px]'>
              <span>Don't have an account yet?</span>
              <Link
                href="/auth/signup"
                className='cursor-pointer ml-[5px]'
              >Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}