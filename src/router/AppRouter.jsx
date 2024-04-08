import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "@/pages/Home";
import SigninPage from "@/pages/Signin";
import SignupPage from "@/pages/Signup";
import ResultPage from "@/pages/Result";
import AuditHistory from "@/pages/profile/AuditHistory";
import Profile from "@/pages/Profile";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/history" element={<AuditHistory />} />
      </Routes>
    </BrowserRouter>
  );
};
