import { FormControl, InputLabel, MenuItem, TextField, Checkbox, Select, ListItem, List, Typography, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";

function Paint({ getCart, theme, formData, modalopen, setModalOpen, data, setData, newRequest, setNewRequest, setOpenSaved, dropdownData, currentUnit, setCurrentUnit, quantity, setQuantity }) {
    const [active, setActive] = useState(0)
    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const units=["kilograms", "litre"]
    const units1=["kilograms"]
    const history = useHistory()


    const surfaces = dropdownData?.paint_surface;
    const brands = dropdownData?.paint_brands;
    const types = dropdownData?.paint_types;
    const puttybrands = dropdownData?.putty_brands;
    const puttytypes = dropdownData?.putty_types;

    console.log(surfaces, brands, dropdownData)

    const [selectedbrand, setSelectedBrand] = useState(null)
    const [selectedtype, setSelectedType] = useState(null)
    const [selectedsurface, setSelectedSurface] = useState(null)
    const [selectedputtybrand, setSelectedPuttybrand] = useState(null)
    const [selectedputtytype, setSelectedPuttytype] = useState(null)
    const [trade, setTrade] = React.useState('Non-Trade');
    const [trade1, setTrade1] = React.useState('Non-Trade');
    const trades = ["Non-Trade", "Trade"]
    const trades1 = ["Non-Trade", "Trade"]
    useEffect(() => {
        setNewRequest({ ...newRequest, trade: trade === "Trade" ? true : false })
        console.log(trade)
    }, [trade])
    useEffect(() => {
        setNewRequest({ ...newRequest, trade: trade1 === "Trade" ? true : false })
        console.log(trade)
    }, [trade1])

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

    
    const useStyles = makeStyles({
        formControl: {
            //   margin: theme.spacing(1),
            //marginRight: theme.spacing(2),
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
            //marginRight: theme.spacing(2),
            minWidth: "9%",

            backgroundColor: "#08090C",
            color: "white",
            height: "100%",

            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid transparent",
                // borderRadius: "5px 5px 0 0",
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
        input1: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
        },
        input: {
            color: "white",
            "& input::placeholder":{color:"#fffafa"},
            "& .MuiInputBase-input": {height:'0.3rem', color:"white"},
            "&.MuiAutocomplete-listbox": {backgroundColor:"white", color:"black"}
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

    });
    const useStyles1 = makeStyles((theme) => ({
        formControl: {
            //   margin: theme.spacing(1),
            marginRight: theme.spacing(2),
            minWidth: 200,

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
        }
    }));

    const [color, setColor] = useState("")
    const classes = useStyles()
    const classes1 = useStyles1()

    const handlemodal = () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if(quantity<=0){
                notify("The quantity should be greater than 0")
            }
            else if (selectedbrand === null || selectedtype === null || selectedsurface === null || color === "") {
                console.log("fill")
                notify('Please fill all the details');
            }
            else {

                setModalOpen(true)
            }
        }

    }
    const handleCart = async () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else if(quantity<=0){
                notify("The quantity should be greater than 0")
            }
            else if (selectedbrand === null || selectedtype === null || selectedsurface === null || color === "") {
                console.log("fill")
                notify('Please fill all the details');
            }
            else {

                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {

                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setSelectedBrand(null)
                setSelectedType(null)
                setSelectedSurface(null)
                getCart()
            }
        }
    }
    const handlemodal1 = () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (selectedputtybrand === null || selectedputtytype === null) {
                notify('Please fill all the details');
            }
            else if(quantity<=0){
                notify("The quantity should be greater than 0")
            }
            else if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else {
                setModalOpen(true)
            }
        }

    }
    const handleCart1 = async () => {
        if (userId === undefined) {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else {
            if (selectedputtybrand === null || selectedputtytype === null) {
                notify('Please fill all the details');
            }
            else if(quantity<=0){
                notify("The quantity should be greater than 0")
            }
            else if (!formData?.phone_no || !formData?.first_name) {
                notify('Both name and phone no have to be compulsory added in Profile -> Personal Details')
            }
            else {
                console.log(newRequest, "add to cart")
                await axios.post(`${process.env.REACT_APP_URL}/product/add_to_cart/${userId}`, newRequest)
                    .then(function (response) {
                        console.log(response, "add")
                    })
                setOpenSaved(true)
                setSelectedPuttybrand(null)
                setSelectedPuttytype(null)
                getCart()
            }
        }
    }
    useEffect(() => {
        setData({  brand: selectedbrand, type: selectedtype, size: selectedsurface, color: color  })


    }, [selectedbrand, selectedtype, selectedsurface])

    useEffect(() => {
        setData( { brand: selectedputtybrand, type: selectedputtytype  })
    }, [selectedputtybrand, selectedputtytype])

    useEffect(()=>{
        if(modalopen===false){
            setSelectedBrand(null)
            setSelectedType(null)
            setSelectedSurface(null)
            setSelectedPuttybrand(null)
            setSelectedPuttytype(null)
        }
    }, [modalopen])

    const [placeholder1, setPlaceholder1]=useState("Paint surfaces")
    const [placeholder2, setPlaceholder2]=useState("Paint brands")
    const [placeholder3, setPlaceholder3]=useState("Paint types")
    const [placeholder4, setPlaceholder4]=useState("Putty brands")
    const [placeholder5, setPlaceholder5]=useState("Putty types")



    const [more, setMore]=useState(false)

    useEffect(()=>{
        if(more===true){
            setSelectedPuttybrand("")
            setSelectedPuttytype("")
            setQuantity("")
            setTrade1("Non-Trade")
            setSelectedBrand("")
            setSelectedType("")
            setSelectedSurface("")
            setColor("")
            setQuantity("")
            setTrade("Non-Trade")
        }
        else if(more===false){
            setSelectedPuttybrand("")
            setSelectedPuttytype("")
            setQuantity("")
            setTrade1("Non-Trade")
            setSelectedBrand("")
            setSelectedType("")
            setSelectedSurface("")
            setColor("")
            setQuantity("")
            setTrade("Non-Trade")
        }
    },[more])

    useEffect(()=>{
        if(active===0){
            setNewRequest({...newRequest, type:"Paint"})
            setSelectedPuttybrand("")
            setSelectedPuttytype("")
            setMore(false)
            setQuantity("")
            setTrade1("Non-Trade")
        }
        else if(active===1){
            setNewRequest({...newRequest, type:"Putty"})
            setSelectedBrand("")
            setSelectedType("")
            setSelectedSurface("")
            setColor("")
            setMore(false)
            setQuantity("")
            setTrade("Non-Trade")
        }
    },[active])

    return (
        <div className="selected-item">
            <div className="selected-header">Paints and putty</div>
            <div className="description" style={{marginBottom:'50px'}}>Add paint and putty to your products.</div>
            <div className="description" style={{marginBottom:'30px'}}>Select material</div>
            <div style={{display:'flex', justifyContent:'space-between'}}>

            <div className="checkbox" style={theme?{backgroundColor:"#D8D8D8", width:"40%"}:{width:"40%"}} onClick={()=>setActive(0)}>
            <label for="checkbutton" className="checkboxlabel">Paint</label>
            <input type="checkbox" className="checkbutton" checked={active===0}></input>
            </div>
    
            <div className="checkbox" style={theme?{backgroundColor:"#D8D8D8", width:"40%"}:{width:"40%"}} onClick={()=>setActive(1)}>
            <label for="checkbutton" className="checkboxlabel">Putty</label>
            <input type="checkbox" className="checkbutton" checked={active===1}></input>
            </div>
            </div>
                {(active===0 && more===false) &&
                    <div>
                    <Autocomplete
                    value={more===false?selectedsurface:""}
                    id="combo-box-demo"
                    onChange={(event, newInputValue) => {
                        setSelectedSurface(!newInputValue?"":newInputValue);
                        }}
                    options={surfaces?.length>0?surfaces:[]}
                    classes={{
                        listbox: theme?classes.input:""
                      }}
                    getOptionLabel={option => option}
                    style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
                    renderInput={params => (
                      <TextField  placeholder={placeholder1} onFocus={()=>{setPlaceholder1("Search paint surface")}} onBlur={()=>{setPlaceholder1("Paint surfaces")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
                    )}
                  />
        
        
        
        
                  <Autocomplete
                  value={more===false?selectedbrand:""}
                  id="combo-box-demo"
                  onChange={(event, newInputValue) => {
                      setSelectedBrand(!newInputValue?"":newInputValue);
                      }}
                  options={brands?.length>0?brands:[]}
                  classes={{
                      listbox: theme?classes.input:""
                    }}
                  getOptionLabel={option => option}
                  style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
                  renderInput={params => (
                    <TextField  placeholder={placeholder2} {...params}  variant="outlined" onFocus={()=>{setPlaceholder2("Search paint brand")}} onBlur={()=>{setPlaceholder2("Paint brands")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
                  )}
                />
        
        
                <div style={{marginTop:'10%', marginBottom:'5%'}}>Didn't find your brand and surface? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>
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
                style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
                renderInput={params => (
                  <TextField  placeholder={placeholder3} {...params}  variant="outlined" onFocus={()=>{setPlaceholder3("Search paint type")}} onBlur={()=>{setPlaceholder3("Paint types")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
                )}
              />
              <div class="button-group">
              <FormControl component="fieldset">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
              {trades.map((option)=>{
                  return (
                      <div>
                         <FormControlLabel
                         value={option}
                         control={<Radio color="secondary" />}
                         label={option}
                         classes={{root:trade===option?classes.condition:"" }}
                         labelPlacement="start"
                         checked={trade===option}
                         onChange={()=>setTrade(option)}
                    />
                      </div>
                  )
              })}
              </RadioGroup>
              </FormControl>
              </div>
              <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "50px", display:'flex' }}>
              <TextField autoComplete="off" id="outlined-basic20" type="text" value={color} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "250px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setColor(e.target.value)} name="Quantity" className={`${classes.root} InputField InputField2`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Enter color code or name" variant="outlined" />
              </div>
              {(selectedsurface !== "" && selectedbrand !== "" && selectedtype !== "" && color!=="")
                &&
                <div className="quantity quantity1" style={{ marginTop: "5%", width: "100%", height: "50px", marginBottom:"5%"}}>
                <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />

                {/*<select className="units" onChange={(e)=>{setCurrentUnit(e.target.value)}} style={theme?{backgroundColor:"#D8D8D8", color:"black", height:"100%"}:{height:"100%"}}>
                <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Units</option>
                {units?.map((value, index)=>(
                    <option style={theme?{backgroundColor:"white", color:"black"}:{}}>{value}</option>
                ))}
                </select>*/}

                <FormControl
                variant='outlined'
                className={classes.formControl1}
                InputProps={{ disableOutline: true }}
                style={{height:"100%", width: "50%", marginLeft:"10px", backgroundColor:"transparent"}}
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
                </div> 
                }









                {(active===0 && more===true) &&
                    <div>
                    <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
                    <TextField autoComplete="off" type="text" value={selectedsurface} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedSurface(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Surface" variant="outlined" />
                    </div>
                    <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
                    <TextField autoComplete="off" type="text" value={selectedbrand} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedBrand(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className:theme?classes.inputtheme: classes.input }} placeholder="Brand" variant="outlined" />
                    </div>
                    <div className='span-container' style={{marginTop:'4.9%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>
                    <Autocomplete
                    value={selectedtype}
                    id="combo-box-demo"
                    onChange={(event, newInputValue) => {
                        setSelectedType(!newInputValue?"":newInputValue);
                        }}
                    options={types?.length>0?types:[]}
                    classes={{
                        listbox: theme?classes.input:""
                      }} 
                    getOptionLabel={option => option}
                    style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
                    renderInput={params => (
                      <TextField  placeholder={placeholder3} {...params}  variant="outlined" onFocus={()=>{setPlaceholder3("Search paint type")}} onBlur={()=>{setPlaceholder3("Sizes")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
                    )}
                  />
                  <div class="button-group">
                  <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  {trades.map((option)=>{
                      return (
                          <div>
                             <FormControlLabel
                             value={option}
                             control={<Radio color="secondary" />}
                             label={option}
                             classes={{root:trade===option?classes.condition:"" }}
                             labelPlacement="start"
                             checked={trade===option}
                             onChange={()=>setTrade(option)}
                        />
                          </div>
                      )
                  })}
                  </RadioGroup>
                  </FormControl>
                  </div>
                  <div className="quantity" style={{ marginTop: "2%", width: "100%", height: "50px", display:'flex' }}>
                  <TextField autoComplete="off" id="outlined-basic20" type="text" value={color} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "250px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setColor(e.target.value)} name="Quantity" className={`${classes.root} InputField InputField2`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Enter color code or name" variant="outlined" />
                  </div>
                  {(selectedsurface !== "" && selectedbrand !== "" && selectedtype !== "" && color!=="")
                    &&
                    <div className="quantity quantity1" style={{ marginTop: "5%", width: "100%", height: "50px", display:'flex', marginBottom:"5%" }}>
                    <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />

                    {/*<select className="units" onChange={(e)=>{setCurrentUnit(e.target.value)}} style={theme?{backgroundColor:"#D8D8D8", color:"black", height:"100%"}:{height:"100%"}}>
                    <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Units</option>
                    {units?.map((value, index)=>(
                        <option style={theme?{backgroundColor:"white", color:"black"}:{}}>{value}</option>
                    ))}
                    </select>*/}

                    <FormControl
                    variant='outlined'
                    className={classes.formControl1}
                    InputProps={{ disableOutline: true }}
                    style={{height:"100%", width: "50%", marginLeft:"10px", backgroundColor:"transparent"}}
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
                    </div>
                }

                {active===0 &&
                    <div className="cement-bottom-buttons cement-bottom-buttons1">
                    <Button variant="contained" className="cement-cart-button" onClick={handleCart}>
                        ADD TO CART
                    </Button>
                    <Button variant="contained" className="cement-cart-button1" onClick={handlemodal}>
                        Request
                    </Button>
                </div>
                }
  



                {(active===1 && more===false) &&
                    <div>
                    <Autocomplete
                    value={more===false?selectedputtybrand:""}
                    id="combo-box-demo"
                    onChange={(event, newInputValue) => {
                        setSelectedPuttybrand(!newInputValue?"":newInputValue);
                        }}
                    options={puttybrands?.length>0?puttybrands:[]}
                    classes={{
                        listbox: theme?classes.input:""
                      }} 
                    getOptionLabel={option => option}
                    style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom: '1rem' }}
                    renderInput={params => (
                      <TextField  placeholder={placeholder4 } onFocus={()=>{setPlaceholder4("Search putty brand")}} onBlur={()=>{setPlaceholder4("Putty brands")}} {...params}  variant="outlined"  classes={{ root: theme?classes.inputtheme:classes.input }} />
                    )}
                  />
        
        
        
        
                  <Autocomplete
                  value={more===false?selectedputtytype:""}
                  id="combo-box-demo"
                  onChange={(event, newInputValue) => {
                      setSelectedPuttytype(!newInputValue?"":newInputValue);
                      }}
                  options={puttytypes?.length>0?puttytypes:[]}
                  classes={{
                      listbox: theme?classes.input:""
                    }}
                  getOptionLabel={option => option}
                  style={{ width: '100%', backgroundColor: theme?"#D8D8D8":"#08090C", marginBottom:'1rem' }}
                  renderInput={params => (
                    <TextField  placeholder={placeholder5} {...params}  variant="outlined" onFocus={()=>{setPlaceholder5("Search putty type")}} onBlur={()=>{setPlaceholder5("Putty types")}} classes={{ root: theme?classes.inputtheme:classes.input }} />
                  )}
                />
        
        
                <div style={{marginTop:'10%', marginBottom:'5%'}}>Didn't find your brand and surface? <span class="add-more" onClick={()=>{setMore(true)}}>Click here to add</span></div>

              <div class="button-group">
              <FormControl component="fieldset">
              <FormLabel component="legend"></FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
              {trades.map((option)=>{
                  return (
                      <div>
                         <FormControlLabel
                         value={option}
                         control={<Radio color="secondary" />}
                         label={option}
                         classes={{root:trade===option?classes.condition:"" }}
                         labelPlacement="start"
                         checked={trade===option}
                         onChange={()=>setTrade1(option)}
                    />
                      </div>
                  )
              })}
              </RadioGroup>
              </FormControl>
              </div>

              {(selectedputtybrand!=="" && selectedputtytype!=="")
                &&
                <div className="quantity" style={{ marginTop: "5%", width: "100%", height: "50px", display:'flex', marginBottom:"5%" }}>
                <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />

                {/*<select className="units" onChange={(e)=>{setCurrentUnit(e.target.value)}} style={theme?{backgroundColor:"#D8D8D8", color:"black", height:"100%"}:{height:"100%"}}>
                <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Units</option>
                {units1?.map((value, index)=>(
                    <option style={theme?{backgroundColor:"white", color:"black"}:{}}>{value}</option>
                ))}
                </select>*/}

                <FormControl
                variant='outlined'
                className={classes.formControl1}
                InputProps={{ disableOutline: true }}
                style={{height:"100%", width: "50%", marginLeft:"10px", backgroundColor:"transparent"}}
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
                    {units1?.map((filter, index) => (
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
                </div> 
                }









                {(active===1 && more===true) &&
                    <div>
                    <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
                    <TextField autoComplete="off" type="text" value={selectedputtybrand} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedPuttybrand(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Brand" variant="outlined" />
                    </div>
                    <div className="quantity1" style={{ marginTop: "0%", width: "100%", height: "60px"   }}>
                    <TextField autoComplete="off" type="text" value={selectedputtytype} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "100%", height: "70%%", borderRadius: "10px", color: "white" }} onChange={(e) => setSelectedPuttytype(e.target.value)} name="GradeInput" className={`${classes.root} InputField1`} InputProps={{ className: theme?classes.inputtheme:classes.input }} placeholder="Type" variant="outlined" />
                    </div>
                    <div className='span-container' style={{marginTop:'4.9%', marginBottom:'5%'}}>Select from the existing options? <span class="add-more" onClick={()=>{setMore(false)}}>Click here</span></div>

                  <div class="button-group">
                  <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup row aria-label="position" name="position" defaultValue="top">
                  {trades.map((option)=>{
                      return (
                          <div>
                             <FormControlLabel
                             value={option}
                             control={<Radio color="secondary" />}
                             label={option}
                             classes={{root:trade===option?classes.condition:"" }}
                             labelPlacement="start"
                             checked={trade===option}
                             onChange={()=>setTrade1(option)}
                        />
                          </div>
                      )
                  })}
                  </RadioGroup>
                  </FormControl>
                  </div>

                  {(selectedputtybrand !== "" && selectedputtytype !== "" )
                    &&
                    <div className="quantity" style={{ marginTop: "10%", width: "100%", height: "50px", display:'flex', marginBottom:"5%" }}>
                    <TextField autoComplete="off" id="outlined-basic20" type="number" value={quantity} style={{ backgroundColor: theme?"#D8D8D8":"#08090C", width: "200px", height: "100%", borderRadius: "10px", color: "white" }} onChange={(e) => setQuantity(e.target.value)} name="Quantity" className={`${classes.root} InputField`} InputProps={{ className: theme?classes.inputtheme1:classes.input1 }} placeholder="Quantity" variant="outlined" />

                    {/*<select className="units" onChange={(e)=>{setCurrentUnit(e.target.value)}} style={theme?{backgroundColor:"#D8D8D8", color:"black", height:"100%"}:{height:"100%"}}>
                    <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Units</option>
                    {units1?.map((value, index)=>(
                        <option style={theme?{backgroundColor:"white", color:"black"}:{}}>{value}</option>
                    ))}
                    </select>*/}

                    <FormControl
                    variant='outlined'
                    className={classes.formControl1}
                    InputProps={{ disableOutline: true }}
                    style={{height:"100%", width: "50%", marginLeft:"10px", backgroundColor:"transparent"}}
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
                        {units1?.map((filter, index) => (
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
                    </div>
                }

                {active===1 &&
                    <div className="cement-bottom-buttons cement-bottom-buttons1">
                    <Button variant="contained" className="cement-cart-button" onClick={handleCart1}>
                        ADD TO CART
                    </Button>
                    <Button variant="contained" className="cement-cart-button1" onClick={handlemodal1}>
                        Request
                    </Button>
                </div>
                }
       
                <ToastContainer />
            </div>
    )
}

export default Paint