import React from "react";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLogo"></div>
      <div className="navItemsContainer">
        <div className="navItems navProjects">Projects</div>
        <div className="navItems navAbout">About</div>
        <div className="navItems navSkills">Skills</div>
        <div className="navItems navContact">Contact</div>
      </div>
    </div>
  );
};

export default Header;
