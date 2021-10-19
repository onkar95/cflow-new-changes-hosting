import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Hero1 from '../../../Images/Banners/1.png'
import Hero10 from '../../../Images/Banners/10.png'
import Hero11 from '../../../Images/Banners/11.png'
import Hero12 from '../../../Images/Banners/12.png'
import Hero13 from '../../../Images/Banners/13.png'
import Hero14 from '../../../Images/Banners/14.png'
import Hero15 from '../../../Images/Banners/15.png'
import Hero16 from '../../../Images/Banners/16.png'
import Hero17 from '../../../Images/Banners/17.png'
import Hero18 from '../../../Images/Banners/18.png'
import Hero19 from '../../../Images/Banners/19.png'
import Hero2 from '../../../Images/Banners/2.png'
import Hero20 from '../../../Images/Banners/20.png'
import Hero21 from '../../../Images/Banners/21.png'
import Hero22 from '../../../Images/Banners/22.png'
import Hero23 from '../../../Images/Banners/23.png'
import Hero24 from '../../../Images/Banners/24.png'
import Hero25 from '../../../Images/Banners/25.png'
import Hero26 from '../../../Images/Banners/26.png'
import Hero27 from '../../../Images/Banners/27.png'
import Hero28 from '../../../Images/Banners/28.png'
import Hero29 from '../../../Images/Banners/29.png'
import Hero3 from '../../../Images/Banners/3.png'
import Hero30 from '../../../Images/Banners/30.png'
import Hero31 from '../../../Images/Banners/31.png'
import Hero32 from '../../../Images/Banners/32.png'
import Hero33 from '../../../Images/Banners/33.png'
import Hero34 from '../../../Images/Banners/34.png'
import Hero35 from '../../../Images/Banners/35.png'
import Hero36 from '../../../Images/Banners/36.png'
import Hero37 from '../../../Images/Banners/37.png'
import Hero4 from '../../../Images/Banners/4.png'
import Hero5 from '../../../Images/Banners/5.png'
import Hero6 from '../../../Images/Banners/6.png'
import Hero7 from '../../../Images/Banners/7.png'
import Hero8 from '../../../Images/Banners/8.png'
import Hero9 from '../../../Images/Banners/9.png'
import PopupSaved from '../../Popup/popupsaved/PopupSaved'
import Agents from './servicecomponents/Agents/Agents'
import CommercialVehicles from './servicecomponents/CommercialVehicles/CommercialVehicles'
import ConstructionChemicals from './servicecomponents/ConstructionChemicals/ConstructionChemicals'
import ConstructionMachines from './servicecomponents/ConstructionMachines/ConstructionMachines'
import ConstructionMaterial from './servicecomponents/ConstructionMaterial/ContructionMaterial'
import Sidemenu from './servicecomponents/sidemenu/sidemenu'
import VehicleDetail from './servicecomponents/VehicleDetail/VehicleDetail'
import './Services.css'
import { FormControl, MenuItem, Select, InputLabel } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}


function Services({
  cartLength,
  getCart,
  theme,
  formData,
  setCurrentSectionRequest,
  site,
  getAllVendor,
  currentSection,
  setCurrentSection,
  setCurrentSectionProfile,
  setCurrentSectionMain,
  clickedCard,
  setClickedCard,
  trigger,
  setTrigger,
}) {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      //   margin: theme.spacing(1),
      marginRight: theme.spacing(2),
      // minWidth: 150,
      backgroundColor: "#FFB600",
      borderRadius: theme.spacing(1),
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "1px solid black",
              borderRadius: "5px 5px 0 0",
              color:"white",
              backgroundColor:"transparent"
      }
  },
  formControl1: {
      //   margin: theme.spacing(1),
      marginRight: theme.spacing(2),
      // minWidth: 150,
      backgroundColor: "#202020",
      borderRadius: theme.spacing(1),
              borderRadius: "5px 5px 5px 5px",
              color:"white",
      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "0px",
              borderRadius: "5px 5px 0 0",
              color:"white"
      },
  },
    root: {
      flexGrow: 1,
      backgroundColor: '',
      width: '100%',
    },
  
    indicator: {
      backgroundColor: '#FFB600'
    },
  
    icon: {
      fill: "#ffb600"
    },
  
    dropdownStyle: 
    {
         backgroundColor:"white !important"
    },
  
    tabs: {
      backgroundColor: '#121111',
    },
    "@global":{
      ".MuiTabs-flexContainer": {
        borderBottom: "1px solid #2D2D2D"
      },
      ".MuiPaper-root": {
        backgroundColor: "black"
      },
      ".MuiPaper-elevation4": {
        boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)"
      },
      ".MuiSelect-outlined.MuiSelect-outlined":{
        backgroundColor: "transparent",
        //paddingTop:"20px",
    },
    ".MuiTabs-root":{
      minWidth:"100% !important"
    },
    ".MuiTabs-indicator": {
      minWidth: "300px !important"
    },
    ".MuiTab-textColorInherit.Mui-selected":{
      minWidth:"300px !important"
    },
    ".MuiTab-root": {
      minWidth: "360px"
    }
    }
  }))



  // const [currentSection, setCurrentSection] = useState(0)
  const [services, setServices]=useState([
    {
      tag:"Construction materials",
      index:0
    },
   /* {
      tag:"Agents",
      index:1
    },
    {
      tag:"Commercial vehicles",
      index:2
    },*/
    {
      tag:"Construction chemicals (coming soon)",
      index:4
    },
  ])
  const [selected, setSelected] = useState(null)
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem('profile'))?.data?.id
  )

  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const service = {
    0: 'Construction Materials',
    1: 'Agents',
    2: 'Commercial Vehicles',
    4: 'Construction Chemicals',
    5: 'Commercial Vehicles',
  }
  const img_arr = [
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Hero5,
    Hero6,
    Hero7,
    Hero8,
    Hero9,
    Hero10,
    Hero11,
    Hero12,
    Hero13,
    Hero14,
    Hero15,
    Hero16,
    Hero17,
    Hero18,
    Hero19,
    Hero20,
    Hero21,
    Hero22,
    Hero23,
    Hero24,
    Hero25,
    Hero26,
    Hero27,
    Hero28,
    Hero29,
    Hero30,
    Hero31,
    Hero32,
    Hero33,
    Hero34,
    Hero35,
    Hero36,
    Hero37,
  ]
  const [openSaved, setOpenSaved] = useState(false)
  const [open, setOpen] = React.useState(false)
  let initialarr = {
    service_type: service.currentSection,
    type: '',
    quantity: 0,
    typecapacity: 0,
    data: null,
    urgent: false,
    delivery_address: '',
    deliver_by: new Date(),
  }
  const [newRequest, setNewRequest] = useState(initialarr)
  const [dropdownData, setDropDownData] = useState([])
  const [chemicalDropDown, setChemicalDropDown] = useState([])

  // req.body.id,req.body.service_type,req.body.type, req.body.quantity, JSON.stringify(req.body.data),"pending",req.body.urgent,req.body.delivery_address,req.body.deliver_by

  useEffect(() => {
    setNewRequest({ ...newRequest, service_type: service[currentSection] })
  }, [currentSection])
  const handleClickOpen = () => {
    setOpen(true)
  }

  //dropdown api's
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/user/construction_material_dropdown`)
      .then((res) => {
        setDropDownData(res.data.data)
        console.log(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/user/construction_chemical_dropdown`)
      .then((res) => {
        setChemicalDropDown(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(()=>{
    console.log(currentSection)
  },[currentSection])
  return (
    <div className='service-user-container'>
      <div className='breadcrumbsuser'>
        <h3 style={{ margin: 0 }}>
          Home / <span style={{ color: '#FFB600' }}>Services</span>
        </h3>
      </div>
      {/* <div className="home-content-carousel">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
                    {
                        img_arr.map((img,index) => (
                            <div style={{height:"100%"}} key={index}>
                            <img alt="" 
                            src={img}
                            className="carousel-image"/>
                    </div>
                        ))
                    }
                </Carousel>
            </div> */}
      <div className='service-user-ourservice'>
        <h2 style={{ fontWeight: '700', paddingLeft: "2%" }}>Our Services</h2>
      </div>
      <div className='service-user-content'>
        {/* <div className='service-user-sidemenu'>
          <TopTab
            heme={theme}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
           <Sidemenu
            theme={theme}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />  
        </div> */}
        <div className={classes.root}>
        { window.screen.width>=870 && 
          <AppBar
            position='static'
            style={{
              backgroundColor: theme ? '#ffffff' : '#121111',
              color: theme ? 'black' : '',
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='simple tabs example'
              classes={{
                indicator: classes.indicator,
                tabs: classes.tabs,
              }}
            >
              <Tab style={{color:currentSection==0?"#ffb600":""}} label='Construction Materials' {...a11yProps(0)} />
              {/*<Tab label='Agents' {...a11yProps(1)} />
              <Tab label='Commercial Vehicles' {...a11yProps(2)} />*/}
              <Tab
              label={
                <span style={{ width: '100rem', fontSize: "0.85rem"}}>
                  Construction Chemicals{' '}
                  <span style={{ color: '#FFB600', backgroundColor:"rgba(255, 182, 0, 0.1)", padding:"5px" }}>
                    Coming Soon
                  </span>
                </span>
              }
              disabled
            />
          </Tabs>
            </AppBar> 
        }

        

          {/*<FormControl
          variant='outlined'
          className={`${classes.formControl1} req-dropdown`}
          InputProps={{ disableOutline: true}}
          style={{backgroundColor:theme?"white":"", color:theme?"black":"white", width:window.screen.width>400?"90%":"500px", marginLeft:"5%"}}
      >
          <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              inputProps={{classes:{icon:classes.icon}}}
              style={{backgroundColor:theme?"#f2f3f4":"", color:theme?"black":"white", height:"40px", fontSize:"small"}}
              classes={{
                  listbox: theme?classes.input:"",
                  list:theme?classes.condition:""
              }}
              MenuProps={{ classes: { list: theme?classes.dropdownStyle:"" } }}
          >
              {services.map((item, index) => (
                  <MenuItem
                      className='filter_itemuser'
                      onClick={() =>
                          setCurrentSection(item.index)
                      }
                      value={item.index}
                      style={{backgroundColor:theme?"white":"black", color:theme?"black":"white"}}
                  >
                      {item.tag}
                  </MenuItem>
              ))}
          </Select>
                    </FormControl>*/}
                    {
                      window.screen.width<870 &&
                    /*<select className="units" onChange={(e)=>{setCurrentSection(parseInt(e.target.value))}} style={theme?{backgroundColor:"#D8D8D8", color:"black", height:"40px", width:"90%", borderRadius:"5px"}:{height:"40px", width:"90%", borderRadius:"5px"}}>
                    <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled="disabled" selected="true">Services</option>
                    {services?.map((value, index)=>(
                        <option style={theme?{backgroundColor:"white", color:"black"}:{}} disabled={value.index!==0} value={value.index} onClick={(e)=>setCurrentSection(e.target.value)}>{value.tag}</option>
                    ))}
                    </select>*/
                    <FormControl
                    variant='outlined'
                    className={classes.formControl1}
                    InputProps={{ disableOutline: true }}
                    style={{height:"40px", width: "90%", marginLeft:"10px", backgroundColor:"transparent"}}
                    >
    
                    <Select
                        className={classes.selectEmpty}
                        id='demo-simple-select'
                        inputProps={{ classes: { icon: classes.icon } }}
                        style={{ color: theme?"black":"white", height:"40px", backgroundColor:theme?"#D8D8D8":"black" }}
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
                    <MenuItem disabled style={theme?{color:"black"}:{color:"white"}}>Services</MenuItem>
                        {services?.map((filter, index) => (
                            <MenuItem
                                style={{ color: theme?"black":"white" }}
                                className='filter_itemuser'
                                onClick={() =>
                                    filter.index===0?setCurrentSection(filter.index):""
                                }
                                disabled={filter.index!==0?true:false}
                                value={filter.index}
                            >
                                {filter.tag}
                            </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                    }
                    

          <TabPanel
            value={value}
            index={0}
            style={{
              backgroundColor: theme ? '#ffffff' : '#121111',
              color: theme ? 'black' : '',
              padding: window.screen.width>1400?'5rem':'0rem',
            }}
          >    
            {currentSection === 0 && (
              <ConstructionMaterial
                cartLength={cartLength}
                getCart={getCart}
                theme={theme}
                formData={formData}
                setCurrentSectionMain={setCurrentSectionMain}
                setCurrentSection={setCurrentSection}
                setCurrentSectionProfile={setCurrentSectionProfile}
                setOpenSaved={setOpenSaved}
                setCurrentSectionRequest={setCurrentSectionRequest}
                getAllVendor={getAllVendor}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                site={site}
                handleClickOpen={handleClickOpen}
                clickedCard={clickedCard}
                setClickedCard={setClickedCard}
                trigger={trigger}
                setTrigger={setTrigger}
                dropdownData={dropdownData}
              />
            )}
          </TabPanel>
          {/*<TabPanel value={value} index={1}>
            {currentSection === 1 && (
              <Agents
                formData={formData}
                setOpenSaved={setOpenSaved}
                getAllVendor={getAllVendor}
                setCurrentSectionProfile={setCurrentSectionProfile}
                setCurrentSectionRequest={setCurrentSectionRequest}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                site={site}
                handleClickOpen={handleClickOpen}
              />
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {currentSection === 2 && (
              <CommercialVehicles
                getAllVendor={getAllVendor}
                setCurrentSectionRequest={setCurrentSectionRequest}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                setCurrentSection={setCurrentSection}
                setSelected={setSelected}
                site={site}
              />
            )}
          </TabPanel>
          <TabPanel value={value} index={3}>
            {currentSection === 4 && (
              <ConstructionChemicals
                formData={formData}
                setOpenSaved={setOpenSaved}
                setCurrentSectionProfile={setCurrentSectionProfile}
                setCurrentSectionRequest={setCurrentSectionRequest}
                getAllVendor={getAllVendor}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                site={site}
                handleClickOpen={handleClickOpen}
                chemicalDropDown={chemicalDropDown}
              />
            )}
            </TabPanel>*/}
        </div>
        <div className='service-user-detail'>
          {currentSection === 3 && <ConstructionMachines />}

          {currentSection === 5 &&
            (selected !== null ? (
              <VehicleDetail
                formData={formData}
                setOpenSaved={setOpenSaved}
                setCurrentSectionRequest={setCurrentSectionRequest}
                getAllVendor={getAllVendor}
                selected={selected}
                setCurrentSection={setCurrentSection}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                handleClickOpen={handleClickOpen}
                site={site}
              />
            ) : (
              <CommercialVehicles
                getAllVendor={getAllVendor}
                setCurrentSectionRequest={setCurrentSectionRequest}
                newRequest={newRequest}
                setNewRequest={setNewRequest}
                setCurrentSection={setCurrentSection}
                setSelected={setSelected}
                site={site}
              />
            ))}
          {/* <div
            className='gotorequestpage'
            onClick={() => setCurrentSectionRequest(2)}
          >
            <h3 style={{ fontWeight: '600' }}>Check your Lead/Pitch Status</h3>
            <div
              style={{
                display: 'flex',
                margin: 0,
                marginTop: '0%',
                cursor: 'pointer',
                height: 'fit-content',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h4
                style={{ fontWeight: '400', fontSize: '1rem' }}
                className='view'
              >
                View
              </h4>
              <ArrowRightAltIcon />
            </div>
          </div> */}
          <PopupSaved
            title='Your Request Has Been Sent'
            handleClickOpen={handleClickOpen}
            open={open}
            setOpen={setOpen}
          />
          <PopupSaved
            title='Your Request Has Been Added to cart'
            handleClickOpen={() => setOpenSaved(true)}
            open={openSaved}
            setOpen={setOpenSaved}
          />
        </div>
      </div>
    </div>
  )
}

export default Services