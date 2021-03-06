import { Button } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import PlayStore from "../../Images/Playstore.png";
import Facebook from "../../Images/Facebook.png";
import Twitter from "../../Images/Twitter.png";
import Instagram from "../../Images/Instagram.png";
import LinkedIn from "../../Images/Linkedin.svg";
import { GrWindowsLegacy } from "react-icons/gr";
const Footer = ({
  theme,
  setCurrentSection,
  currentSectionService,
  setCurrentSectionService,
}) => {
  return (
    <>
      <div className="footer-main">
        <div
          className="footer1"
          style={
            theme === true
              ? { backgroundColor: " #F6F5F2" }
              : { backgroundColor: "#191b1e" }
          }
        >
          <div className="section">
            <h2 style={{ fontWeight: "600", fontSize: 18 }}>Our Services</h2>
            <Button
              className="services_button"
              onClick={() => {
                setCurrentSection(1);
                setCurrentSectionService(0);
                window.scrollTo(0, 300);
              }}
            >
              <span
                style={{ fontSize: 16, margin: 0 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Construction Material
              </span>{" "}
            </Button>
            {/* <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(1);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14,margin:0,padding:0}}>Agents</span></Button> */}
            {/* <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(0);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14}}>Construction Machines</span></Button> */}
            {/* <Button className="services_button" onClick={()=>{setCurrentSection(1);setCurrentSectionService(2);window.scrollTo(0,300)}}><span style={{fontWeight:'500',fontSize:14}}>Commercial Vehicles</span></Button> */}
            <Button
              className="services_button"
              onClick={() => {
                setCurrentSection(1);
                setCurrentSectionService(4);
                window.scrollTo(0, 300);
              }}
            >
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Construction chemicals ({" "}
                <span style={{ color: "#FFB600", fontSize: "14px" }}>
                  coming soon
                </span>
                )
              </span>
            </Button>
          </div>
          <div className="section">
            <h2 style={{ fontWeight: "600", fontSize: 18 }}>About Us</h2>
            <Button
              className="services_button"
              onClick={() => {
                setCurrentSection(5);
                window.scrollTo(0, 200);
              }}
            >
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                {" "}
                Why use Construction Flow
              </span>
            </Button>
            <Button className="services_button">
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Our Pricing
              </span>
            </Button>
            <Button
              className="services_button"
              onClick={() => {
                setCurrentSection(15);
                window.scrollTo(0, 200);
              }}
            >
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Blogs
              </span>
            </Button>
          </div>
        </div>
        <div
          className="footer2"
          style={
            theme === true
              ? { backgroundColor: " #F6F5F2" }
              : { backgroundColor: "#191b1e" }
          }
        >
          <div className="section">
            <h2 style={{ fontWeight: "600", fontSize: 18 }}>Compare</h2>
            <Button className="services_button">
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Inframarket Vs ConstructionFLow
              </span>
            </Button>
            <Button className="services_button">
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                OfBusiness Vs ConstructionFLow
              </span>
            </Button>
            <Button className="services_button">
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                Indiamart Vs ConstructionFLow
              </span>
            </Button>
          </div>

          <div className="follow">
            <h2
              style={{
                marginTop: "1rem",
                color: "#8A8A8A",
                fontWeight: "600",
                fontSize: 18,
              }}
            >
              Follow Us
            </h2>
            <Button className="services_button">
              <span
                style={{ fontSize: 16 }}
                style={
                  theme === true ? { color: "#08090C" } : { color: "white" }
                }
              >
                We???d love to hear from you!
              </span>
            </Button>
            <div className="icons">
              <a
                href="https://www.facebook.com/ConstructionFlow"
                target="_blank"
              >
                <img
                  src={Facebook}
                  style={{ padding: "0.5rem", paddingRight: "1rem" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/constructionflow"
                target="_blank"
              >
                <img
                  src={LinkedIn}
                  style={{ padding: "0.5rem", paddingRight: "1rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/constructionflow_"
                target="_blank"
              >
                <img
                  src={Instagram}
                  style={{ padding: "0.5rem", paddingRight: "1rem" }}
                />
              </a>
              <a href="https://twitter.com/ConstructionFlo/" target="_blank">
                <img src={Twitter} style={{ padding: "0.5rem" }} />
              </a>
            </div>
          </div>
          <div
            className="play-app"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h2 style={{ fontWeight: "600", fontSize: 18 }}>Get the app</h2>
            <Link to="">
              <img
                src={PlayStore}
                style={{
                  marginTop: "1rem",
                  // paddingRight: "1.5rem",
                  width: "170px",
                  height: "51.45px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="Footer-CopyRights"
        style={
          theme === true
            ? { backgroundColor: " #F6F5F2" }
            : { backgroundColor: "#191b1e" }
        }
      >
        <div
          className="copyrightfooter"
          style={theme === true ? { color: "#08090C" } : { color: "white" }}
        >
          {" "}
          ?? Copyrights reserved
        </div>
        <div
          className="con-flow"
          style={theme === true ? { color: "#08090C" } : { color: "white" }}
        >
          Privacy Policy
        </div>
        <div
          className="con-flow"
          style={theme === true ? { color: "#08090C" } : { color: "white" }}
        >
          Terms & Conditions{" "}
        </div>
      </div>
    </>
  );
};

export default Footer;