import React from "react";
import Slider from "react-slick";
import Testimonial from "../Items/Testimonial";

const testimonialsData = [
  {
    id: 1,
    content:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!",
    authorImage: "images/customer-1.png",
    authorName: "SAIM",
    authorStatus: "CEO - Petpuffer",
  },
  {
    id: 2,
    content:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!",
    authorImage: "images/customer-2.png",
    authorName: "Dr. Mc Jane",
    authorStatus: "Health Pro Supply",
  },
  {
    id: 3,
    content:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck!",
    authorImage: "images/customer-2.png",
    authorName: "SYED RAFAY",
    authorStatus: "CEO - Digital Stay Active",
  },
];

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <Slider {...settings} className="padding-slider">
        {testimonialsData.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
