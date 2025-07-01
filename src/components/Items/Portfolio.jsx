import React from "react";

function Portfolio({ portfolio: { id, name, category, image, iframe, slug } }) {
  return (
    <div>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <a href={iframe} className="plus-icon">
          +
        </a>
        <div className="thumb">
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: 180,
              objectFit: "fit",
            }}
          />
          <div className="mask"></div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
