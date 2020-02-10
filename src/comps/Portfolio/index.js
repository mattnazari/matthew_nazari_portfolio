import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const PortfolioWebsite = () => {
  return (
    <div>
      <Header />
      <section className="summary">
        <div className="summaryCont">
          <h1 className="sumTitle projectsSumTitle">Portfolio Website</h1>
          <div className="summaryImg portfolioSumImg"></div>
          <h2 className="sumDate">Jan 2020 - Current</h2>
          <p className="sumDesc">
            I created this website using React and SCSS. This is my first time
            using React and SCSS in creating a website.
          </p>
          <div className="portfolioSumLinksCont">
            <a
              className="portfolioSumLinks"
              href="https://github.com/mattnazari/matthew_nazari_portfolio"
              target="_blank"
            >
              Portfolio Github
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;
