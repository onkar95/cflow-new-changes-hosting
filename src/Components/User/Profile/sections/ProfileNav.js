import React, { useEffect, useState } from "react";
import { Column, GhostButton, Button } from "../../Styled/Styled";
import "./Profile.css"
import "./profileNav.css"
import ProfilePercent from "./ProfilePercent";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import pendingIcon from "../../../../Images/newProfile/Verification pending.png"
import logutIcon from "../../../../Images/newProfileYellow/Logout.png"
import completedIcon from "../../../../Images/newProfile/Verification Completed.svg"
import LogoutPopup from "../Logout/LogoutPopup";
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"
import SortArrow from "../../../../Images/Sort arrow.svg"
import SortArrow2 from "../../../../Images/Sort arrow 2.svg"
import SortArrow3 from "../../../../Images/Sort arrow 3.svg"


const ProfileNav = ({ theme, formData, siteAddress, pitchedRequests, setProfileComplete, profileComplete, currentSection, setCurrentSection, editable, seteditable, feedback, FeedbackYellow, filled }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [phone, setPhone] = useState(formData?.phone_no ? formData?.phone_no : "");
    const [email, setEmail] = useState(formData?.email ? formData?.email : "");
    const [wpp, setWpp] = useState(formData?.whatsapp_no ? formData?.whatsapp_no : "");

    const [, setFilled] = useState(filled)
    const [open, setOpen] = useState(false);
    const [editProfile, setEditProfile] = useState(false)
    const [butnDisabled, setButnDisabled] = useState("")

    const [todaysPtich, setTodaysPtich] = useState(0)
    useEffect(() => {
        if (pitchedRequests != "") {
            setTodaysPtich(pitchedRequests.filter(item => (item.updated_at === new Date().toISOString())))
        }

    }, [pitchedRequests]);
    // setTodaysPtich(pitchedToday.length);

    const handleLogoutConfirmation = () => {
        setOpen(true)
    }
    const handleLogout = () => {
        setCurrentSection(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    useEffect(() => {
        if (filled.company >= 6 && filled.personal >= 6) {
            setFilled("complete")
        } else {
            setFilled("incomplete")
        }

    }, [currentSection])
    console.log(filled);
    const handelEditProfile = () => {


        if (editProfile === true && editable === true) {
            seteditable(false)
            // setCurrentSection(0)
            setEditProfile(false)
        } else {
            seteditable(true)
            setEditProfile(true)
        }
        if ((currentSection != 1 && currentSection != 0)&&editProfile===true) {
            setCurrentSection(0)
        } else if (currentSection === 0 && editProfile === true) {
            setCurrentSection(0)
        } else if (currentSection === 1 && editProfile === true) {
            setCurrentSection(1)
        }

    }
    const handelfeedback = () => {
        if (currentSection != 3) {
            setCurrentSection(3)
        } else {
            setCurrentSection(0)
        }
    }

    useEffect(() => {
        if (editable === false) {
            setEditProfile(false)
        } else {
            setEditProfile(true)
        }
    }, [editable])

    useEffect(() => {
        if (currentSection === 0 || currentSection === 1) {

            setButnDisabled("false")
        } else {
            setButnDisabled("true")

        }
    }, [currentSection])
    // console.log(pitchedRequests)
    return (
        <>

            <div className="profile_navbar">
                <div className="userInfo">
                    <div className="profilePercent">
                        <ProfilePercent siteAddress={siteAddress} filled={filled} height="170" currentSection={currentSection} formData={formData} setProfileComplete={setProfileComplete} />
                    </div>
                    <div className="userdetail">
                        <div className="row">
                            <div className="custName_icon">
                                <h1>Customer name</h1>
                                {email != "" ? <div className="profileCompleted_icon" >
                                    <img src={completedIcon} style={{ width: "40px", height: "30px" }} alt="" />
                                    <span className="hover_txt" > profile is verified</span>
                                </div>
                                    :
                                    <div className="profileCompleted_icon" >
                                        <img src={pendingIcon} style={{ width: "30px", color: "gray", height: "30px" }} alt="" />
                                        <span className="hover_txt" style={{ color: "gray" }}> profile is not verified</span>
                                    </div>}
                            </div>
                            <h3>Customer</h3>
                        </div>
                        <div className="info">
                            <div>
                                <h3>phone</h3>
                                <h4>{phone}</h4>
                            </div>
                            <div>
                                <h3>whatsapp</h3>
                                <h4>{wpp}</h4>
                            </div>
                            <div>
                                <h3>email</h3>
                                <h4>{email} </h4>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>

                            {
                                editProfile ?
                                    <div className="address_btn" onClick={handelEditProfile} style={{ display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#ffb600", borderRadius: "5px", padding: "5px" }} >
                                        <button style={{ display: "flex", alignItems: "center", fontSize: "15px", marginLeft: "5px" }}>
                                            <img src={EditIcon} alt="" style={{ height: "15px", marginRight: "8px" }} />
                                            Edit Profile</button>
                                    </div>
                                    :
                                    <div className="address_btn" onClick={handelEditProfile} style={{ display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#fcf1d4", borderRadius: "5px", padding: "5px" }}  >
                                        <button
                                            style={{ fontSize: "15px", display: "flex", alignItems: "center" }}>
                                            Cancel Edit </button>
                                    </div>

                            }
                            {theme ?
                                <div className="address_btn" onClick={handelfeedback} style={currentSection === 3 ? { display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#fcf1d4", borderRadius: "5px", padding: "5px", marginLeft: "5px" } : { display: "flex", alignItems: "center", backgroundColor: "#e0ded8", borderRadius: "7px", padding: "5px", marginLeft: "5px" }} >
                                    <img src={currentSection === 3 ? FeedbackYellow : feedback} alt="" style={{ width: "20px", height: "18px", marginTop: "3px", marginLeft: "5px" }} />

                                    <button
                                        style={currentSection === 3 ? { color: "#ffb600", fontSize: "15px" } : { display: "flex", alignItems: "center", color: "black", fontSize: "15px" }}>
                                        Feedback
                                    </button>

                                </div>
                                :
                                <div className="address_btn" onClick={() => setCurrentSection(3)} style={currentSection === 3 ? { display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#2b2617", borderRadius: "5px", padding: "5px", marginLeft: "5px" } : { display: "flex", alignItems: "center", backgroundColor: "#2d2d2d", borderRadius: "7px", padding: "5px", marginLeft: "5px" }} >
                                    <img src={feedback} style={{ width: "20px", height: "18px", marginTop: "3px", marginLeft: "5px" }} alt="" />
                                    <button
                                        style={{ display: "flex", alignItems: "center", color: "white", fontSize: "15px" }}>

                                        Feedback
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                {profileComplete != 100 ?

                    <div className="usersActivity">
                        <div >
                            <h1>complete your prfile</h1>
                            <h5>please complete your profile to continue with us</h5>
                        </div>
                        <div className="row" style={{ width: "max-content", padding: "3px" }}>
                            <h3>complete profile</h3>
                        </div>
                    </div>
                    :
                    <div className="usersActivity_div">
                        <div className="users_pitch" style={theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>{todaysPtich.length}</h1>
                            <h5>Total pitch recived today</h5>
                            {todaysPtich.length > 0 ?
                                <h5 style={{ color: "green" }}><img src={todaysPtich.length > 0 ? SortArrow2 : SortArrow} alt="" /><b style={{ color: "green" }}>0%</b>  this week</h5>
                                :
                                <h5 style={theme ? { color: "black" } : { color: "white" }}><b style={theme ? { color: "black" } : { color: "white" }}>NaN</b> </h5>
                            }
                        </div>

                        <div className="users_delivery" style={theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>0</h1>
                            <h5>Total Delivery</h5>
                            {todaysPtich.length > 0 ?
                                <h5 style={{ color: "green" }}><img src={todaysPtich.length > 0 ? SortArrow2 : SortArrow} alt="" />
                                    <b style={{ color: "green" }}> 0%</b>  this week</h5>
                                :
                                <h5 style={theme ? { color: "black" } : { color: "white" }}><b style={theme ? { color: "black" } : { color: "white" }}>NaN</b> </h5>
                            }                        </div>
                    </div>
                }
            </div>

        </>
    );
};

export default ProfileNav;
