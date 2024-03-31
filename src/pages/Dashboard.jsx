import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export const Dashboard = () => {
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />

      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};
