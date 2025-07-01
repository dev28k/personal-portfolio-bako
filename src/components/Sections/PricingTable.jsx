import React from "react";
import Pricebox from "../Items/Pricebox";

const allPricebox = [
  {
    id: 1,
    name: "Basic",
    price: "55",
    icon: "icon-energy",
    content: ["Wordpress Website", "Premium Template", "1 Years of Updates"],
    recommended: false,
  },
  {
    id: 2,
    name: "Professional",
    price: "100",
    icon: "icon-fire",
    content: [
      "Custom Frontend",
      "Optimized Build",
      "1 Years of Updates",
      "White Labeling",
    ],
    recommended: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "300",
    icon: "icon-rocket",
    content: ["MERN Stack Development", "Regular Support", "1 Years of Updates"],
    recommended: false,
  },
];

function PricingTable() {
  return (
    <div className="row">
      {allPricebox.map((pricebox) => (
        <div
          className={
            pricebox.recommended
              ? "col-md-4 px-md-0 my-5 my-md-0"
              : "col-md-4 mt-3"
          }
          key={pricebox.id}
        >
          <Pricebox pricebox={pricebox} />
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
