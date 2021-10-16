import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import validate from "validator";
import { SimCardTwoTone } from "@material-ui/icons";
import axios from "axios";
import "./Profile.css"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import EditIcon from "../../../../Images/newProfileYellow/Edit profile.png"
import DeleteIcon from "../../../../Images/newProfileYellow/Delete.png"


require('dotenv').config()

const EditAddress = ({ theme, setCurrentSection, currentSection, siteNo, site, setSite, getSite, handleClickOpen }) => {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [buildingname, setBuildingname] = useState(site[siteNo]?.building_name ? site[siteNo]?.building_name : "");
    const [doorno, setDoorno] = useState(site[siteNo]?.door_no ? site[siteNo]?.door_no : "");
    const [street, setStreet] = useState(site[siteNo]?.street ? site[siteNo]?.street : "");
    const [landmark, setLandmark] = useState(site[siteNo]?.landmark ? site[siteNo]?.landmark : "");
    const [city, setCity] = useState(site[siteNo]?.city ? site[siteNo]?.city : "");
    const [state, setState] = useState(site[siteNo]?.state ? site[siteNo]?.state : "");
    const [pin, setPin] = useState(site[siteNo]?.pin ? site[siteNo]?.pin : "");
    const [addtitle, setAddtitle] = useState(site[siteNo]?.add_title ? site[siteNo]?.add_title : "");
    const [editAddress, setEditAddress] = useState(false)
    const [editable, seteditable] = useState()

    let temp;
    useEffect(() => {
        temp = site[siteNo]
        temp.building_name = buildingname
        temp.door_no = doorno
        temp.street = street
        temp.landmark = landmark
        temp.city = city
        temp.state = state
        temp.pin = pin
        temp.add_title = addtitle


    }, [buildingname, doorno, street, landmark, city, state, pin, addtitle])


    const handleUpdate = async (e) => {
        e.preventDefault();
        let arr = []
        for (var i = 0; i < site?.length; i++) {
            if (i === siteNo) {
                arr.push(temp)
            }
            else arr.push(site[i])
        }
        setSite(arr)
        await axios.post(`${process.env.REACT_APP_URL}/user/update_site/${userId}`, site)
            .then(response => {
                setEditAddress(false)

            })
        getSite();

        setCurrentSection(7)
        handleClickOpen();


    }
    const handleDelete = async (e) => {
        e.preventDefault();

        let arr = site.filter((item, index) => index !== siteNo)
        setSite(arr)
        await axios.post(`${process.env.REACT_APP_URL}/user/update_site/${userId}`, arr)
            .then(response => {
                getSite();
            })


        setCurrentSection(7)

    }

    const handleClick = () => {
        setCurrentSection(7)
    }

    const handelEditAddress = (a) => {

        a.preventDefault()
        if (editAddress === true) {
            // seteditable(false)
            // setCurrentSection(0)
            setEditAddress(false)
        } else {
            // seteditable(true)
            setEditAddress(true)
        }

    }

    // useEffect(() => {
    //     if (editable === false) {
    //         setEditAddress(false)
    //     } else {
    //         setEditAddress(true)
    //     }
    // }, [editable])
    return (
        <>
            {window.innerWidth < 600 ?
                <form
                    style={{
                        width: "100%",
                    }}
                >

                    <div className="backArrow" onClick={handleClick}>
                        <span>
                            <ArrowBackIosIcon />
                        </span>
                        <h4>back</h4>
                    </div>
                    <Row>
                        {/* <div style={{ margin: "10px" }}> */}

                        Edite site Address
                        {/* </div> */}
                    </Row>
                    <Row className="input_orientation">
                        <Column className="inputs_coloum">
                            <label htmlFor="">Building Name</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Building Name'
                                id='name'
                                type='text'
                                onChange={(e) => setBuildingname(e.target.value)}
                                value={buildingname}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Area/Street</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='Area/Street'
                                id='company'
                                type='text'
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">City</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='City'
                                id='phone'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Pincode</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='Pincode'
                                id='phone'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">H No / Door No</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='H No / Door No'
                                id='title'
                                type='text'
                                onChange={(e) => setDoorno(e.target.value)}
                                value={doorno}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Landmark</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='Landmark'
                                id='email'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                                style={{ marginBottom: "2rem" }}
                            />

                            <label htmlFor="">State</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='State'
                                id='wpp'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Address Title</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}

                                placeholder='Address Title'
                                id='wpp'
                                type='text'
                                onChange={(e) => setAddtitle(e.target.value)}
                                value={addtitle}
                                style={{ marginBottom: "2rem" }}
                            />
                        </Column>
                    </Row>
                    <div className="btn-container-edit-add">
                        <Button
                            style={{
                                // position: "relative",
                                // left: "43%",
                                // transform: "translate(-50%)",
                            }}
                            onClick={handleUpdate}
                        >
                            Update
                        </Button>
                        <Button
                            className="del-edit-add-btn"
                            style={{
                                // position: "relative",
                                // left: "47%",
                                // transform: "translate(-50%)",
                                backgroundColor: "transparent",
                                border: "1px solid #FFB600",
                                color: "#FFB600"
                            }}
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                    </div>

                </form>
                :
                <form
                    style={{
                        width: "100%",
                    }}
                >

                    <div className="backArrow" onClick={handleClick}>
                        <span>
                            <ArrowBackIosIcon />
                        </span>
                        <h4>back</h4>
                    </div>
                    <Row>
                        <div style={{ margin: "10px" }}>

                            Edite site Address
                        </div>
                    </Row>

                    <Row className="input_orientation">
                        {/* {!editAddress ?
                        <div style={{display:"flex"}}>
                            <div
                                // onClick={handleformdata}
                                className="disabled_save_butn"
                                style={{  marginRight: "2px" }}
                            >
                                <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                                save
                            </div>
                            <div
                                onClick={() => seteditable(true)}
                                className="disabled_save_butn"
                            >
                                <img src={EditIcon} alt="" style={{ height: "20px", marginRight: "2px" }} />
                                cancle
                            </div>
                        </div>
                        :
                        <div></div>
                        } */}
                        <Column className="inputs_coloum">
                            {/* {
                                !editAddress ?
                                    <div style={{
                                        display: "flex", alignItems: "center"
                                    }} >

                                        <div className="logout_btn " style={{ margin: "2rem 0", marginRight: "15px"}} onClick={(a) => handelEditAddress(a)} >
                                            <button
                                                // className="disabled_save_butn"
                                            style={{ display: "flex", alignItems: "center" ,width:"inherit",backgroundColor:"#ffb600" }}
                                            >
                                                Edit Profile</button>
                                        </div>
                                        <div className="del-edit-add-btn delete_icon" style={{ height: "max-content" }} onClick={handleDelete} >
                                            <img src={DeleteIcon} alt="" />
                                        </div>
                                    </div>
                                    :
                                    <div style={{ display: "flex" ,width:"inherit"}}>
                                        <div
                                            onClick={handleUpdate}
                                            className="disabled_save_butn"
                                            style={{ marginRight: "2px" }}
                                        >
                                            save
                                        </div>
                                        <div
                                            onClick={() => setEditAddress(false)}
                                            className="disabled_save_butn"
                                        >
                                            cancle
                                        </div>
                                    </div>
                                // <div className="logout_btn" style={{margin:"2rem 0"}} onClick={(a) => handelEditAddress(a)}  >
                                //     <button
                                //         style={{ display: "flex", alignItems: "center" }}>
                                //         Cancle Edit </button>
                                // </div>

                            } */}
                            <div className="btn-container-edit-add">
                                <Button
                                    style={{
                                        marginRight: "5px"
                                    }}
                                    onClick={handleUpdate}
                                >
                                    Update
                                </Button>
                                <Button
                                    className="del-edit-add-btn"
                                    style={{
                                        // position: "relative",
                                        // left: "47%",
                                        // transform: "translate(-50%)",
                                        backgroundColor: "transparent",
                                        border: "1px solid #FFB600",
                                        color: "#FFB600"
                                    }}
                                    onClick={handleDelete}
                                >
                                    Delete
                                </Button>
                            </div>
                            <label htmlFor="">Building Name</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Building Name'
                                id='name'
                                type='text'
                                onChange={(e) => setBuildingname(e.target.value)}
                                value={buildingname}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Area/Street</label>

                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Area/Street'
                                id='company'
                                type='text'
                                onChange={(e) => setStreet(e.target.value)}
                                value={street}
                                style={{ marginBottom: "2rem" }}
                            />

                        </Column>

                        <Column className="inputs_coloum" >
                            <label htmlFor="">City</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='City'
                                id='phone'
                                type='text'
                                onChange={(e) => setCity(e.target.value)}
                                value={city}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Pincode</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Pincode'
                                id='phone'
                                type='text'
                                onChange={(e) => setPin(e.target.value)}
                                value={pin}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">H No / Door No</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='H No / Door No'
                                id='title'
                                type='text'
                                onChange={(e) => setDoorno(e.target.value)}
                                value={doorno}
                                style={{ marginBottom: "2rem" }}
                            />

                        </Column>
                        <Column className="inputs_coloum" >
                            <label htmlFor="">Landmark</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Landmark'
                                id='email'
                                type='text'
                                onChange={(e) => setLandmark(e.target.value)}
                                value={landmark}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">State</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='State'
                                id='wpp'
                                type='text'
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                style={{ marginBottom: "2rem" }}
                            />
                            <label htmlFor="">Address Title</label>
                            <Input
                                className={theme === true ? "white_input" : "dark_input"}
                                placeholder='Address Title'
                                id='wpp'
                                type='text'
                                onChange={(e) => setAddtitle(e.target.value)}
                                value={addtitle}
                                style={{ marginBottom: "2rem" }}
                            />
                        </Column>
                    </Row>


                </form>
            }
        </>
    );
};

export default EditAddress;
