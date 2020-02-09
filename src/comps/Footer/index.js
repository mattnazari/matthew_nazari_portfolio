import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contactPosition">
        <div className="contactContainer">
          <h1 className="contact">Contact</h1>
          <div className="underline"></div>
        </div>
      </div>
      <div className="githubCont iconsCont">
        <a href="https://github.com/mattnazari" target="_blank">
          <div className="githubIcon icons"></div>
        </a>
      </div>
      <div className="phoneCont iconsCont">
        <a href="tel:604-562-3324" className="iconText">
          <div className="phoneIcon icons"></div>
        </a>
      </div>

      <div className="emailCont iconsCont">
        <a href="mailto:matthewnaz8@gmail.com" className="iconText">
          <div className="emailIcon icons"></div>
        </a>
      </div>
      <div className="linkedinCont iconsCont">
        <a
          href="https://www.linkedin.com/in/matthew-nazari/"
          className="iconText"
          target="_blank"
        >
          <div className="linkedinIcon icons"></div>
        </a>
      </div>
      <h2 className="copyright">©️ 2020 | Matthew Nazari</h2>
    </div>
  );
};

export default Footer;
