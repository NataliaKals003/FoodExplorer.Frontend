import { Routes, Route } from "react-router-dom";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { ManageDish } from "../pages/ManageDish";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/manageDish/:id" element={<ManageDish />} />
        </Routes>
    )
}