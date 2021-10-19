import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import RoomIcon from "@material-ui/icons/Room";
import { useStyles } from "./AboutUs.mui";
import "./AboutUs.css";
import axios from "axios";
import Hero from "../../../Images/AboutUs/aboutus-carousel.png";
import CompanyMissionImg from "../../../Images/AboutUs/aboutus-pic1.png";
import WhyChooseUsImg from "../../../Images/AboutUs/aboutus-pic2.png";
import ContactInfoImg from "../../../Images/AboutUs/aboutus-contact.png";

const AboutUs = ({ theme }) => {
  const classes = useStyles();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/user/contact", {
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="about-us-wrapper">
      {/* <div className='hero'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div> */}
      <div className="hero-conatiner">
        <img src={Hero} alt="about-us-hero" className="hero-img" />
        {/* <div className="hero-text-container"> */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* </div> */}
      </div>
      <div
        className="topcard"
        style={{
          backgroundColor: theme ? "#D8D8D8" : "",
          color: theme ? "black" : "",
        }}
      >
        <div className="container1">
          <div className="h3">5,234</div>
          <div
            className="container1-p1"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Loren
          </div>
          <div
            className="container1-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Lorem ipsum dolor sit amet,
          </div>
          <div
            className="container1-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            consectetur adipiscing elit. Vitae.
          </div>
        </div>

        <div className="container2">
          <div className="h3">3,400+</div>
          <div
            className="container2-p1"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Loren
          </div>
          <div
            className="container2-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Lorem ipsum dolor sit amet,
          </div>
          <div
            className="container2-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            consectetur adipiscing elit. Vitae.
          </div>
        </div>

        <div className="container3">
          <div className="h3">24/7</div>
          <div
            className="container3-p1"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Loren
          </div>
          <div
            className="container3-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Lorem ipsum dolor sit amet,
          </div>
          <div
            className="container3-p2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            consectetur adipiscing elit. Vitae.
          </div>
        </div>
      </div>

      <div className="company-mission-conatiner">
        <div
          className="company-mission-img-back"
          style={{
            backgroundColor: theme ? "#D8D8D8" : "",
          }}
        >
          <img
            src={CompanyMissionImg}
            alt="company-mission"
            className="company-mission-img"
          />
        </div>

        <div className="company-mission">
          <div className="h4-com">Company Mission</div>
          <div className="company-mission-paragraph1">
            <div
              className="company-mission-p1"
              style={{
                color: theme ? "black" : "",
              }}
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              ullamcorper in risus nunc, facilisi massa sed. Felis et vel
              consectetur urna, aliquam integer...”
            </div>
            <div
              className="company-mission-p1"
              style={{
                color: theme ? "black" : "",
              }}
            >
              adipiscing elit. Mus ullamcorper in risus nunc,
            </div>
            <div
              className="company-mission-p1"
              style={{
                color: theme ? "black" : "",
              }}
            >
              facilisi massa sed. Felis et vel consectetur
            </div>
            <div
              className="company-mission-p1"
              style={{
                color: theme ? "black" : "",
              }}
            >
              urna, aliquam integer...”
            </div>
          </div>
          <div
            className="company-mission-paragraph2"
            style={{
              color: theme ? "black" : "",
            }}
          >
            <div
              className="company-mission-p2"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu,
            </div>
            <div
              className="company-mission-p2"
              style={{
                color: theme ? "black" : "",
              }}
            >
              phasellus dictum amet, ac enim at facilisis nam vel. Ultrices
              consequat
            </div>
            <div
              className="company-mission-p2"
              style={{
                color: theme ? "black" : "",
              }}
            >
              velit lectus curabitur. Tellus commodo donec sit augue eget
              iaculis
            </div>
            <div
              className="company-mission-p2"
              style={{
                color: theme ? "black" : "",
              }}
            >
              vestibulum, mus purus. Volutpat at sollicitudin elementum
              ultricies
            </div>
            <div
              className="company-mission-p2"
              style={{
                color: theme ? "black" : "",
              }}
            >
              lacus, nisl netus. Amet interdum nascetur ornare consectetur
              nulla.
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us-container">
        <div className="why-choose-us">
          <div className="h4-why">Why choose us ?</div>
          <ul className="ul">
            <li
              className="why-choose-us-typography"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
            <li
              className="why-choose-us-typography"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </li>
            <li
              className="why-choose-us-typography"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              convallis sed vel molestie.
            </li>
            <li
              className="why-choose-us-typography"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Accumsan sed convallis viverra feugiat convallis.
            </li>
            <li
              className="why-choose-us-typography"
              style={{
                color: theme ? "black" : "",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus
              eros risus sapien lorem.
            </li>
          </ul>
        </div>
        <img
          src={WhyChooseUsImg}
          alt="why-choose-us"
          className="why-choose-us-img"
        />
      </div>

      {/* contact section */}

      <div
        className="contact-section-container"
        style={{ backgroundColor: theme ? "#D8D8D8" : "" }}
      >
        {/* left side div which has form and button */}

        <div className="contact-section-left-wrapper">
          <div
            className="say-hi-header"
            style={{
              color: theme ? "black" : "",
            }}
          >
            Say Hi!
          </div>{" "}
          <br />
          <div
            className="talk-header"
            style={{
              color: theme ? "black" : "",
            }}
          >
            We’d like to talk with you.
          </div>
          {/* form container */}
          <div className="feedback-form-wrapper">
            <form className="search-form" onSubmit={handleSubmit}>
              <label for="fullname">My name is</label>
              <input
                type="text"
                className="normal-search"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                style={{
                  backgroundColor: theme ? "#D8D8D8" : "",
                  color: theme ? "black" : "",
                }}
              />
              <br /> <label for="lname">email id</label>
              <input
                type="email"
                className="normal-search"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={{
                  backgroundColor: theme ? "#D8D8D8" : "",
                  color: theme ? "black" : "",
                }}
              />{" "}
              <br />
              <label for="subject">I'm looking for</label>
              <input
                type="text"
                className="normal-search"
                placeholder="What you love"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                style={{
                  backgroundColor: theme ? "#D8D8D8" : "",
                  color: theme ? "black" : "",
                }}
              />
              <br />
              <label for="lname">Message</label>
              <textarea
                className="multiline-search"
                placeholder="I want to say that..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows={5}
                columns={5}
                style={{
                  backgroundColor: theme ? "#D8D8D8" : "",
                  color: theme ? "black" : "",
                }}
              />
              <div className="button-wrapper">
                <Button
                  type="submit"
                  variant="contained"
                  className={theme ? classes.buttonLight : classes.button}
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-section-right-wrapper-img">
          <div className="contact-section-right-wrapper">
            <div className="contact-info">Contact Information</div>
            <div className="fill-up">
              Fill up the form and our Team will get back to you within 24
              hours.
            </div>
            <div className="contact-credentials-wrapper">
              <div className="helpline-wrapper">
                <CallIcon className={classes.icon} />
                <div className="helpline">(+40) 772 100 200</div>
              </div>
              <div className="email-wrapper">
                <MailIcon className={classes.icon} />
                <div className="mail">hello@creative-tim.com</div>
              </div>
              <div className="location-wrapper">
                <RoomIcon className={classes.icon} />
                <div className="location">
                  Dyonisie Wolf Bucharest, RO 010458
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;