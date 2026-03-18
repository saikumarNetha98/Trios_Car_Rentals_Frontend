import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/home/Home.tsx";
import Login from "../pages/login/Login.tsx";
import Signup from "../pages/signup/Signup.tsx";
import Cars from "../pages/cars/Cars.tsx";
import Dashboard from "../pages/dashboard/Dashboard.tsx";
import Navbar from "../components/common/Navbar.tsx";
import Footer from "../components/common/Footer.tsx";



function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });
  return (<>
    {/* <Navbar /> */}
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    <Routes>

      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={
          <Login setIsLoggedIn={setIsLoggedIn} />
        } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    <Footer />
  </>
  );
}

export default AppRoutes;