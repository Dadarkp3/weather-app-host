import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "shared_ui_remote/Navbar";
import Footer from "shared_ui_remote/Footer";

const DefaultLayout = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(228, 232, 235, 1) 0%, rgba(182, 245, 250, 1) 100%)",
      }}
      className="flex flex-col min-h-screen"
    >
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
