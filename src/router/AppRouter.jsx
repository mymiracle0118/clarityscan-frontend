import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "@/pages/Home";
import SigninPage from "@/pages/Signin";
import SignupPage from "@/pages/Signup";
import ResultPage from "@/pages/Result";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/audit/result" element={<ResultPage />} />
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};
