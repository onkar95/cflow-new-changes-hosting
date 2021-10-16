import React from "react";
import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
import CarouselBox from "./CarouselBox";

const HomeService = ({ setCurrentSection, setOption, option, theme }) => {
  const openServices = () => {
    setCurrentSection(1);
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="service-our">
        <div className="our-services-box">
          <ul className="service-material">
            <li>
              {" "}
              <Link onClick={openServices}>Construction Material</Link>
            </li>
            {/* <li>
              {" "}
              <Link >Agents</Link>
            </li> */}
            {/* <li>
              {" "}
              <Link>Construction Vehicles</Link>
            </li> */}
            {/* <li>
              {" "}
              <Link >Construction Machine</Link>
            </li> */}
          </ul>
          <h1
            style={theme === true ? { color: "#FFCD01" } : { color: " white" }}
          >
            OUR SERVICES
          </h1>{" "}
          <CarouselBox
            theme={theme}
            setCurrentSection={setCurrentSection}
            option={option}
            setOption={setOption}
          />
        </div>

        <div className="customer-satisfy">
          <ul>
            <li
              style={theme === true ? { color: "black" } : { color: " white" }}
            >
              100% Customer Satisfaction
            </li>
            <li
              style={theme === true ? { color: "black" } : { color: " white" }}
            >
              {" "}
              1000+ Active users & Vendors
            </li>
            <li
              style={theme === true ? { color: "black" } : { color: " white" }}
            >
              {" "}
              10,000 tons Material Transported
            </li>
          </ul>
        </div>
        <div className="dot-line"></div>
      </div>
    </div>
  );
};

export default HomeService;
