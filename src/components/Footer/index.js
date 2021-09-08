import React from "react";
import { Navbar } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="mt-auto">
      <Navbar bg="secondary" className="p-2">
        <Navbar.Text className="text-center w-100 text-white-50">
          Made with <i className="fas fa-heart"></i> in bedroom
        </Navbar.Text>
      </Navbar>
    </div>
  );
};

export default FooterComp;
