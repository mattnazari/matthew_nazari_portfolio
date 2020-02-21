import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Scrollbars } from "react-custom-scrollbars";

const Quikpix = () => {
  return (
    <Scrollbars style={{ height: "100vh" }}>
      <div>
        <Header />
        <section className="summary">
          <div className="summaryCont">
            <h1 className="sumTitle projectsSumTitle">QuikPix</h1>
            <div className="summaryImg quikpixSumImg"></div>
            <h2 className="sumDate">Jan 2020 - Current</h2>
            <p className="sumDesc">
              QuikPix is a photo resolution adjusting app that changes your
              photos resolutions to fit the needs of whatever social media
              platform you would like to upload to. I am currently working on
              this project with 2 designers and 1 other developer for our
              Advance Dynamic Content Design class.
            </p>
            <div className="sumLinksCont">
              <a
                className="sumLinks"
                href="https://github.com/mattnazari/quikpix"
                target="_blank"
              >
                QuikPix Github
              </a>
              <a
                className="sumLinks"
                href="https://www.figma.com/proto/Nzys1OhO1AETE0ABARC7rE/QuikPix-Prototype?node-id=20%3A206&viewport=113%2C240%2C0.03588312491774559&scaling=min-zoom&fbclid=IwAR0LbeXGWsIYFQIsixqZzSlfgpCu4LIVL-fVNMQ04Jon5nu3ojg4u2Ie9m8"
                target="_blank"
              >
                QuikPix Prototype
              </a>
            </div>
          </div>
        </section>
        <section className="learningOutcomes"></section>
        <section className="screenshots">
          <div className="projectimgs quikpiximg1"></div>
          <div className="projectimgs quikpiximg2"></div>
          <div className="projectimgs quikpiximg3"></div>
          <div className="projectimgs quikpiximg4"></div>
          <div className="projectimgs quikpiximg5"></div>
          <div className="projectimgs quikpiximg6"></div>
        </section>
        <Footer />
      </div>
    </Scrollbars>
  );
};

export default Quikpix;
