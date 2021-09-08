import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeSwitcher from "react-theme-switcher";

const HeaderComp = () => {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        className="text-center text-white border-0">
        <h4 className="text-center w-100">
          <span className="text-danger font-weight-bolder">Q</span>
          <span className="font-weight-bolder">R</span> Code
          <span className="text-danger font-weight-bolder">.</span>
        </h4>
      </Navbar>
      <Navbar className="p-0 mt-2">
        <div className="w-100">
          <Nav.Item className="d-flex">
            <div className="m-auto d-flex">
              <Link to="/" title="Convert" className="py-0 nav-link ">
                Convert
              </Link>
              <Link to="/scan" title="Scanner" className="py-0 nav-link ">
                Scanner
              </Link>
            </div>
          </Nav.Item>
        </div>
        <div className="mx-3 d-flex">
          <i className="fas fa-sun m-auto"></i>
          <ThemeSwitcher
            cssSelector="body"
            switcherColor="#2a9fd6"
            darkColor="#282c34"
            darkTextColor="#ffffff"
            lightColor="#ffffff"
            lightTextColor="#272b33"
          />
          <i className="fas fa-moon m-auto pl-2"></i>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderComp;
