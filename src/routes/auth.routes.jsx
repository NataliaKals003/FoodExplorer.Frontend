import { Routes, Route } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { authRoutes } from "./routes";

export function AuthRoutes() {
    return (
        <Routes>
            <Route path={authRoutes.signIn} element={<SignIn />} />
            <Route path={authRoutes.signUp} element={<SignUp />} />
        </Routes>
    );
}