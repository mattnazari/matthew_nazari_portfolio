import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Scrollbars } from "react-custom-scrollbars";

const Washare = () => {
  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div>
        <Header />
        <section className="summary">
          <div className="summaryCont">
            <h1 className="sumTitle projectsSumTitle">Washare</h1>
            <div className="summaryImg washareSumImg"></div>
            <h2 className="sumDate">Sept 2019 - Dec 2019</h2>
            <p className="sumDesc">
              Washare is a washer and dryer booking system for people living in
              apartments and dormitories in Vancouver. This app was developed
              with React-Native in a group of two designers and two developers.
              Washare provides convenience, easy payment, and efficiency when it
              comes to using shared laundry rooms.
            </p>
            <div className="sumLinksCont">
              <a
                className="sumLinks"
                href="https://github.com/mattnazari/WaShare"
                target="_blank"
              >
                Washare Github
              </a>
              <a
                className="sumLinks"
                href="https://micahmones.ca/washare/"
                target="_blank"
              >
                Team Website
              </a>
            </div>
          </div>
        </section>
        <section className="learningOutcomes"></section>
        <section className="screenshots">
          <div className="projectimgs washareimg1"></div>
          <div className="projectimgs washareimg2"></div>
          <div className="projectimgs washareimg3"></div>
        </section>
        <Footer />
      </div>
    </Scrollbars>
  );
};

export default Washare;
