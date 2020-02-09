import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contactCont">
        <div className="projectTitleCont">
          <div className="underlineCont">
            <div className="projectsTitle">Contact Me</div>
            <div className="blackunderline"></div>
          </div>
        </div>
        <div className="contactIconsCont">
          <div className="circleIcons">
            <div className="contactIconsCont">
              <a
                href="https://github.com/mattnazari"
                target="_blank"
                className="contactAnch githubAnch"
              >
                <div className="contactIcons contactGithub"></div>
                <p className="contactIconsText">
                  https://github.com/mattnazari
                </p>
              </a>
            </div>
            <div className="contactIconsCont">
              <a href="tel:604-562-3324" className="contactAnch phoneAnch">
                <div className="contactIcons contactPhone"></div>
                <p className="contactIconsText">604-562-3324</p>
              </a>
            </div>
          </div>
          <div className="squareIcons">
            <div className="contactIconsCont">
              <a
                href="mailto:matthewnaz8@gmail.com"
                target="_blank"
                className="contactAnch emailAnch"
              >
                <div className="contactIcons contactEmail"></div>
                <p className="contactIconsText">matthewnaz8@gmail.com</p>
              </a>
            </div>
            <div className="contactIconsCont">
              <a
                href="https://www.linkedin.com/in/matthew-nazari/"
                target="_blank"
                className="contactAnch linkedinAnch"
              >
                <div className="contactIcons contactLinkedin"></div>
                <p className="contactIconsText">
                  https://www.linkedin.com/in/matthew-nazari/
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
