import React from "react";
// import about from "about-box.jpg";
import about from "../../../Images/about-box.jpg";

const HomeAbout = ({ theme }) => {
  return (
    <div>
      <div
        className="be-a-real"
        style={
          theme === true
            ? { backgroundColor: "#1E1E1C" }
            : { backgroundColor: " #FFB600" }
        }
      >
        <h1
          style={theme === true ? { color: "#FFCD01" } : { color: " #08090C" }}
        >
          Be a real Businessman
          <br />
          Be part of Construction Flow
        </h1>
      </div>
      <div className="about-us-box">
        <h1>
          <span
            style={theme === true ? { color: "black" } : { color: " white" }}
          >
            About
          </span>{" "}
          <span>Construction Flow</span>
          <div
            className="history-tl-container"
            style={theme === true ? { color: "black" } : { color: " white" }}
          >
            <ul class="tl">
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">
                  Everything for the construction site
                </div>
                <div
                  class="item-detail"
                  style={
                    theme === true ? { color: "black" } : { color: " white" }
                  }
                >
                  Whether sand, gravel or gravel - you get everything that can
                  be poured well through Construction Flow ... except beer.
                </div>
              </li>
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">No more paperwork</div>
                <div
                  class="item-detail"
                  style={
                    theme === true ? { color: "black" } : { color: " white" }
                  }
                >
                  Whether order, delivery note or invoice - with us everything
                  is 100% digital and immediately available. So you can put the
                  promotional pen back in.
                </div>
              </li>
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="item-title">
                  The best deals free construction site
                </div>
                <div
                  class="item-detail"
                  style={
                    theme === true ? { color: "black" } : { color: " white" }
                  }
                >
                  Where can you get the best deals? With Construction Flow you
                  will find out immediately - because we provide you with 99%
                  genuine usersto optimize your business deals.
                </div>
              </li>
            </ul>
          </div>
        </h1>{" "}
        <div className="left-side-box">
          {" "}
          <img src={about} alt="logo"></img>{" "}
          <span className="box-square"></span>{" "}
          <span className="box-vertical"></span>{" "}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;