import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/img/imagewithbasebath";

const NavLinks = () => {
  const [menu, setMenu] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideDoctor, setSideDoctor] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  // Rest of your code that uses pathnames

  let pathnames = window.location.pathname;

  const url = pathnames.split("/").slice(0, -1).join("/");
  console.log(pathnames)
  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };
  const toggleSidebarDoctor = (value) => {
    setSideDoctor(value);
  };
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  return (
    <>
      <ul className="main-nav">
        {/* <li className="has-submenu">
          <Link to="#">Pharmacy <i className="fas fa-chevron-down" /></Link>
          <ul className="submenu">
            <li><Link to="/Pharmacy/Pharmacy-index">Pharmacy</Link></li>
            <li><Link to="/Pharmacy/Pharmacy-details">Pharmacy Details</Link></li>
            <li><Link to="/Pharmacy/pharmacy-search">Pharmacy Search</Link></li>
            <li><Link to="/Pharmacy/product-all">Product</Link></li>
            <li><Link to="/Pharmacy/product-description">Product Description</Link></li>
            <li><Link to="/Pharmacy/cart">Cart</Link></li>
            <li><Link to="/Pharmacy/product-checkout">Product Checkout</Link></li>
            <li><Link to="/Pharmacy/payment-success">Payment Success</Link></li>
            <li><Link to="/Pharmacy/pharmacy-register">Pharmacy Register</Link></li>
          </ul>
        </li> */}
        
        <li><Link to="#">Services</Link></li>
        <li><Link to="#">Courses & Trainings</Link></li>
        <li><Link to="#">Certifications</Link></li>
        <li><Link to="/blog/blog-list">Blog</Link></li>
        <li><Link to="/pages/contactus">Contact Us</Link></li>
        <li><Link to="/pages/aboutus">About Us</Link></li>
        <li className="login-link">
          <Link to="/login">Login / Signup</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
