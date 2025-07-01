import React from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaLayerGroup,
  FaWordpress,
  FaSyncAlt,
  FaServer,
} from "react-icons/fa";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaGlobe size={25} />, // Represents web development
  },
  {
    id: 2,
    name: "App Development",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaMobileAlt size={25} />, // Represents mobile apps
  },
  {
    id: 6,
    name: "MERN Stack",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaLayerGroup size={25} />, // Represents full-stack development
  },
  {
    id: 3,
    name: "WordPress",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaWordpress size={25} />, // WordPress-specific icon
  },
  {
    id: 4,
    name: "CI/CD Pipelines",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaSyncAlt size={25} />, // Represents automation and pipelines
  },
  {
    id: 5,
    name: "Server Configurations",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: <FaServer size={25} />, // Represents server and cloud management
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
