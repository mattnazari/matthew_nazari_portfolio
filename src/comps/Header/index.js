import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const Header = () => {
  const [showprojects, setshowprojects] = React.useState(null);

  const handleClick = event => {
    setshowprojects(event.currentTarget);
  };

  const handleClose = () => {
    setshowprojects(null);
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#191919",
    fontFamily: "orkney-bold"
  };

  const linkStyleWhite = {
    textDecoration: "none",
    color: "#efefef",
    fontFamily: "orkney-bold"
  };

  return (
    <div className="headerContainer">
      <Link to="/">
        <div className="headerLogo"></div>
      </Link>
      <ul className="navItemsContainer">
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{
              color: "#efefef",
              fontFamily: "orkney-bold",
              fontSize: "16px"
            }}
          >
            Projects
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={showprojects}
            keepMounted
            open={Boolean(showprojects)}
            onClose={handleClose}
          >
            <Link to="/Washare" style={linkStyle}>
              <MenuItem>Washare</MenuItem>
            </Link>
            <Link to="/Fitly" style={linkStyle}>
              <MenuItem>Fitly</MenuItem>
            </Link>
            <Link to="/Quikpix" style={linkStyle}>
              <MenuItem>QuikPix</MenuItem>
            </Link>
            <Link to="/Calculator" style={linkStyle}>
              <MenuItem>Calculator</MenuItem>
            </Link>
            <Link to="/Squeaker" style={linkStyle}>
              <MenuItem>Squeaker</MenuItem>
            </Link>
            <Link to="/PortfolioWebsite" style={linkStyle}>
              <MenuItem>Portfolio Website</MenuItem>
            </Link>
          </Menu>
        </div>
        <Link to="/About" style={linkStyleWhite}>
          <li className="navItems navAbout">ABOUT</li>
        </Link>
        <li className="navItems navAbout" style={linkStyleWhite}>
          <a
            style={linkStyleWhite}
            href="http://www.matthewnazari.ca/Matthew_Nazari_Resume.pdf"
            target="_blank"
          >
            RESUME
          </a>
        </li>
        <Link to="/Contact" style={linkStyleWhite}>
          <li className="navItems navContact">CONTACT</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
