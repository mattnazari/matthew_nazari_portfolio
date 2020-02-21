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

  const [slide, setSlide] = useState(false);
  var cn = "slideMenu";
  if (slide) {
    cn = "slideMenu slideMenuActive";
  }

  return (
    <div className="headerContainer">
      <div className="logoCont">
        <Link to="/">
          <div className="headerLogo"></div>
        </Link>
      </div>
      {/*************************************     Hamburger Menu */}
      <button
        className="hamburger"
        onClick={() => {
          setSlide(!slide);
        }}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <div className={cn}>
        <button
          className="x"
          onClick={() => {
            setSlide(!slide);
          }}
        >
          X
        </button>
        <div className="innerhamMenu">
          <ul className="hamItems">
            <Link style={linkStyleWhite} to="/Washare">
              <li>WASHARE</li>
            </Link>
            <Link style={linkStyleWhite} to="/Fitly">
              <li>FITLY</li>
            </Link>
            <Link style={linkStyleWhite} to="/Quikpix">
              <li>QUIKPIX</li>
            </Link>
            <Link style={linkStyleWhite} to="/Calculator">
              <li>CALCULATOR</li>
            </Link>
            <Link style={linkStyleWhite} to="/Squeaker">
              <li>SQUEAKER</li>
            </Link>
            <Link style={linkStyleWhite} to="/PortfolioWebsite">
              <li>PORTFOLIO WEBSITE</li>
            </Link>
            <Link style={linkStyleWhite} to="/About">
              <li>ABOUT</li>
            </Link>
            <Link style={linkStyleWhite}>
              <li>
                <a
                  style={linkStyleWhite}
                  href="http://www.matthewnazari.ca/Resume.pdf"
                  target="_blank"
                >
                  RESUME
                </a>
              </li>
            </Link>
            <Link style={linkStyleWhite} to="/Contact">
              <li>CONTACT</li>
            </Link>
          </ul>
        </div>
      </div>
      {/*************************************     Desktop Nav Menu */}
      <ul className="navItemsContainer">
        <div className="projectsCont">
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
        <div className="navCont">
          <Link to="/About" style={linkStyleWhite}>
            <li className="navItems navAbout">ABOUT</li>
          </Link>
        </div>
        <div className="navCont">
          <li className="navItems navAbout" style={linkStyleWhite}>
            <a
              style={linkStyleWhite}
              href="http://www.matthewnazari.ca/Resume.pdf"
              target="_blank"
            >
              RESUME
            </a>
          </li>
        </div>
        <div className="navCont">
          <Link to="/Contact" style={linkStyleWhite}>
            <li className="navItems navContact">CONTACT</li>
          </Link>
        </div>
      </ul>
    </div>
  );
};

Header.defaultProps = {};

export default Header;
