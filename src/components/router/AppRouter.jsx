import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "../../pages/Home"
// import SigninPage from "../../pages/Signin"
import SignupPage  from "../../pages/Signup"

export const AppRouter = () => {
    return (
        <BrowserRouter> 
            <Routes>
                {/* <Route path="/auth/signin" element={<SigninPage />} /> */}
                <Route path="/auth/signup" element={<SignupPage />} />
                <Route path="/home" element={<Homepage />} />
            </Routes>
        </BrowserRouter>

    )
}