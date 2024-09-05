import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
