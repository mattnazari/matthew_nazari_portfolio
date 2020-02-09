import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div className="aboutWrapper">
        <div className="underlineCont">
          <div className="projectsTitle">About Me</div>
          <div className="blackunderline"></div>
        </div>
        <div className="aboutRow">
          <div className="aboutImg"></div>
          <p className="aboutText">
            I'm a Front-End developer with a passion for coding that started at
            British Columbia institute of Technology.
          </p>
        </div>
        <div className="underlineCont">
          <div className="projectsTitle skills">Skills</div>
          <div className="blackunderline"></div>
        </div>
        <p className="skillsDesc">
          At my time at BCIT, I developed important technical skills and soft
          skills. The variety of courses have given knowledge and experience in
          digital marketing, digital design, project management, business
          communications, and web & mobile development. Due to the 8-10 courses
          each semester, I have improved on my time management and have complied
          with project schedules on a consistant basis. <br />
          <br />
          <br />
          At BCIT I learned how to use HTML, CSS, JavaScripts, React,
          React-Native, SCSS, Node, PHP, and MySQL. My goal is to become a
          mobile developer that can create reusable components.
        </p>
        <div className="skillsImgsCont">
          <div className="skillImg1 skillImgs"></div>
          <div className="skillImg2 skillImgs"></div>
          <div className="skillImg3 skillImgs"></div>
          <div className="skillImg4 skillImgs"></div>
          <div className="skillImg5 skillImgs"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
