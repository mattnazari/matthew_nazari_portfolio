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
    <div>
      <Header />
      <section className="topHomeSection">
        <h1>
          Hey, I'm Matthew Nazari
          <br />a Front-End Developer.
        </h1>
        <div className="homeAboutButtCont">
          <Link to="/About">
            <button className="homeAboutButton">About Me</button>
          </Link>
        </div>
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
                cardTitle="Washare"
                cardDescription="
              A washer and dryer booking mobile app created in a team made up of two designers and two 
              developers. The final project of BCIT's Digital Design and Development program."
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Card
              cardTitle="Fitly"
              cardDescription="
              A workout schedule app created in a team of two. 
              Researched, designed, and developed the entire project from start to finish."
            />
          </div>
          <div className="cardSpacing">
            <Card
              cardTitle="QuikPix"
              cardDescription="
            A Photo resizer app meant to resize photos to fit the resolutions of different
            social media platforms. Currently a work in progress."
            />
          </div>
          <div className="cardSpacing">
            <Card
              cardTitle="Calculator"
              cardDescription="
            A simple calculator made in web development class using HTML, CSS, and JavaScript"
            />
          </div>
          <div className="cardSpacing">
            <Card
              cardTitle="Squeaker"
              cardDescription="
            A web development assignment that helped me learn and practice my PHP and MySQL"
            />
          </div>
          <div className="cardSpacing">
            <Card
              cardTitle="Portfolio Website"
              cardDescription="
            My portfolio website that I developed and designed using React and SCSS.
            "
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
