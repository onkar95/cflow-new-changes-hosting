import React from 'react'
// import logutIcon from "../../../../Images/newProfileYellow/Logout.png"
import logutIcon from "../../../../Images/newProfileYellow/LogoutYellow.svg"
import completedIcon from "../../../../Images/newProfile/Verification Completed.svg"
import LogoutPopup from "../Logout/LogoutPopup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Profile.css"

const SideMenu = ({ editable, theme, profilSectionsYellow, profilSections, currentSection, setCurrentSection }
) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [open, setOpen] = React.useState(false);

    const handleLogout = () => {
        setCurrentSection(6)
        dispatch({ type: "LOGOUT" })
        history.push("/auth-user")
    }
    const handleLogoutConfirmation = () => {
        setOpen(true)
    }
    return (
        <div style={{ width: "100%" }}>
            {window.innerWidth > 600 ?
                // <Row >
                <div className="profile_button">
                    <div className="profile_button_nav" style={theme === true ? { color: "black" } : { Color: "#2d2d2d" }}>
                        <div className="profile_button_nav1">
                            <div className="profile_button_div" style={currentSection === 0 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 0 ? profilSectionsYellow[0] : profilSections[0]} alt="" />
                                <button
                                    // disabled={!editable}
                                    style={
                                        currentSection === 0
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            } : theme === true ? { color: "#2D2D2D" }
                                                : {}
                                    } onClick={() => setCurrentSection(0)}

                                >Personal details</button>
                            </div>
                            <div className="profile_button_div" style={currentSection === 1 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>

                                <img src={currentSection === 1 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                                <button
                                    // disabled={!editable}
                                    style={
                                        currentSection === 1
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            } : theme === true ? { color: "#2D2D2D" }
                                                : {}
                                    } onClick={() => setCurrentSection(1)}>Company details</button>
                            </div>
                            {/* <div className="profile_button_div" style={currentSection === 2 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 2 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                                <button
                                    style={
                                        currentSection === 2
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            } : theme === true ? { color: "#2D2D2D" }
                                                : {}
                                    } onClick={() => setCurrentSection(2)}>company adderess</button>
                            </div> */}
                            <div className="profile_button_div" style={currentSection === 7 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                                <img src={currentSection === 7 ? profilSectionsYellow[3] : profilSections[3]} alt="" />
                                <button
                                    // disabled={!editable}
                                    style={
                                        currentSection === 7
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            } : theme === true ? { color: "#2D2D2D" }
                                                : {}
                                    } onClick={() => setCurrentSection(7)}>Address book</button>
                            </div>
                        </div>
                        <div className="profile_button_nav2">
                            <div className="profile_button_div" style={currentSection === 5 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }} >
                                <img src={currentSection === 5 ? profilSectionsYellow[5] : profilSections[5]} alt="" />
                                <button
                                    // disabled={!editable}
                                    style={
                                        currentSection === 5
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            } : theme === true ? { color: "#2D2D2D" }
                                                : {}
                                    } onClick={() => setCurrentSection(5)}>Help</button>
                            </div>
                            <div className="profile_button_div"  >
                                <div className="logout_btn" >
                                    <button disabled={!editable} onClick={handleLogoutConfirmation} style={theme ? { color: "#ffb600", display: "flex", alignItems: "center" } : { color: "#ffb600", display: "flex", alignItems: "center" }}> <img src={logutIcon} style={window.innerWidth > 800 ? { marginRight: "15px" } : { marginRigth: "3px" }} alt="" /> Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                // </Row>
                :
                // <Row style={theme === true ? { color: "black" } : { Color: "#2d2d2d" }}>
                <div className="profile_button">
                    <div className="profile_button_div" style={currentSection === 0 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 0 ? profilSectionsYellow[0] : profilSections[0]} alt="" />
                        <button
                            style={
                                currentSection === 0
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(0)}

                        >Personal details</button>
                    </div>
                    <div className="profile_button_div" style={currentSection === 1 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 1 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                        <button
                            style={
                                currentSection === 1
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(1)}>Company details</button>
                    </div>
                    {/* <div className="profile_button_div" style={currentSection === 2 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 2 ? profilSectionsYellow[2] : profilSections[2]} alt="" />
                        <button
                            style={
                                currentSection === 2
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(2)}>company adderess</button>
                    </div> */}
                    <div className="profile_button_div" style={currentSection === 7 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 7 ? profilSectionsYellow[3] : profilSections[3]} alt="" />
                        <button
                            style={
                                currentSection === 7
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(7)}>Address Book</button>
                    </div>
                    <div className="profile_button_div" style={currentSection === 3 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 3 ? profilSectionsYellow[4] : profilSections[4]} alt="" />
                        <button
                            style={
                                currentSection === 3
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(3)}>Feedback</button>
                    </div>
                    <div className="profile_button_div" style={currentSection === 5 ? { borderTop: "#ffb600 solid 3px", padding: "25px 10px" } : { padding: "25px 10px" }}>
                        <img src={currentSection === 5 ? profilSectionsYellow[5] : profilSections[5]} alt="" />
                        <button
                            style={
                                currentSection === 5
                                    ? {
                                        color: "#ffb600",
                                        borderStyle: "none",
                                    } : theme === true ? { color: "#2D2D2D" }
                                        : {}
                            } onClick={() => setCurrentSection(5)}>Help</button>
                    </div>
                </div>
                // </Row>
            }
            <LogoutPopup open={open} setOpen={setOpen} handleLogout={handleLogout} />

        </div>
    )
}

export default SideMenu
