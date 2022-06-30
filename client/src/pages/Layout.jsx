import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grow">
        <div className="max-w-3xl mx-auto mt-5 ">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
