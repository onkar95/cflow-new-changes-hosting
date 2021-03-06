import React, { useState, useEffect } from "react";
import {
    Star,
    Row,
    Column,
    SectionTitle,
    Button,
    Textarea,
} from "../../Styled/Styled";
import axios from "axios";
import "./Profile.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import starGray from "../../../../Images/newProfile/Gray star.svg"
// import starGray from "../../../../Images/newProfile/"
import starYellow from "../../../../Images/newProfile/Yellow Star.svg"

import Submit from "../../../../Images/newProfileYellow/Send Message.png"

require('dotenv').config()

const Feedback = ({ theme, formData, setFormData, getUser, handleClickOpen }) => {
    const [stars, setStars] = useState(0);
    const [rate, setRate] = useState(0);
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [feed, setFeed] = useState("");


    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    const handleFeedback = async (e) => {
        e.preventDefault();
        if (rate >= 1) {

            const temp = { feed: feed, rate: rate }
            await axios.post(`${process.env.REACT_APP_URL}/user/feedback/${userId}`, temp)
                .then(response => {
                    getUser()
                })
            setFeed("")
            setRate(0)
            setStars(0)
            handleClickOpen();
        } else {
            notify("select the rating first");
            // alert("select the rating first")
        }
    }
    // useEffect(() => {
    //     let temp = {feed:feed,rate:rate}
    //     setFeed(temp)
    // },[feed,rate])



    return (
        <Column>
            <Column className="profile_section_heading">
                <div style={{ marginRight: "100px", width: "31%" }}> Rate Us</div>
                <div style={window.innerWidth<600?{display:"none"}:{}}> Message Us</div>
            </Column>
            <hr style={!theme ? { border: "0.5px solid #3d3d3d" ,width:"100%"} : { border: "0.5px solid rgb(178 173 173)",width:"100%" }} />
            <div className="feedback_section" >
                <div className="rating_div">
                    <h3>Rating</h3>
                    <Row
                        style={{
                            alignSelf: "center",
                            // marginBottom: "3rem",
                            marginTop: "1rem",
                        }}
                    >
                        <img
                            src={rate >= 1 || stars >= 1 ? starYellow : starGray}
                            onMouseOver={() => setStars(1)}
                            onMouseLeave={() => setStars(0)}
                            onClick={() => setRate(1)}
                        />
                        <img
                            src={rate >= 2 || stars >= 2 ? starYellow : starGray}
                            onMouseOver={() => setStars(2)}
                            onMouseLeave={() => setStars(0)}
                            onClick={() => setRate(2)}
                        />
                        <img
                            src={rate >= 3 || stars >= 3 ? starYellow : starGray}
                            onMouseOver={() => setStars(3)}
                            onMouseLeave={() => setStars(0)}
                            onClick={() => setRate(3)}
                        />
                        <img
                            src={rate >= 4 || stars >= 4 ? starYellow : starGray}
                            onMouseOver={() => setStars(4)}
                            onMouseLeave={() => setStars(0)}
                            onClick={() => setRate(4)}
                        />
                        <img
                            src={rate >= 5 || stars >= 5 ? starYellow : starGray}
                            onMouseOver={() => setStars(5)}
                            onMouseLeave={() => setStars(0)}
                            onClick={() => setRate(5)}
                        />
                    </Row>
                    <h5>rate your expriance here</h5>
                </div>
                {/* {window.innerWidth < 600 ? <hr style={theme ? { border: "0.5px solid #3d3d3d",margin:"25px 5px" } : { border: "0.5px solid rgb(178 173 173)",margin:"25px 5px" }} />
                    : null} */}
                <div className="feedback_div"
                style={window.innerWidth<600?{marginLeft:"0",margin:"35px 5px"}:{}}>
                <div style={window.innerWidth<600?{display:"block"}:{}}> Message Us</div>
                    {
                        window.innerWidth < 600 ? <hr style={!theme ? { border: "0.5px solid #3d3d3d", width: "100%",margin:"25px 5px" } : { border: "0.5px solid rgb(178 173 173)", width: "100%" ,margin:"25px 5px" }} />
                            :
                            <div></div>
                        }
                    <h3>Feedback</h3>
                    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <Textarea
                            style={theme === true ? {
                                backgroundColor: "#e0ded8", resize: "none", minHeight: "9rem", width: "65%", color: "black"
                            } : { resize: "none", minHeight: "9rem", width: "65%", color: "white" }}
                            className="feedback_form"
                            placeholder='Give Your Feedback Here'
                            onChange={(e) => setFeed(e.target.value)}
                        ></Textarea>
                        {/* <Button
                            style={{
                                alignSelf: "center",
                            }}
                            onClick={handleFeedback}
                        >
                            Submit
                        </Button> */}
                        <div style={{
                            margin: "5px",
                        }}
                            onClick={handleFeedback}
                            className="disabled_save_butn  "
                        >
                            <img src={Submit} alt="" style={{ height: "15px", marginRight: "5px" }} />
                            Submit
                        </div>
                    </div>
                    <div>


                        <ToastContainer />
                    </div>

                </div>

            </div>
        </Column>

    );
};

export default Feedback;
