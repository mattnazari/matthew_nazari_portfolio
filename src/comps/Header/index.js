import React from "react";

const Header = () => {
  return (
    <div className="headerFixed">
      <div className="headerContainer">
        <div className="headerLogo"></div>
        <ul className="navItemsContainer">
          <li className="navItems navProjects">Projects</li>
          <li className="navItems navAbout">About</li>
          <li className="navItems navSkills">Skills</li>
          <li className="navItems navContact">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
