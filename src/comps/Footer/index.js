import React from "react";

const Footer = () => {
  return (
    <div className="footerPosition">
      <div className="footerContainer">
        <div className="footerColumn">
          {/****************   Top Footer Section   ****************/}
          <div className="contactPosition">
            <div className="contactContainer">
              <h1 className="contact">Contact</h1>
              <div className="underline"></div>
            </div>
          </div>
          {/****************   Bottom Footer Section   ****************/}
          <div className="footerItems">
            <div className="circleIconsCont">
              <div className="githubCont iconsCont">
                <div className="githubIcon icons"></div>
                <a
                  href="https://github.com/mattnazari"
                  target="_blank"
                  className="iconText"
                >
                  github.com/mattnazari
                </a>
              </div>
              <div className="phoneCont iconsCont">
                <div className="phoneIcon icons"></div>
                <a href="tel:604-562-3324" className="iconText">
                  604-562-3324
                </a>
              </div>
            </div>
            <div className="squareIconsCont">
              <div className="emailCont iconsCont">
                <div className="emailIcon icons"></div>
                <a href="mailto:matthewnaz8@gmail.com" className="iconText">
                  matthewnaz8@gmail.com
                </a>
              </div>
              <div className="linkedinCont iconsCont">
                <div className="linkedinIcon icons"></div>
                <a
                  href="https://www.linkedin.com/in/matthew-nazari/"
                  className="iconText"
                  target="_blank"
                >
                  www.linkedin.com/in/matthew-nazari
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
