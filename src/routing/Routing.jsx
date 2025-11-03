import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../LoginPage/Login";
import Signup from "../LoginPage/SignUp";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Routing;
