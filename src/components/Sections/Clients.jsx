import React from "react";
import Slider from "react-slick";

const clientsData = [
  {
    id: 1,
    image: "images/clients/healthpro.png",
  },
  {
    id: 2,
    image: "images/clients/petpuffer.png",
  },
  {
    id: 3,
    image: "images/clients/tradinglord.png",
  },
  {
    id: 4,
    image: "images/clients/dsa-logo-white.svg",
  },
  // {
  //   id: 5,
  //   image: "images/clients/5thgen.png",
  // },
  {
    id: 5,
    image: "images/clients/quickmedalert.png",
  },
  {
    id: 6,
    image: "images/clients/shopikings.png",
  },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="shadow-dark background-blue color-white padding-50">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <img
                  src={client.image}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  alt="client-name"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
