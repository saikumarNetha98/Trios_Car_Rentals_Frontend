import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home.tsx";
import Login from "../pages/login/Login.tsx";
import Signup from "../pages/signup/Signup.tsx";
import Cars from "../pages/cars/Cars.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;