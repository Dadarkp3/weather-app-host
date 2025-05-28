import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "shared_ui_remote/Navbar";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DefaultLayout;
