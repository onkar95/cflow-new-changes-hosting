
import React, { useEffect, useState } from "react";
import { Column, GhostButton, Button } from "../../Styled/Styled";
// import "./Profile.css"
import "./profileNav.css"
import ProfilePercent from "./ProfilePercent";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import pendingIcon from "../../../../Images/newProfile/Verification pending.png"
import completedIcon from "../../../../Images/newProfile/Verification Completed.svg"
import logutIcon from "../../../../Images/newProfileYellow/Logout.png"
import LogoutPopup from "../../../Vendor/Profile/sections/Logout/LogoutPopup";
import SortArrow from "../../../../Images/Sort arrow.svg"
import SortArrow2 from "../../../../Images/Sort arrow 2.svg"
import SortArrow3 from "../../../../Images/Sort arrow 3.svg"

const ProfileNavMobile = ({ theme, formData, siteAddress, pitchedRequests, setProfileComplete, profileComplete, currentSection, setCurrentSection, editable, seteditable, feedback, FeedbackYellow, filled }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [phone, setPhone] = useState(formData?.phone_no ? formData?.phone_no : "");
    const [email, setEmail] = useState(formData?.email ? formData?.email : "");
    const [wpp, setWpp] = useState(formData?.whatsapp_no ? formData?.whatsapp_no : "");
    console.log(profileComplete)
    // const [filled, setFilled] = useState("")
    const [open, setOpen] = useState(false);
    const handleLogoutConfirmation = () => {
        setOpen(true)
    }
    const handleLogout = () => {
        setCurrentSection(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    const [todaysPtich, setTodaysPtich] = useState(0)
    useEffect(() => {
        if (pitchedRequests != "") {
            setTodaysPtich(pitchedRequests.filter(item => (item.updated_at === new Date().toISOString())))
        }

    }, [pitchedRequests]);
    // useEffect(() => {
    //     if (filled.company >= 6 && filled.personal >= 6) {
    //         setFilled("complete")
    //     } else {
    //         setFilled("incomplete")
    //     }

    // }, [])

    return (
        <>

            <div className="profile_navbar">
                <div className="userInfo">
                    <div className="profilePercent">
                        {window.innerWidth > 340 ?
                            <ProfilePercent siteAddress={siteAddress} filled={filled} height="170" currentSection={currentSection} formData={formData} setProfileComplete={setProfileComplete} />
                            :
                            <ProfilePercent siteAddress={siteAddress} filled={filled} height="140" currentSection={currentSection} formData={formData} setProfileComplete={setProfileComplete} />

                        }                    </div>
                    <div className="row">
                        <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
                            <h1>Customer name</h1>
                            {email != "" ? <div className="profileCompleted_icon" >
                                <img src={completedIcon} style={{ width: "30px" }} alt="" />
                                <span className="hover_txt" style={{ top: "20%" }}> profile is verified</span>
                            </div>
                                :
                                <div className="profileCompleted_icon" >
                                    <img src={pendingIcon} style={{ width: "30px", color: "gray" }} alt="" />
                                    <span className="hover_txt" style={{ color: "gray", top: "20%" }}> profile is not verified</span>
                                </div>}                            <h3>Customer</h3>
                        </div>

                        <div className="logout_btn">

                            <Button onClick={handleLogoutConfirmation} style={{ display: "flex", alignItems: "center", height: "50px" }}> <img src={logutIcon} alt="" /> logout</Button>
                        </div>
                    </div>
                </div>
                <div className="userdetail">

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
            <LogoutPopup open={open} setOpen={setOpen} handleLogout={handleLogout} />

        </>
    );
};

export default ProfileNavMobile;
