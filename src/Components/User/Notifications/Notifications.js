import React, { useState, useEffect } from 'react'
import { animated, useSpring } from "react-spring"
import NotificationCard from './NotificationCard/NotificationCard'
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios";
import "./Notifications.css"
import noti_selec from "../../../Images/notifi_selected.svg";
import noti_noselec from "../../../Images/notifications_notselected.svg";
import SelectedPinImage from "../../../Images/Selected-Pinn.svg";
import PinImage from "../../../Images/Pinn.svg";
import no_notifications from "../../../Images/No-notification.svg";

function Notifications(isToggled, setIsToggled, notification, setCurrentSection, setTableSwitch) {

    const { x } = useSpring({
        x: isToggled.isToggled ? 240 : -350
    })

    const notifications_sections = ['New', 'Pinned', 'All']
    const [current_notification_section, setCurrent_notification_section] = useState(2)
    const [disp, setDisplay] = useState("none")
    const [all_notification, setall_notification] = useState([]);
    const [pinned_notifcation, setpinned_notifcation] = useState([]);
    const [trig, settrig] = useState(false)
    const [userid, setuserid] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    var d = new Date();
    const [datePosted, setdatePosted] = useState("")
    const [dateToday, setdateToday] = useState(0)
    const [month, setMonth] = useState("")
    const [year, setYear] = useState(0)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const handleClose = () => {
        isToggled.setIsToggled(false)
    }

    let temp, temp1;

    const call_notification = async () => {
        if (userid !== undefined) {
            await axios.get(`${process.env.REACT_APP_URL}/user/get_notification/${userid}`)
                .then(function (response) {
                    temp = response?.data

                })
            setall_notification(temp?.data);

        }
    }
    console.log(all_notification);
    const call_pinned = async () => {
        if (userid !== undefined) {
            await axios.get(`${process.env.REACT_APP_URL}/user/get_pinned/${userid}`)
                .then(function (response) {
                    temp1 = response?.data
                    console.log(response);
                })
            setpinned_notifcation(temp1?.data)
        }
    }
    console.log(pinned_notifcation);
    useEffect(() => {
        if (isToggled.isToggled === true) {
            setDisplay("block")
        } else {
            setDisplay("none")
        }
    }, [isToggled])
    useEffect(() => {
        call_notification();
        call_pinned();
    }, [])
    //    console.log(all_notification,"pinned",pinned_notifcation)

    useEffect(() => {
        call_notification();
        call_pinned();
    }, [current_notification_section, trig])

    useEffect(() => {
        // console.log(value?.created_at.slice(0, 10));
        console.log(all_notification);
        var d = new Date;
        // setdatePosted(all_notification && all_notification[0].created_at.slice(0, 10))
        setdateToday(d.getDate())
        setMonth(d.getMonth())
        setYear(d.getFullYear())
        console.log(datePosted);
        console.log(`${year}-${month + 1}-${dateToday}`)
    }, [all_notification])
    return (
        <animated.div
            style={{ display: disp }}
            className="notification_wrapper"
        >
            <div style={{position:"fixed",zIndex:"10"}}>
                <CloseIcon style={{ cursor: 'pointer' }} onClick={handleClose} />
            </div>
            <div className="notification_section">
                {/* {notifications_sections.map((section, index) => */}
                <div className="section_underline">
                    <img src={current_notification_section === 2 ? noti_selec : noti_noselec} style={{ cursor: 'pointer' }} className="img" key={2} onClick={() => setCurrent_notification_section(2)}></img>

                    <h2>Notifications</h2>


                    <img src={current_notification_section === 1 ? SelectedPinImage : PinImage} style={{ cursor: 'pointer' }} className="img" key={1} onClick={() => setCurrent_notification_section(1)}></img>
                </div>
            </div>
            <hr className="notification_hr"></hr>
            <div className="notification_content">
                {
                    // 
                    current_notification_section === 2
                        ?
                        <>
                            <h3>Today</h3>
                            {all_notification?.filter(date => date.created_at.slice(0, 10) === `${year}-${month + 1}-${dateToday}`).map((value, index) =>
                                <div><NotificationCard call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig} value={value} setCurrentSection={isToggled?.setCurrentSection} setTableSwitch={isToggled?.setTableSwitch} /></div>)}
                            <hr style={{border:"1px solid white", color: "wheat" }} />

                            <h3>Previous</h3>
                            {/* all_notification?.filter(date => date.created_at.slice(0, 10) < `${year}-${month + 1}-$dateToday}`) != [] ? */}

                            {all_notification?.filter(date => date.created_at.slice(0, 10) < `${year}-${month + 1}-${dateToday}`).map((value, index) =>
                                <div><NotificationCard call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig} value={value} setCurrentSection={isToggled?.setCurrentSection} setTableSwitch={isToggled?.setTableSwitch} /></div>)}

<hr style={{border:"1px solid white", color: "wheat" }} />

                        </>
                        :

                        <>
                            <h3>Today</h3>

                            {pinned_notifcation?.filter(date => date.created_at.slice(0, 10) === `${year}-${month + 1}-${dateToday}`).map((value, index) =>
                                <div>
                                    <NotificationCard
                                        call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig} value={value} setCurrentSection={isToggled?.setCurrentSection} setTableSwitch={isToggled?.setTableSwitch}
                                    />
                                </div>)}

                                <hr style={{border:"1px solid white", color: "wheat" }} />

                            <h3>Previous</h3>
                            {pinned_notifcation?.filter(date => date.created_at.slice(0, 10) < `${year}-${month + 1}-${dateToday}`).map((value, index) =>
                                <div>
                                    <NotificationCard
                                        call_notification={call_notification} call_pinned={call_pinned} Trig={trig} setTrig={settrig} value={value} setCurrentSection={isToggled?.setCurrentSection} setTableSwitch={isToggled?.setTableSwitch}
                                    />
                                </div>)}
                                <hr style={{border:"1px solid white", color: "wheat" }} />

                        </>
                }
            </div>
            <hr className="notification_hr"></hr>
            {/* <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "center" }}>{d.getDate()}/{monthNames[d.getMonth()]}/{d.getFullYear()}</div> */}
        </animated.div>
    )
}

export default Notifications
