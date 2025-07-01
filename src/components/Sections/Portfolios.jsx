import React, { useState, useEffect } from "react";
import Portfolio from "../Items/Portfolio";

const filters = [
  {
    id: 1,
    name: "All Projects",
  },
  {
    id: 2,
    name: "Web",
  },
  {
    id: 3,
    name: "Wordpress",
  },
  {
    id: 4,
    name: "App",
  },
];

const allData = [
  {
    id: 1,
    name: "QuickMedAlert.com",
    category: ["Web"],
    image: "images/portfolio/1.png",
    slug: "creative-art",
    iframe: "https://quickmedalert.com/",
  },
  {
    id: 2,
    name: "HealthProSupply.com",
    category: ["Web"],
    image: "images/portfolio/2.png",
    slug: "apple-usb",
    iframe: "https://healthprosupply.com/",
  },
  {
    id: 3,
    name: "8StarsPrinters.com",
    category: ["Wordpress"],
    image: "images/portfolio/3.png",
    slug: "work-space",
    iframe: "https://8starsprinters.com/",
  },
  {
    id: 4,
    name: "DigitalStayActive.com",
    category: ["Web"],
    image: "images/portfolio/4.png",
    slug: "creative-bulb",
    iframe: "https://digitalstayactive.com/",
  },
  {
    id: 5,
    name: "PetPuffer.com",
    category: ["Web"],
    image: "images/portfolio/5.png",
    slug: "iphone-8",
    iframe: "https://petpuffer.com/",
  },
  {
    id: 6,
    name: "InceptionTechPk.com",
    category: ["Web"],
    image: "images/portfolio/6.webp",
    slug: "minimal-art",
    iframe: "https://inceptiontechpk.com/",
  },
  {
    id: 7,
    name: "NeedWithSpeed.com",
    category: ["Web"],
    image: "images/portfolio/7.png",
    slug: "creative-art",
    iframe: "https://needwithspeed.com/",
  },
  {
    id: 8,
    name: "TradingLord",
    category: ["Wordpress"],
    image: "images/portfolio/8.png",
    slug: "apple-usb",
    iframe: "https://tradinglord.tech/",
  },
  // {
  //   id: 9,
  //   name: "Currency Synculator",
  //   category: ["App"],
  //   image: "images/portfolio/2.jpg",
  //   slug: "apple-usb",
  //   iframe: "",
  // },
  {
    id: 10,
    name: "Inventory Management App",
    category: ["App"],
    image: "images/portfolio/10.png",
    slug: "apple-usb",
  },
  {
    id: 11,
    name: "Fashion X",
    category: ["App"],
    image: "images/portfolio/11.webp",
    slug: "apple-usb",
  },
  {
    id: 12,
    name: "GarageTunedAutos.com",
    category: ["Wordpress"],
    image: "images/portfolio/9.png",
    slug: "apple-usb",
    iframe: "https://GarageTunedAutos.com/",
  },
  {
    id: 13,
    name: "5thGenerationlahore.com",
    category: ["Wordpress"],
    image: "images/portfolio/12.png",
    slug: "apple-usb",
    iframe: "https://5thGenerationlahore.com/",
  },
  {
    id: 14,
    name: "ZodicAssociates.com",
    category: ["Wordpress"],
    image: "images/portfolio/13.png",
    slug: "apple-usb",
    iframe: "https://ZodicAssociates.com/",
  },
  {
    id: 15,
    name: "ShopiKings.com",
    category: ["Web"],
    image: "images/portfolio/14.png",
    slug: "apple-usb",
    iframe: "https://ShopiKings.com/",
  },
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    const initialFilter = filters[0].name.toLowerCase(); // 'all projects'
    setActiveFilter(initialFilter);
    // Shuffle only once
    const shuffled = shuffleArray(getAllItems);
    setVisibleItems(shuffled.slice(0, dataVisibleCount));
  }, []); // empty dependency

  useEffect(() => {
    if (activeFilter === "all projects") {
      setVisibleItems((prev) => getAllItems.slice(0, dataVisibleCount));
      setNoMorePost(dataVisibleCount >= getAllItems.length);
    } else {
      const filteredData = getAllItems.filter((data) =>
        data.category.some((cat) => cat.toLowerCase() === activeFilter)
      );
      setVisibleItems(filteredData);
      setNoMorePost(true); // No "Load more" for filtered
    }
  }, [dataVisibleCount, activeFilter]);

  const handleChange = (e) => {
    e.preventDefault();
    const targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();

    setActiveFilter(targetFilter);
    setDataVisibleCount(6); // Reset to default count on filter change
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return (
            data.category.some((cat) => cat.toLowerCase() === activeFilter) &&
            data.id <= tempCount
          );
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className="portfolio-filter list-inline">
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? "list-inline-item current"
                : "list-inline-item"
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="pf-filter-wrapper mb-4">
        <select
          className="portfolio-filter-mobile"
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row portfolio-wrapper">
        {visibleItems.map((item) => (
          <div className="col-md-4 col-sm-6 grid-item" key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className="load-more text-center mt-4">
          <a
            href="#!"
            className="btn btn-default"
            onClick={(e) => handleLoadmore(e)}
          >
            <i className="fas fa-circle-notch"></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;
