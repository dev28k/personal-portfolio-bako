import React from "react";
import Experience from "../Items/Experience";
import SectionHeading from "../Items/SectionHeading";

const experiencesData = [
  {
    id: 1,
    year: "2024 - Present",
    degree: "Digital Stay Active",
    content: ["Wordpress", "React Web Developments", "Deployments"],
    address: "Rawalpindi",
  },
  {
    id: 2,
    year: "2022 - 2024",
    degree: "Digital Pakistan Lab",
    content: [
      "Frontend Development",
      "Backend Developement",
      "Android App Development",
      "Deployments",
      "Auto Deployments",
    ],
    address: "CEME NUST, Rawalpindi",
  },
  {
    id: 3,
    year: "2021 - 2022",
    degree: "Frontend Developer",
    content: ["Frontend Developer", "Reactjs Developer"],
    address: "TradeApe, Singapore",
  },
];

const educationData = [
  {
    id: 1,
    year: "2016 - 2020",
    degree: "Bachelors of Science in Computer Science",
    content:
      "Graduated with a BSCS, specializing in software development, algorithms, and data structures.",
    address: "PMAS Arid Agriculture University, Rawalpindi",
  },
];

function Experiences() {
  return (
    <>
      <div className="timeline">
        {experiencesData.map((experience) => (
          <Experience experience={experience} key={experience.id} />
        ))}
        <span className="timeline-line"></span>
      </div>

      <div className="mt-5"></div>
      <SectionHeading title={"Education"} />
      <div className="timeline">
        {educationData.map((experience) => (
          <Experience experience={experience} key={experience.id} />
        ))}
        <span className="timeline-line"></span>
      </div>
    </>
  );
}

export default Experiences;
