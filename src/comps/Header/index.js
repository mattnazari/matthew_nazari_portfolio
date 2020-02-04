import React from "react";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logo"></div>
      <div className="navItemsContainer">
        <div className="navItems projects">Projects</div>
        <div className="navItems about">About</div>
        <div className="navItems skills">Skills</div>
        <div className="navItems contact">Contact</div>
      </div>
    </div>
  );
};

export default Header;
