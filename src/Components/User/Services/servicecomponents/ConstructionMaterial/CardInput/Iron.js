import { FormControl, InputLabel, MenuItem, TextField, Select, ListItem, List, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Iron({description,setDescription, getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()
    const [selectedtype, setSelectedType] = useState("")

    const types = dropdownData?.iron_mark;

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
            if (selectedtype === "") {
                notify('Please select something');

            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
            else if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else {
                setModalOpen(true)
            }
        }
    }

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
            else if ((selectedtype !== "") && quantity > 0) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setSelectedType("")
                getCart()
            }
            else if (selectedtype === "") {
                notify('Please select something');
            }
            else if (quantity <= 0) {
                notify('The quantity should be greater than 0')
            }
        }
    }

    const useStyles = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            // minWidth: 200,

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                borderRadius: "5px 5px 0 0",
                color: "white"
            }
        },
        icon: {
            fill: "#ffb600"
        },
        root: {
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent"
            }
        },
        input: {
            color: "white",   
            "& input::placeholder":{color:"#fffafa"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"white"},
            "&.MuiAutocomplete-listbox": {backgroundColor:"white", color:"black"}
        },
        input1: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
        },
        inputtheme:{
            color: "black",
            "& input::placeholder":{color:"#000000"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"#000000"}
        },
        inputtheme1:{
            color: "black",
            "& input::placeholder":{color:"#000000"},
            "& .MuiInputBase-input": {color:"#000000"}
        },
        overflow: "hidden"
    }));
    useEffect(() => {
        setData({ type: selectedtype })

    }, [selectedtype])

    const classes = useStyles()


    const [placeholder1, setPlaceholder1]=useState("Iron marks")
    const [more, setMore]=useState(false)
    useEffect(()=>{
        setSelectedType("")
    }, [more])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity("")
            setSelectedType("")
        }
    }, [modalopen])


    return (
        <div className="selected-item">
        <div className="selected-header">Iron</div>
        <div className="description">Select Iron mark</div>



    { more===false &&
       <div>
        <Autocomplete
        value={more===false?selectedtype:""}
        id="combo-box-demo"
        onChange={(event, newInputValue) => {
            setSelectedType(!newInputValue?"":newInputValue);
            }}
        options={types?.length>0?types:[]}
        classes={{
            listbox: theme?classes.input:""
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search Iron mark")}} onBlur={()=>{setPlaceholder1("Iron marks")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
        )}
      />


    <div style={{marginTop:'9.5%', marginBottom:'5%'}}>Didn't find your mark? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>

    </div>  
      }


     {more===true &&
        <div>
        <div className="quantity1" style={{ marginTop: "2%", width: "100%", height: "60px" }}>
        <TextField autoComplete="off" type="text" value={selectedtype} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedType(e.target.value)} name="BrandInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Iron mark" variant="outlined" />
        </div>
        <div className='span-container' style={{marginTop:'5%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>

        </div>
    }




     {(selectedtype !=="")
     &&

     <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
     <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />
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

export default Iron
