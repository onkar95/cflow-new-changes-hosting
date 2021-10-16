import React, { useState, useEffect } from 'react'
import "./NotificationCard.css"
import { Button } from '@material-ui/core';
import PinImage from "../../../../Images/pin.png"
import DustBinImage from "../../../../Images/dustbin.png"
import SelectedPinImage from "../../../../Images/selectedpin.png"
import Agents from "../../../../Images/Agents-noti.svg"
import Lead from "../../../../Images/new-lead.svg"
import CloseIcon from '@material-ui/icons/Close';
import Clock from "../../../../Images/noti-clock.svg";
import axios from 'axios';

function NotificationCard({ value, setCurrentSection, setTableSwitch, setTrig, Trig, call_notification, call_pinned }) {

    const [pinned, setPinned] = useState(value.ispinned)
    const [pinned1, setPinned1] = useState(!pinned)
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    var temp, temp1;

    const [datePosted, setdatePosted] = useState("")
    const [dateToday, setdateToday] = useState(0)
    const [month, setMonth] = useState("")
    const [year, setYear] = useState(0)

    const handleChange = () => {
        if (value?.title === "New Pitch") {
            //take it to Request Table section => Pitched Request
            setCurrentSection(2);
            setTableSwitch(1);
            window.scrollTo(0, 500);
        }
    }
    const changeFormat = () => {
        let time = value.created_at
        time.slice(11, 16);



    }
    const handlepin = async (e) => {
        setTrig(!Trig);

        if (value?.isPinned == 1) {
            var status = "0"
        }
        else {
            var status = "1"
        }
        var id = value?.id

        await axios.post(`${process.env.REACT_APP_URL}/user/set_notification1/${userId}`, { status, id })
            .then(function (response) {
                temp = response?.data

            })
        call_notification();
        call_pinned();
    }
    const handleDelete = async (e) => {
        e.preventDefault();
        var id = value?.id
        let temp4;
        await axios.post(`${process.env.REACT_APP_URL}/user/delete_notification/${userId}`, { id })
            .then(function (response) {
                temp4 = response?.data

            })
        call_notification();
        call_pinned();
    }
    console.log(value);
    useEffect(() => {
        // console.log(value?.created_at.slice(0, 10));

        var d = new Date;
        setdatePosted(value && value.created_at.slice(0, 10))
        setdateToday(d.getDate())
        setMonth(d.getMonth())
        setYear(d.getFullYear())
        console.log(datePosted);
        console.log(`${year}-${month + 1}-${dateToday}`)
        console.log(value);

    }, [value])

    return (
        <>

            {value.detail != '' ?
                <>
                    {/* <h3>today</h3> */}
                    <div className="notificationcard_wrapper">
                        <div style={{ display: "flex" }}>

                            <div className="circle">
                                {
                                    value.title === "Construction Flow" ?
                                        <img src={Agents} alt="" className="tumblr" />
                                        :
                                        <img src={Lead} alt="" className="tumblr" />
                                }
                            </div>
                            <div className="notificationcard_heading" >

                                <div style={{ display: "flex", alignItems: "center" }} >
                                    <h4 style={{ margin: " 0 10px 0 0  " }}>{value?.title} </h4>
                                    <img src={Clock} style={{ margin: " 0 5px 0 0" }} />
                                    <p className="timing"> at {
                                        value?.created_at === undefined ? ""
                                            :
                                            value?.created_at.slice(11, 16)
                                    }</p>

                                </div>
                                <p style={{ margin: "0", display: "flex", flexWrap: "wrap" }}> {value?.detail}
                                    {
                                        value.title === "Construction FLow" ?
                                            <Button className="notificationcard_button" onClick={handleChange}>Agents</Button>
                                            :
                                            <Button className="notificationcard_button" onClick={handleChange}>Construction materials</Button>
                                    }
                                </p>

                            </div>
                        </div>
                        <div className="notificationcard_icons">

                            <CloseIcon className="close-icon" onClick={handleDelete} />
                            <img src={value.isPinned ? SelectedPinImage : PinImage} style={{ width: "18px", height: "18px" }} alt="Pin" className="pin-icon" onClick={handlepin} />

                        </div>
                    </div>
                </>
                :
                <div className="notificationcard_wrapper">
                    <h4>nothing to show</h4>
                </div>

            }

        </>
    )
}

export default NotificationCard