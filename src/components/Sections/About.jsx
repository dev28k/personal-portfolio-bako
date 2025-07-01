import React from "react";
import { Link as ScrollLink } from "react-scroll";

const aboutData = {
  cvpath: "media/resume.pdf",
  image: "images/logo2.png",
  name: "Faiz Muhammad Khan",
  location: "Rawalpindi, Pakistan",
  birthday: "30 January, 1998",
  email: "faizkhan.dev@gmail.com",
  aboutMe:
    "I’m Faiz, a skilled web developer based in Rawalpindi, Pakistan. With extensive experience in website and app design & development, I specialize in creating high-quality digital solutions. I have strong expertise in WordPress, React, Vite, React Native development, managing VPS setups and CI/CD pipelines.",
};

function About() {
  return (
    <div className="row">
      {/* <div className="col-md-3">
        <img
          src={aboutData.image}
          alt={aboutData.name}
          style={{ objectFit: "contain", width: 150, height: 150 }}
        />
      </div> */}
      <div className="col-md-12">
        <h3 className="mt-4 mt-md-0 mb-4">Hello,</h3>
        <p className="mb-0">{aboutData.aboutMe}</p>
        <div className="row my-4">
          <div className="col-md-6">
            <p className="mb-2">
              Name: <span className="text-dark">{aboutData.name}</span>
            </p>
            <p className="mb-0">
              Birthday: <span className="text-dark">{aboutData.birthday}</span>
            </p>
          </div>
          <div className="col-md-6 mt-2 mt-md-0 mt-sm-2">
            <p className="mb-2">
              Location: <span className="text-dark">{aboutData.location}</span>
            </p>
            <p className="mb-0">
              Email: <span className="text-dark">{aboutData.email}</span>
            </p>
          </div>
        </div>
        <a href={aboutData.cvpath} className="btn btn-default mr-3">
          <i className="icon-cloud-download"></i>Download CV
        </a>
        <ScrollLink
          activeClass="active"
          to="section-contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={50}
          className="btn btn-alt mt-2 mt-md-0 mt-xs-2"
        >
          <i className="icon-envelope"></i>Hire me
        </ScrollLink>
      </div>
    </div>
  );
}

export default About;
