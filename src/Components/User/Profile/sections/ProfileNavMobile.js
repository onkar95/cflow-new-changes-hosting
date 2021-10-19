
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
    const [name, setName] = useState(formData?.first_name ? formData?.first_name : "");

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

    const completeProfile = () => {
        if (currentSection === 0) {
            setCurrentSection(1)
        } else if (currentSection === 1) {
            setCurrentSection(7)
        } else if (currentSection === 7) {
            setCurrentSection(0)
        }
    }
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
                            <h1> {name}</h1>
                            {email != "" ? <div className="profileCompleted_icon" >
                                <img src={completedIcon} style={{ width: "30px" }} alt="" />
                                <span className="hover_txt" style={{ top: "20%" }}> profile is verified</span>
                            </div>
                                :
                                <div className="profileCompleted_icon" >
                                    <img src={pendingIcon} style={{ width: "30px", color: "gray" }} alt="" />
                                    <span className="hover_txt" style={{ color: "gray", top: "20%" }}> profile is not verified</span>
                                </div>}
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
                // {/* {true ? */}

                    <div className="notVerified_user" style={theme ? { backgroundColor: "#ffb600" } : {}}>
                        <div className="notVerified_user_text">
                            <p>Complete your profile</p>
                            <span>please complete your profile so that you can start requesting for products </span>
                        </div>
                        <div className="notVerified_user_button" style={{ width: "max-content", padding: "3px" }}>
                            <button style={theme ? { color: "#161616", border: "3px solid #161616", margin: "8px" } : { margin: "8px" }} onClick={completeProfile}>Complete Profile</button>
                        </div>
                    </div>
                    :
                    <div className="usersActivity_div">
                    <div className="users_pitch" style={theme === true ? { backgroundColor: "#fdedc7" } : { backgroundColor: "#2d2d2d" }}>
                        <h1>{todayPitchCount>0?todayPitchCount-1:todayPitchCount}</h1>
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
            <LogoutPopup open={open} setOpen={setOpen} handleLogout={handleLogout} />

        </>
    );
};

export default ProfileNavMobile;
