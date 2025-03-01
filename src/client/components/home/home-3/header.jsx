import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/img/imagewithbasebath";

const Home3Header = () => {
  const [headerClass, setHeaderClass] = useState(
    "header header-trans header-three header-eight"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setHeaderClass("header header-trans header-three header-eight pharmacy-header");
      } else {
        setHeaderClass("header header-trans header-three header-eight");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Header */}
      <header className={headerClass}>
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/home-3" className="navbar-brand logo">
                <ImageWithBasePath src="assets/img/logo.png" className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/home-3" className="menu-logo">
                  <ImageWithBasePath src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                </Link>
                <Link id="menu_close" className="menu-close" to="#">
                  <i className="fas fa-times" />
                </Link>
              </div>
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
                <li><Link to="/pages/aboutus">About Us</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Courses & Trainings</Link></li>
                <li><Link to="#">Certifications</Link></li>
                <li><Link to="/pages/contactus">Contact Us</Link></li>
                <li><Link to="/blog/blog-list">Blog</Link></li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="contact-item"><i className="fa-solid fa-phone" /><span>Contact :</span>+1 315 369 5943</li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/login"><ImageWithBasePath src="assets/img/icons/user-circle.svg" alt="img" />Login / Sign up </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default Home3Header;
