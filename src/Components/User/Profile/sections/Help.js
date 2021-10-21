import React, { useRef, useState } from "react";
import { Column, Button, Textarea } from "../../Styled/Styled";
import { GrAttachment } from "react-icons/gr";
import Submit from "../../../../Images/newProfileYellow/Send Message.png"
import Attachment from "../../../../Images/newProfileYellow/Attachment.png"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const Help = ({ theme, getUser, formData, handleClickOpen }) => {
  const inputFile = useRef(null);

  const onFileClick = () => {
    inputFile.current.click();
  };
  const [messageHelp, setMessageHelp] = useState("")
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
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

  const handleHelp = async (e) => {
    e.preventDefault();
    if (messageHelp != "") {
      // const message = { messageHelp: messageHelp }
      await axios.post(`${process.env.REACT_APP_URL}/user/request_help/${userId}`, messageHelp)
        .then(response => {
          getUser()
          console.log(response);
          setMessageHelp("")
        })
      setMessageHelp("")
      handleClickOpen();
    } else {
      notify("Enter message first");
      // alert("select the rating first")
    }
  }
  return (
    <>
      <div>
        <p>Help Center</p>
      </div>
      {/* {<hr style={{ width: "100%" }} />} */}
      <hr style={!theme ? { border: "0.5px solid #3d3d3d", width: "100%" } : { border: "0.5px solid rgb(178 173 173)", width: "100%" }} />

      <div className="help">

        <div className="help_ques_div">
          <div>
            <p style={theme ? { color: "black", fontWeight: "600" } : { color: "rgb(152 151 151)" }}>How can i track my order?</p>
            <ans style={theme ? { color: "black" } : { color: "white" }}>you will recive notifications to track your order you will be provided customer care numbers if you have any problem releated to order you can contact us</ans>
          </div>

          <div>
            <p style={theme ? { color: "black", fontWeight: "600" } : { color: "rgb(152 151 151)" }}>How can i change my shipping address?</p>
            <ans style={theme ? { color: "black" } : { color: "white" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa suscipit mollitia eius id. Corporis laborum temporibus eveniet vero fugit alias!</ans>
          </div>

          <div>
            <p style={theme ? { color: "black", fontWeight: "600" } : { color: "rgb(152 151 151)" }}>stil have question? <span style={{ color: "#ffb600", border: "none" }} href="">contact us</span></p>
          </div>

        </div>
        {window.innerWidth < 600 ? <hr style={!theme ? { border: "0.5px solid #3d3d3d", width: "100%" } : { border: "0.5px solid rgb(178 173 173)", width: "100%" }} />
          : null}
        <div className="help_text_div">
          <Column>

            <h3
              style={theme === true ? {
                // alignSelf: "center",
                color: "black",
                position: "relative",
                display: "inline",
                margin: "0.5rem 1rem",
                marginBottom: "1.3rem",
                // marginLeft:"20px"
                // marginTop: "3rem",
              } : {
                // alignSelf: "center",
                color: "white",
                position: "relative",
                display: "inline",
                margin: "0.5rem 1rem",
                marginBottom: "1.3rem",
              }}
            >
              Message
            </h3>
            <Textarea
              style={theme === true ? {
                backgroundColor: "#e0ded8", resize: "none",
                minHeight: "10rem",
                minWidth: "70%",
              } : {
                resize: "none",
                minHeight: "10rem",
                minWidth: "70%",
                backgroundColor: "#2d2d2d",
                color: "white"
              }}
              placeholder="Tell Us More About Your Problem"
              onChange={(a) => setMessageHelp(a.target.value)}
            ></Textarea>

            <input
              id="file-attach-help"
              type="file"
              ref={inputFile}
              style={{
                display: "none",
              }}
            />
            <div className="help_btns">
              <div
                style={{ margin: "3px", backgroundColor: "transparent", border: "2px solid #ffb600", color: "#ffb600" }}
                onClick={onFileClick}
                className="disabled_save_butn  "
              >
                {/* <GrAttachment  /> */}
                <img src={Attachment} style={{ height: "15px", marginRight: "5px" }} alt="" />
                Attach
              </div>
              <div
                style={{ margin: "3px" }}
                className="disabled_save_butn  "
                onClick={handleHelp}
              >
                <img src={Submit} alt="" style={{ height: "15px", marginRight: "5px" }} />
                Submit
              </div>
            </div>
            <ToastContainer />

          </Column>
        </div>

      </div>

    </>
  );
};

export default Help;
