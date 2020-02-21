import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Scrollbars } from "react-custom-scrollbars";

const Calculator = () => {
  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div>
        <Header />
        <section className="summary">
          <div className="summaryCont">
            <h1 className="sumTitle projectsSumTitle">Calculator</h1>
            <div className="summaryImg calcSumImg"></div>
            <h2 className="sumDate">Jan 2020</h2>
            <p className="sumDesc">
              A simple calculator website I creator for Web Development class. A
              nice revisit to vanilla HTML, CSS, and JavaScript that helped me
              review coding fundamentals.
            </p>
            <div className="sumLinksCont">
              <a
                className="sumLinks"
                href="https://github.com/mattnazari/Calculator"
                target="_blank"
              >
                Calculator Github
              </a>
              <a
                className="sumLinks"
                href="http://www.matthewnazari.ca/calculator/"
                target="_blank"
              >
                Live Website
              </a>
            </div>
          </div>
        </section>
        <section className="learningOutcomes"></section>
        <section className="calcScreenshots">
          <div className="projectimgs calcimg1"></div>
          <div className="projectimgs calcimg2"></div>
        </section>
        <Footer />
      </div>
    </Scrollbars>
  );
};

export default Calculator;
