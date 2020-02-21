import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Scrollbars } from "react-custom-scrollbars";

const Fitly = () => {
  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div>
        <Header />
        <section className="summary">
          <div className="summaryCont">
            <h1 className="sumTitle projectsSumTitle">Fitly</h1>
            <div className="summaryImg fitlySumImg"></div>
            <h2 className="sumDate">Jan 2019 - May 2019</h2>
            <p className="sumDesc">
              Fitly is a workout routine creation website based on your
              experience in working out and what body parts you would like to
              work. The research, design, and development was done by Micah
              Mones and myself for our Design 1 class. The objective of the
              project was to create a website that passes information to the
              next page based on what you select without any frameworks and
              libraries.
            </p>
            <div className="sumLinksCont">
              <a
                className="sumLinks"
                href="https://github.com/micahmones/fitly"
                target="_blank"
              >
                Fitly Github
              </a>
              <a
                className="sumLinks"
                href="http://www.matthewnazari.ca/fitly/index.html"
                target="_blank"
              >
                Fitly Website
              </a>
            </div>
          </div>
        </section>
        <section className="learningOutcomes"></section>
        <section className="screenshots">
          <div className="projectimgs fitlyimg1"></div>
          <div className="projectimgs fitlyimg2"></div>
          <div className="projectimgs fitlyimg3"></div>
          <div className="projectimgs fitlyimg4"></div>
          <div className="projectimgs fitlyimg5"></div>
          <div className="projectimgs fitlyimg6"></div>
        </section>
        <Footer />
      </div>
    </Scrollbars>
  );
};

export default Fitly;
