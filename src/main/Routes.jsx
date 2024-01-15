import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/";
import UserCrud from "../components/Users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UserCrud />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;