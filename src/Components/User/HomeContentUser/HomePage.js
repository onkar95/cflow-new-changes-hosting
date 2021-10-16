import React from "react";
import { Link } from "react-router-dom";

import HomeService from "./HomeServices";
import HomeCarousel from "./HomeCarousel";
import "./HomePage.css";
import HomeAbout from "./HomeAbout";

import BlogSection from "./BlogSection";

function HomePage({
  setCurrentSection,
  option,
  setOption,
  theme,
  modalOpen,
  setModalOpen,
}) {
  return (
    <>
      <div className="home-main-full">
        <HomeCarousel modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <HomeService
          theme={theme}
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
        <HomeAbout
          theme={theme}
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
        <BlogSection
          modalOpen={modalOpen}
          theme={theme}
          setCurrentSection={setCurrentSection}
          option={option}
          setOption={setOption}
        />
      </div>
    </>
  );
}

export default HomePage;
