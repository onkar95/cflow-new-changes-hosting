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

function Wood({description,setDescription, getCart, theme, formData, modalopen, setModalOpen, newRequest, setNewRequest, data, setData, quantity, setQuantity, setOpenSaved, currentUnit, setCurrentUnit, dropdownData }) {
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const history = useHistory()

    const types=dropdownData?.wood_type;
    const hardWoodTypes=dropdownData?.hard_wood_type;
    const engineeredWoodTypes=dropdownData?.engineered_wood_type;

    const [selectedbrand, setSelectedBrand]=useState("")
    const [selectedtype, setSelectedType]=useState("")
    const units = ["Ton", "Metric ton", "kilograms"]

    let quantitywithunit
    useEffect(() => {
        quantitywithunit = quantity + " " + currentUnit
        setNewRequest({ ...newRequest, quantity: quantitywithunit })
    }, [currentUnit, quantity])


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
                else if (selectedbrand === "" || selectedtype === "") {
                    notify('Please select something');
                }
                else if (quantity <= 0 && !currentUnit) {
                    notify('Select a unit and the quantity should be greater than 0')
                }
                else if (!currentUnit) {
                    notify('Select a unit')
                }
                else if (quantity <= 0) {
                    notify('The quantity should be greater than 0')
                }
                else {
                    setModalOpen(true)             
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
        formControl1: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: "10%",

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
        condition: {
            "& .MuiFormControlLabel-label": {
                color: "#ffb600"
            }
        },
        overflow: "hidden",
        dropdownStyle: 
        {
          backgroundColor:'white',
        },
        "@global":{
            /*".MuiSelect-selectMenu": {
               height:"70%",
               marginTop:"15%"
            },*/
            ".MuiSelect-outlined.MuiSelect-outlined":{
                paddingTop:"20px"
            }
        }
    }));


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
            else if ((selectedbrand!=="" && selectedtype !== "") && quantity > 0 && currentUnit) {
                setNewRequest({ ...newRequest, quantity: quantity })
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setQuantity(0)
                setCurrentUnit("")
                setSelectedBrand("")
                setSelectedType("")
                setSelectedType("")
                getCart()
            }
            else if ( selectedbrand === "" || selectedtype === "") {
                notify('Please select something');
            }
            else if (quantity <= 0 && !currentUnit) {
                notify('Select a unit and the quantity should be greater than 0')
            }
            else if (!currentUnit) {
                notify('Select a unit')
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
        setData({ brand: selectedbrand, type: selectedtype })

    }, [selectedbrand, selectedtype])

    useEffect(()=>{
        if(modalopen===false){
            setQuantity("")
            setCurrentUnit("")
            setSelectedBrand("")
            setSelectedType("")
            setSelectedType("")
        }
    }, [modalopen])

    const [placeholder1, setPlaceholder1]=useState("Wood types")
    const [placeholder2, setPlaceholder2]=useState("Hard/engineered wood types")

    const classes = useStyles()

    return (
        <div className="selected-item">
        <div className="selected-header">Woods</div>
        <div className="description" style={{marginBottom:'30px'}}>Add woods to your products.</div>
        <div className="description">Select name, grade and type.</div>

  
       <div>
        <Autocomplete
        value={selectedbrand}
        id="combo-box-demo"
        onChange={(event, newInputValue) => {
            setSelectedBrand(!newInputValue?"":newInputValue);
            }}
        options={types?.length>0?types:[]}
        classes={{
            listbox: theme?classes.input:""
          }}
        getOptionLabel={option => option}
        style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
        renderInput={params => (
          <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search Wood type")}} onBlur={()=>{setPlaceholder1("Wood types")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
        )}
      />




      <Autocomplete
      value={(selectedtype)}
      id="combo-box-demo"
      onChange={(event, newInputValue) => {
          setSelectedType(!newInputValue?"":newInputValue);
          }}
      options={(selectedbrand==="Hard Wood" && hardWoodTypes.length>0)?hardWoodTypes:(selectedbrand==="Engineered Wood" && engineeredWoodTypes.length>0)?engineeredWoodTypes:[]}
      classes={{
        listbox: theme?classes.input:""
      }}
      getOptionLabel={option => option}
      style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
      renderInput={params => (
        <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search hard/engineered wood type")}} onBlur={()=>{setPlaceholder2("Hard/engineered wood types")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
      )}
    />


    </div>  
      







    {(selectedbrand !=="" && selectedtype !=="")
        &&
        <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "120px", display:'flex' }}>
        <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "45%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />

        {/*<select className="units" onChange={(e)=>{setCurrentUnit(e.target.value)}} style={theme?{backgroundColor:"#D8D8D8", color:"black"}:{}}>
        <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Units</option>
        {units?.map((value, index)=>(
            <option style={theme?{backgroundColor:"white", color:"black"}:{}}>{value}</option>
        ))}
        </select>*/}

        <FormControl
        variant='outlined'
        className={classes.formControl1}
        InputProps={{ disableOutline: true }}
        style={{height:"45%", width: "50%", marginLeft:"10px", backgroundColor:"transparent"}}
        >

        <Select
            className={classes.selectEmpty}
            id='demo-simple-select'
            inputProps={{ classes: { icon: classes.icon } }}
            style={{ color: theme?"black":"white", height:"100%", backgroundColor:theme?"#D8D8D8":"black" }}
            displayEmpty
            MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left"
                },
                getContentAnchorEl: null,
                classes: { paper: theme?classes.dropdownStyle:"" }
              }}
        >
        <MenuItem disabled style={theme?{color:"black"}:{color:"white"}}>Units</MenuItem>
            {units?.map((filter, index) => (
                <MenuItem
                    style={{ color: theme?"black":"white" }}
                    className='filter_itemuser'
                    onClick={() =>
                        setCurrentUnit(filter)
                    }
                    value={index}
                >
                    {filter}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
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

export default Wood