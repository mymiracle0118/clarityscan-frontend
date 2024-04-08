import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "@/hooks/auth/useSignup";
import { cross } from "@/assets/";
import Navbar from "@/components/layouts/Header/Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function Singup() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});

  const { signup } = useSignup();

  const validateInputs = () => {
    const errors = {};
    if (!firstname) {
      errors.firstname = "First name is required";
    }
    if (!lastname) {
      errors.lastname = "Last name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!newPassword) {
      errors.password = "Password is required";
    }
    if (!confirmPassword) {
      errors.password = "Password is required";
    }
    if (newPassword !== confirmPassword) {
      errors.password = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0 && agreed;
  };

  const onSubmit = () => {
    const isValid = validateInputs();
    if (isValid) {
      signup(firstname, lastname, email, newPassword, confirmPassword)
        .then((res) => {
          // navigate("/signin");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="signup bg-[url('/src/assets/images/auth/bg_welcome.webp')] relative min-h-screen h-full">
      <Navbar />
      <Link to="/" className="absolute right-10 mt-10 sm:mt-0">
        <img src={cross} alt="" className="w-8 xs:w-10" />
      </Link>
      <div className="px-3 py-6 xs:p-6">
        <div className="text-white max-w-[500px] border-2 border-teal-400 rounded-xl p-10 bg-[#04091E] m-auto lg:absolute right-1/4">
          <div className="text-white max-w-[500px]">
            <div className="text-center text-3xl xs:text-4xl font-bold">
              Sign up for an account
            </div>
            <div className="text-[18px] text-center">
              Send, spend and save smarter
            </div>
            <form
              className="mt-3"
              onSubmit={(e) => e.preventDefault()}
              noValidate
            >
              <div className="flex gap-x-2">
                <div className="w-1/2">
                  <input
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                      errors.firstname ? "border-red-500" : ""
                    }`}
                    type="text"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-xs pl-3 w-full">{errors.firstname}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <input
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                      errors.lastname ? "border-red-500" : ""
                    }`}
                    type="text"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs pl-3">{errors.lastname}</p>
                  )}
                </div>
              </div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                  errors.email ? "border-red-500" : ""
                }`}
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs pl-3">{errors.email}</p>
              )}
              <div className="relative">
                <input
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Password"
                  className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  type={showNewPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 text-gray-400"
                >
                  {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </button>
              </div>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs pl-3">{errors.password}</p>
              )}
              <div className="flex gap-x-3 items-center justify-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label
                  htmlFor="checkbox-label"
                  className={`checkbox-label text-xs xs:text-sm ${
                    !agreed ? "cursor-not-allowed" : ""
                  }`}
                >
                  By creating an account, you agree to our Privacy Policy and
                  Electronics Communication Policy.
                </label>
              </div>
              <button
                onClick={onSubmit}
                className={`common-btn w-full my-4 py-[12px] btn-animation ${
                  !agreed ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!agreed}
              >
                Sign Up
              </button>
              <div className="w-full text-[14px] text-center text-gray-400 mt-[40px]">
                <span>Already have an account?</span>
                <Link
                  to="/signin"
                  className="cursor-pointer ml-[5px] text-white underline"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
