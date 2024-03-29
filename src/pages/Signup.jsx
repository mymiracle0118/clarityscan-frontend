import { useState } from "react"
import { Link } from "react-router-dom"
import {Navigate} from "react-router"

import '@/assets/sass/globals.scss'

import { useSignup } from "@/hooks/auth/useSignup"


export default function Singup() {

  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();
  // const navigate = Navigate();

  const onSubmit = () => {
    if (!firstname || !email || !password || !lastname) {
      alert("Please enter information");
    } else {
      signup(firstname, lastname, email, password)
        .then((res) => {
          // navigate("/auth/signin");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="signup flex w-screen h-screen">
      <div className="w-1/2 h-screen img-panel">

      </div>
      <div className="w-1/2 h-screen flex flex-wrap place-content-center main-board">
        <div className="text-white max-w-[500px]">
          <div className="text-center text-[48px] font-bold">Sign up for an account</div>
          <div className="text-[18px] text-center">Send, spend and save smarter</div>
          <form
            className="mt-3"
            onSubmit={e => e.preventDefault()}
            noValidate
          >
            <div className="flex gap-x-2">
              <input
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="common-input w-1/2 my-4"
                type="text"
              />
              <input
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="common-input w-1/2 my-4"
                type="text"
              />
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              Sign Up
            </button>
            <div className='w-full text-[14px] text-center text-white mt-[70px]'>
              <span>Already have an account?</span>
              <Link
                to="/auth/signin"
                className='cursor-pointer ml-[5px]'
              >Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}