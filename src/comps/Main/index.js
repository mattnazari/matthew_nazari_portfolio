import React, { useState } from "react";
import Card from "../Card";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Main = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "#191919",
    fontFamily: "orkney-regular"
  };

  return (
    <div className="mainContainer">
      <Header />
      <section className="topHomeSection">
        <h1>
          Hey, I'm Matthew Nazari
          <br />a Front-End Developer.
        </h1>
      </section>

      <section className="bottomHomeSection">
        <div className="projectTitleCont">
          <div className="underlineCont">
            <div className="projectsTitle">Projects</div>
            <div className="blackunderline"></div>
          </div>
        </div>
        <div className="homeCards">
          <div className="cardSpacing">
            <Link to="/Washare" style={linkStyle}>
              <Card
                cardImage="url('http://www.matthewnazari.ca/WashareLogo.svg')"
                cardTitle="Washare"
                cardDescription="
              A washer and dryer booking mobile app created in a team made up of two designers and two 
              developers. The final project of BCIT's Digital Design and Development program."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Link to="/Fitly" style={linkStyle}>
              <Card
                cardImage="url('http://www.matthewnazari.ca/fitlyLogo.svg')"
                cardTitle="Fitly"
                cardDescription="
              A workout schedule app created in a team of two. 
              Researched, designed, and developed the entire project from start to finish."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Link to="/Quikpix" style={linkStyle}>
              <Card
                cardTitle="QuikPix"
                cardImage="url('http://www.matthewnazari.ca/quikpix.svg')"
                cardDescription="
            A Photo resizer app meant to resize photos to fit the resolutions of different
            social media platforms. Currently a work in progress."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Link to="/Calculator" style={linkStyle}>
              <Card
                cardImage="url('http://www.matthewnazari.ca/calc.svg')"
                cardTitle="Calculator"
                cardDescription="
            A simple calculator made in web development class using HTML, CSS, and JavaScript."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Link to="/Squeaker" style={linkStyle}>
              <Card
                cardImage="url('http://www.matthewnazari.ca/squeak.svg')"
                cardTitle="Squeaker"
                cardDescription="
            A web development assignment that helped me learn and practice my PHP and MySQL."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Link to="/PortfolioWebsite" style={linkStyle}>
              <Card
                cardImage="url('http://www.matthewnazari.ca/portfolio.svg')"
                cardTitle="Portfolio Website"
                cardDescription="
            My portfolio website that I developed and designed using React and SCSS.
            "
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
