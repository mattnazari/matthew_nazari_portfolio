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
          Hi, my name is Matthew Nazari
          <br />
          I'm a Web & Mobile Developer.
        </h1>
        <div className="homeAboutButtCont">
          <button className="homeAboutButton">About Me</button>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              standard dummy text ever since the 1500s, when an unknown printer took a galley of"
              />
            </Link>
          </div>
          <div className="cardSpacing">
            <Card cardTitle="Fitly" />
          </div>
          <div className="cardSpacing">
            <Card cardTitle="QuikPix" />
          </div>
          <div className="cardSpacing">
            <Card cardTitle="Calculator" />
          </div>
          <div className="cardSpacing">
            <Card cardTitle="Squeaker" />
          </div>
          <div className="cardSpacing">
            <Card cardTitle="Portfolio Website" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
