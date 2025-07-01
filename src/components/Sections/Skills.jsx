import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I have strong expertise in full-stack development with React.js, React Native, Expo, Node.js, Express and MongoDB. I am experienced in building web and mobile apps, deploying projects on VPS and handling CI/CD pipelines. My skills extend to WordPress (Elementor), Firebase, MySQL, Docker, Python and digital marketing. I also have experience with eCommerce dashboards and social media integrations.",
  progressData: [
    {
      id: 1,
      name: "React",
      percentage: 85,
    },
    {
      id: 2,
      name: "React Native",
      percentage: 70,
    },
    {
      id: 3,
      name: "Node / Express",
      percentage: 65,
    },
    {
      id: 4,
      name: "Firebase / Mongodb / MySQL",
      percentage: 50,
    },
    {
      id: 5,
      name: "API Integrations",
      percentage: 75,
    },
    {
      id: 6,
      name: "Wordpress",
      percentage: 60,
    },
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
