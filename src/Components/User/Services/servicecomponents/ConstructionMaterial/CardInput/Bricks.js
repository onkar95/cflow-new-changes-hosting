import { makeStyles, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Bricks({ description,setDescription,getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [clay, setClay] = useState(false)
    const [cement, setCement] = useState(false)
    const [fly, setFly] = useState(false)

    const notify = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const handlemodal = () => {
        if (userId === undefined) {
            alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if ((clay === true || cement === true || fly === true) && quantity > 0) {
                setModalOpen(true)
            }
            else if (clay === false && cement === false && fly === false) {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
            }
        }

    }

    useEffect(() => {
        if (clay) {
            setData({ type: "clay" })
        }
        else if (cement) {
            setData({ type: "cement" })
        }
        else if (fly) {
            setData({ type: "fly" })
        }
    }, [clay, cement, fly])

    useEffect(() => {
        if (clay) {
            setCement(false)
            setFly(false)
        }

    }, [clay])
    useEffect(() => {
        if (cement) {
            setClay(false)
            setFly(false)
        }

    }, [cement])
    useEffect(() => {
        if (fly) {
            setCement(false)
            setClay(false)
        }

    }, [fly])

    const handleCart = async (e) => {
        e.preventDefault()
        if (userId === undefined) {
            alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if ((clay === true || cement === true || fly === true) && quantity > 0) {
                setNewRequest({ ...newRequest, quantity: quantity })


                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setClay(false)
                setCement(false)
                setFly(false)
                getCart()
            }
            else if (clay === false && cement === false && fly === false) {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else {
                notify('Please select something');
            }
        }
    }
    const useStyles = makeStyles({
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"
            }
        },
        input: {
            color: "white",
            "& input::placeholder": { color: "#fffafa" },
            "& .MuiInputBase-input": { height: '0.3rem' }
        },
        input1: {
            color: "white",
            "& input::placeholder": { color: "#fffafa" },
        },
        inputtheme: {
            color: "black",
            "& input::placeholder": { color: "#000000" },
            "& .MuiInputBase-input": { height: '0.3rem', color: "#000000" }
        },
        inputtheme1: {
            color: "black",
            "& input::placeholder": { color: "#000000" },
            "& .MuiInputBase-input": { color: "#000000" }
        },
        overflow: "hidden"
    });

    useEffect(() => {
        if (modalopen === false) {
            setQuantity("")
            setClay(false)
            setCement(false)
            setFly(false)
        }
    }, [modalopen])


    const classes = useStyles()
    return (
        <div className="selected-item">
            <div className="selected-header">Bricks</div>
            <div className="description" style={{ marginBottom: '50px' }}>Add bricks to your products.</div>
            <div className="description" style={{ marginBottom: '30px' }}>Save brick type</div>

            <div>
                <div className="checkbox" style={theme ? { backgroundColor: "#D8D8D8" } : {}} onClick={() => setClay(!clay)}>
                    <label for="checkbutton" className="checkboxlabel">Clay</label>
                    <input type="checkbox" className="checkbutton" checked={clay === true} onChange={(e) => setClay(e.target.value)}></input>
                </div>

                <div className="checkbox" style={theme ? { backgroundColor: "#D8D8D8" } : {}} onClick={() => setCement(!cement)}>
                    <label for="checkbutton" className="checkboxlabel">Cement</label>
                    <input type="checkbox" className="checkbutton" checked={cement === true} onChange={(e) => setCement(e.target.value)}></input>
                </div>

                <div className="checkbox" style={theme ? { backgroundColor: "#D8D8D8" } : {}} onClick={() => setFly(!fly)}>
                    <label for="checkbutton" className="checkboxlabel">Fly ash</label>
                    <input type="checkbox" className="checkbutton" checked={fly === true} onChange={(e) => setFly(e.target.value)}></input>
                </div>

            </div>
            {(clay === true || cement === true || fly === true)
                &&
                <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display: 'flex' }}>
                    <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme ? "#D8D8D8" : "#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme ? classes.inputtheme1 : classes.input1 }} placeholder="Quantity" variant="outlined" />
                </div>
            }

            <div style={{ margin: "5px", marginTop: "20px" }}>
                {window.innerWidth > 600 ?
                    <textarea style={theme ? { color: "black", backgroundColor: "#D8D8D8" } : { color: "white", backgroundColor: "#08090c" }}
                        className="description_textarea" name="" id="" cols="60" rows="10"
                        placeholder="describe your order here"
                        // value={description}
                        onChange={(a) => setDescription(a.target.value)}

                    >
                    </textarea> :
                    <textarea style={theme ? { color: "black", backgroundColor: "#D8D8D8" } : { color: "white", backgroundColor: "#08090c" }}
                        className="description_textarea" name="" id="" cols="40" rows="10"
                        placeholder="describe your order here"
                        // value={description}
                        onChange={(a) => setDescription(a.target.value)}
                    >
                    </textarea>
                }
            </div>

            <div className="cement-bottom-buttons">
                <Button variant="contained" className="cement-cart-button" onClick={handleCart}>
                    ADD TO CART
                </Button>
                <Button variant="contained" className="cement-cart-button1" onClick={handlemodal}>
                    Request
                </Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Bricks