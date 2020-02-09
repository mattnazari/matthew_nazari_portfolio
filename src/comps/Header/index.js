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
    fontFamily: "orkney-regular"
  };

  const linkStyleWhite = {
    textDecoration: "none",
    color: "#efefef",
    fontFamily: "orkney-regular"
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
            <MenuItem>Fitly</MenuItem>
            <MenuItem>QuikPix</MenuItem>
            <MenuItem>Calculator</MenuItem>
            <MenuItem>Squeaker</MenuItem>
            <MenuItem>Portfolio Website</MenuItem>
          </Menu>
        </div>
        <Link to="/About" style={linkStyleWhite}>
          <li className="navItems navAbout">ABOUT</li>
        </Link>
        <li className="navItems navAbout">RESUME</li>
        <li className="navItems navContact">CONTACT</li>
      </ul>
    </div>
  );
};

export default Header;
