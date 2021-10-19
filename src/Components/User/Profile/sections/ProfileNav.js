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
    const [name, setName] = useState(formData?.first_name ? formData?.first_name : "");

    const [, setFilled] = useState(filled)
    const [open, setOpen] = useState(false);
    const [editProfile, setEditProfile] = useState(false)
    const [butnDisabled, setButnDisabled] = useState("")

    var d = new Date();
    const [date, setdate] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)
    const [todayPitchCount, setTodayPitchCount] = useState(0)
    const [dateToday, setdateToday] = useState(0)


    useEffect(() => {
        var d = new Date;
        setdate(d.getDate())
        setMonth(d.getMonth()+1)
        setYear(d.getFullYear())
        setdateToday(`${year}-${month}-${date}`)
    }, [currentSection,formData])
    console.log(dateToday);

    console.log(pitchedRequests[0].updated_at.slice(0, 4)==year);
    console.log(pitchedRequests[0].updated_at.slice(5, 7)==month);
    console.log(pitchedRequests[3].updated_at.slice(8, 10)==date);
    console.log(year)
    console.log(month)
    console.log(date)
    console.log(pitchedRequests);
    console.log(pitchedRequests[0].updated_at.slice(0, 10));
    console.log(dateToday);

    useEffect(() => {
        var count = 0;
        pitchedRequests?.forEach(element => {
            if (element.updated_at.slice(0, 4) == year && element.updated_at.slice(5, 7) == month && element.updated_at.slice(8, 10) == date) {
                count++
                console.log(element);
            } 
        });
        setTodayPitchCount(count)
        //  pitchedToday()
    }, [currentSection,formData]);


    // const handleLogoutConfirmation = () => {
    //     setOpen(true)
    // }
    // const handleLogout = () => {
    //     setCurrentSection(6)
    //     dispatch({ type: "LOGOUT" })
    //     history.push("/")
    // }
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
        if ((currentSection != 1 && currentSection != 0) && editProfile === true) {
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
    const completeProfile = () => {
        if (currentSection === 0) {
            setCurrentSection(1)
        } else if (currentSection === 1) {
            setCurrentSection(7)
        } else if (currentSection === 7) {
            setCurrentSection(0)
        }
    }
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
                                <h1> {name}</h1>
                                {email != "" ? <div className="profileCompleted_icon" >
                                    <img src={completedIcon} style={{ width: "40px", height: "30px" }} alt="" />
                                    <span className="hover_txt" > Profile is verified</span>
                                </div>
                                    :
                                    <div className="profileCompleted_icon" >
                                        <img src={pendingIcon} style={{ width: "30px", color: "gray", height: "30px" }} alt="" />
                                        <span className="hover_txt" style={{ color: "gray" }}> profile is not verified</span>
                                    </div>}
                            </div>
                            {/* <h3>{name}</h3> */}
                        </div>
                        <div className="info">
                            <div>
                                <h3>Phone</h3>
                                <h4>{phone}</h4>
                            </div>
                            <div>
                                <h3>Whatsapp</h3>
                                <h4>{wpp}</h4>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <h4>{email} </h4>
                            </div>
                        </div>
                        <div style={{ display: "flex" }}>

                            {
                                editProfile ?
                                    <div className="address_btn" onClick={handelEditProfile} style={{ display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#ffb600", borderRadius: "5px", padding: "5px", marginLeft: "30px" }} >
                                        <button style={{ display: "flex", alignItems: "center", fontSize: "15px", marginLeft: "5px" }}>
                                            <img src={EditIcon} alt="" style={{ height: "15px", marginRight: "15px" }} />
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
                                <div className="address_btn" onClick={handelfeedback} style={currentSection === 3 ? { display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#fcf1d4", borderRadius: "5px", padding: "5px", marginLeft: "15px" } : { display: "flex", alignItems: "center", backgroundColor: "#e0ded8", borderRadius: "7px", padding: "5px", marginLeft: "5px" }} >
                                    <img src={currentSection === 3 ? FeedbackYellow : feedback} alt="" style={{ width: "20px", height: "18px", marginTop: "3px", marginLeft: "15px" }} />

                                    <button
                                        style={currentSection === 3 ? { color: "#ffb600", fontSize: "15px" } : { display: "flex", alignItems: "center", color: "black", fontSize: "15px" }}>
                                        Feedback
                                    </button>

                                </div>
                                :
                                <div className="address_btn" onClick={() => setCurrentSection(3)} style={currentSection === 3 ? { display: "flex", alignItems: "center", border: " orange 3px solid", backgroundColor: "#2b2617", borderRadius: "5px", padding: "5px", marginLeft: "15px" } : { display: "flex", alignItems: "center", backgroundColor: "#2d2d2d", borderRadius: "7px", padding: "5px", marginLeft: "15px" }} >
                                    <img src={feedback} style={{ width: "20px", height: "18px", marginTop: "3px", marginLeft: "15px" }} alt="" />
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
                    // {/* {true ? */}

                    <div className="notVerified_user" style={theme ? { backgroundColor: "#ffb600" } : {}}>
                        <div className="notVerified_user_text">
                            <p>Complete your profile</p>
                            <span>please complete your profile so that you can start requesting for products </span>
                        </div>
                        <div className="notVerified_user_button"
                            // style={theme ? { width: "max-content", padding: "3px", backgroundColor: "#161616" } : { width: "max-content", padding: "3px" }}
                            style={{ width: "max-content", padding: "3px" }}>
                            <button style={theme ? { backgroundColor: "#161616" } : {}} onClick={completeProfile}>Complete Profile</button>
                        </div>
                    </div>
                    :
                    <div className="usersActivity_div">
                        <div className="users_pitch" style={theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>{todayPitchCount}</h1>
                            <h5>Total pitch recived today</h5>
                            {todayPitchCount > 0 ?
                                <h5 style={{ color: "green" }}><img src={todayPitchCount > 0 ? SortArrow2 : SortArrow} alt="" /><b style={{ color: "green" }}>0%</b>  this week</h5>
                                :
                                <h5 style={theme ? { color: "black" } : { color: "white" }}><b style={theme ? { color: "black" } : { color: "white" }}>NaN</b> </h5>
                            }
                        </div>

                        <div className="users_delivery" style={theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                            <h1>0</h1>
                            <h5>Total Delivery</h5>
                            {todayPitchCount > 0 ?
                                <h5 style={{ color: "green" }}><img src={todayPitchCount > 0 ? SortArrow2 : SortArrow} alt="" />
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
