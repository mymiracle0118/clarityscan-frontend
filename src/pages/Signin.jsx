import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layouts/Header/Navbar";
import "@/assets/sass/globals.scss";
import { cross } from "@/assets/"; // Import your other assets here
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { authService } from "@/services";
import { useCookies } from "react-cookie";

export default function Singin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [errors, setErrors] = useState({}); // State to track input errors
  const [agreed, setAgreed] = useState(false); // State to track checkbox status
  const [passwordFocused, setPasswordFocused] = useState(false); // State to track password input focus
  const [cookies, setCookie] = useCookies(["user"]);

  // const navigate = Navigate();
  const validateInputs = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for basic email validation
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Regex for password validation (at least 8 characters with letters and numbers)

    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(password)) {
      errors.password =
        "Password must contain at least 8 characters with letters and numbers";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0 && agreed; // Return true if no errors and checkbox is checked
  };

  const onSubmit = async () => {
    const isValid = validateInputs();
    let result;
    if (isValid) {
      // signup(firstname, lastname, email, password)
      //   .then((res) => {
      result = await authService.login(email, password);
      if (result.status) {
        setCookie("user", { status: true, data: "test" });
        navigate("/profile");
      } else {
          setErrors({ email: "", password: "User does not exist or incorrect password" });
        // })
        // .catch((err) => console.log(err));
      }
    }
  };

  return (
    <div className="signup bg-[url('/src/assets/images/auth/bg_welcome.webp')] relative min-h-screen">
      <Navbar />
      <Link to="/" className="absolute right-10 mt-10 sm:mt-0">
        <img src={cross} alt="" className="w-8 xs:w-10" />
      </Link>
      <div className="px-3 py-6 xs:p-6">
        <div className="text-white max-w-[500px] border-2 border-teal-400 rounded-xl p-6 xs:p-10 bg-[#04091E] m-auto lg:absolute right-1/4">
          <div className="text-center text-3xl xs:text-4xl font-bold px-2 ss:px-0">
            Sign in for an account
          </div>
          <div className="text-[18px] text-center">
            Send, spend and save smarter
          </div>
          <form
            className="mt-3"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username or Email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
                placeholder="Password"
                className={`common-input w-full my-4 focus:bg-white focus:text-black focus:caret-black ${
                  errors.password ? "border-red-500" : ""
                } ${passwordFocused ? "bg-white" : ""}`}
                type={showPassword ? "text" : "password"} // Conditionally set type based on showPassword state
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                className="absolute inset-y-0 right-0 flex items-center justify-center mr-2 text-gray-400"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
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
                className="checkbox-label text-xs xs:text-sm"
              >
                By creating an account, you agreeing to our Privacy Policy, and
                Electronics Communication Policy.
              </label>
            </div>
            <button
              onClick={onSubmit}
              className={`common-btn w-full my-4 py-[12px] btn-animation ${
                !agreed ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!agreed} // Disable the button if the checkbox is not checked
            >
              Sign In
            </button>
            <div className="w-full text-[14px] text-center text-gray-400 mt-[40px]">
              <span>Don't have an account yet?</span>
              <Link
                to="/signup"
                className="cursor-pointer ml-[5px] text-white underline"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
