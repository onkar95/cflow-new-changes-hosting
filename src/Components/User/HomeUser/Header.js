import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { useHistory } from "react-router-dom";
import unitConverterIcon from "../../../Images/newProfile/calculator.png";
import unitConverterIconBlack from "../../../Images/cil_calculator.svg";
import helpIcon from "../../../Images/newProfile/Help.png";
// import DarkTheme from "../../../Images/newProfile/Light.png"
import lightIcon from "../../../Images/newProfile/Light.png";
import darkIcon from "../../../Images/darkicon.svg";
import profileIcon from "../../../Images/newProfile/Profile.png";
import profileIconGrey from "../../../Images/Profile.png";
import profileIconLight from "../../../Images/Profile.svg";
import NotificationsIcon from "../../../Images/NotificationIcon.svg";
import NotificationsIconGrey from "../../../Images/Notifications.png";
import NotificationsIconLight from "../../../Images/NotificationBlack.svg";
import ConverterModal from "../../Modal/ConverterModal/ConverterModal";
import "./HomeUser.css";
// import Convertor from "../HomeContentUser/Convertor"
const Header = ({
  currentSectionProfile,
  sections,
  currentSection,
  setIsUser,
  LogoImage,
  setCurrentSection,
  setCurrentSectionProfile,
  isToggled,
  setIsToggled,
  getCart,
  DarkWhite,
  modalOpen,
  setModalOpen,
}) => {
  const history = useHistory();

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("profile"))?.data?.id
  );
  const [helpEnabled, setHelpEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  //   const [modalOpen, setModalOpen] = useState(false)

  const handleCart = () => {
    if (userId === undefined) {
      setIsUser(true);
      history.push("/auth-user");
    } else {
      setCurrentSection(11);
      getCart();
    }
  };
  const [winsize, setwinsize] = useState(window.screen.width);
  const [winheight, setwinheight] = useState(window.screen.height);
  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setwinsize(window.innerWidth);
    } else {
      setwinsize(window.innerWidth);
    }
    if (window.innerHeight < 1000) {
      setwinheight(window.innerHeight);
    } else {
      setwinheight(window.innerHeight);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);
    console.log(winsize, winheight, "LandingPageImage");
  }, [window.screen.width, window.screen.height]);

  var styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "6%",
      height: "4%",
      left: "3%",
      top: "3%",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "20%",
      width: "10%",
      right: "10%",
    },
    bmCross: {
      background: "#ffb600",
      cursor: "pointer",
      height: "30px",
      // height:'60%'
    },
    bmMenuWrap: {
      // position: 'fixed',
      height: "100%",
      width: "100%",
      left: "0%",
    },
    bmMenu: {
      background: "#2D2D2D",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflowY: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  const changeTheme = () => {
    if (theme === false) {
      DarkWhite(true);
      setTheme(true);
    } else {
      setTheme(false);
      DarkWhite(false);
    }
  };
  const viewProfile = () => {
    setCurrentSection(14);
  };
  return (
    <div
      className="home-user-header"
      style={{ backgroundColor: theme ? "#ffffff" : "" }}
    >
      {winsize < 650 && (
        <Menu styles={styles} disableOverlayClick={false} isOpen={false}>
          {sections?.map((section, index) => (
            <h3
              style={{
                cursor: "pointer",
                width: "fit-content",
                color:
                  currentSection === index && !helpEnabled
                    ? "#ffb600"
                    : "white",
              }}
              onClick={() => {
                setCurrentSection(index);
                window.scrollTo(0, 0);
                setHelpEnabled(false);
                setIsOpen(false);
              }}
            >
              {section}
            </h3>
          ))}
          <h3
            style={{
              cursor: "pointer",
              width: "fit-content",
              color: helpEnabled ? "#ffb600" : "white",
            }}
            onClick={() => {
              setCurrentSection(4);
              setCurrentSectionProfile(5);
              window.scrollTo(0, 0);
              setHelpEnabled(true);
              setIsOpen(false);
            }}
          >
            Help
          </h3>
        </Menu>
      )}
      <div className="home-user-logo">
        <img
          src={LogoImage}
          className="CF-logo-user"
          onClick={() =>
            userId ? setCurrentSection(0) : history.push("/home-user")
          }
        />
      </div>
      <div className="home-user-help-user">
        <img
          src={theme ? darkIcon : lightIcon}
          onClick={changeTheme}
          style={{ width: "30px", height: "30px", cursor: "pointer" }}
        />
        <div>
          <img
            src={theme ? unitConverterIconBlack : unitConverterIcon}
            onClick={() => {
              setModalOpen(true);
            }}
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
          {/* <Convertor style={{display:}}/> */}
        </div>
        {/*<img src={helpIcon} className="help-icon" style={{ width: "30px", height: "30px" }} onClick={() => { setCurrentSection(14); setCurrentSectionProfile(5) }} />*/}
        {/* <ShoppingCartOutlinedIcon className="shopping-cart" onClick={handleCart} /> */}

        {userId ? (
          <img
            onClick={() => setIsToggled(true)}
            src={
              isToggled
                ? NotificationsIcon
                : theme
                ? NotificationsIconLight
                : NotificationsIconGrey
            }
            style={{
              cursor: "pointer",
              height: "30px",
            }}
          />
        ) : (
          // </span>
          <Button
            className="login-btn-user"
            onClick={() => {
              setIsUser(true);
              history.push("/auth-user");
            }}
          >
            Login / Sign Up
          </Button>
        )}
        {userId && (
          <img
            src={
              currentSection === 14
                ? profileIcon
                : theme
                ? profileIconLight
                : profileIconGrey
            }
            onClick={viewProfile}
            style={{ width: "30px", height: "30px" }}
          />
        )}
      </div>
      <ConverterModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        theme={theme}
      />
    </div>
  );
};

export default Header;
