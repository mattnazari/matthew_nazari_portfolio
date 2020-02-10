import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Squeaker = () => {
  return (
    <div>
      <Header />
      <section className="summary">
        <div className="summaryCont">
          <h1 className="sumTitle projectsSumTitle">Squeaker</h1>
          <div className="summaryImg squeakSumImg"></div>
          <h2 className="sumDate">Oct 2019</h2>
          <p className="sumDesc">
            An assignment I completed for Web Development class. This project
            lets users create posts, delete posts, and like and unlike posts.
            Our instructor provided us with the front-end part of the app as
            well as the script.js. I wrote the php part of the assignment that
            handled POST and GET requests as well as the sql queries.
          </p>
          <div className="sumLinksCont">
            <a
              className="sumLinks"
              href="https://github.com/mattnazari/squeaker"
              target="_blank"
            >
              Squeaker Github
            </a>
          </div>
        </div>
      </section>
      <section className="learningOutcomes"></section>
      <section className="squeakScreenshots">
        <div className="projectimgs squeakimg1"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Squeaker;
