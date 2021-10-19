import { Button, Card, CardContent } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React, { useEffect, useState } from 'react'
import "./Details.css"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Status from '../../Table/Status/Status';
import SelectProduct from "../../../Images/Select Product.svg"
import Pending from "../../../Images/Pending.svg"
import Accepted from "../../../Images/Accepted.svg"
import Rejected from "../../../Images/Rejected.svg"
import OrderSummary from './ViewDetailsSections/OrderSummary.js'
import DeliveryDetails from './ViewDetailsSections/DeliveryDetails.js'
import DetailsSideMenu from "./DetailsSideMenu"
import NoInformationToDisplay from './ViewDetailsSections/NoInformationToDisplay';



const Details1 = ({theme, setCurrentSection,selectedTableItem}) => {
      const [winsize,setwinsize]=useState(window.screen.width);
  const [winheight,setwinheight]=useState(window.screen.height);
  const handleResize=()=>{
      if (window.innerWidth <1000) {
          setwinsize(window.innerWidth)
      }
      else{
          setwinsize(window.innerWidth)
      }
      if (window.innerHeight <1000) {
        setwinheight(window.innerHeight)
    }
    else{
      setwinheight(window.innerHeight)
    }
  }
  useEffect(() => {
      window.addEventListener("resize", handleResize)
      window.addEventListener("resize", handleResize)
      console.log(winsize,winheight,"LandingPageImage")
  }, [window.screen.width,window.screen.height])

  const useStyles = makeStyles({
    root: {
      minWidth: winsize > 450 ? 400 : 300,
    //   maxWidth:400,
    //   minHeight:500,
    //   maxHeight:400,
    //   marginTop:20,
      borderWidth:1 ,
      borderRadius:10,
      borderColor:"#2D2D2D",
      backgroundColor:"#121417"
    },
})

    const classes = useStyles()
const handleAccept=()=>{
    setCurrentSection(2)
    window.scrollTo(0,0)
}

const DeliveryAddress = selectedTableItem  ?  JSON.parse(selectedTableItem?.delivery_address):""
const pin=DeliveryAddress?.pin?"pin:-"+DeliveryAddress?.pin:""
const DeliveryAddress1 =DeliveryAddress ? DeliveryAddress?.building_name+" "+ DeliveryAddress?.door_no +", "+DeliveryAddress.street+", "+DeliveryAddress?.city + ", " + DeliveryAddress?.state + ", " +pin: "___"
const DeliveryDate = selectedTableItem?.deliver_by!=="0000-00-00 00:00:00" ? selectedTableItem?.deliver_by.toString().substring(0,10):JSON.parse(selectedTableItem?.data)?.startDate ? JSON.parse(selectedTableItem?.data)?.startDate?.slice(0,10) + " to " +JSON.parse(selectedTableItem?.data)?.endDate?.slice(0,10) :"___"


    const data= selectedTableItem ?JSON.parse(selectedTableItem?.data):""
    console.log(selectedTableItem , 'Helll');
    useEffect(()=>{
        console.log(data)
        console.log(selectedTableItem.delivery_address)
    },[])

    const [section, setSection]=useState("Order details")

    return (
        <div className="details">
            <div className='breadcrumbs' style={theme?{color:"black"}:{}}>
                <h3 style={{fontWeight:"550"}}>
                    Home / New Requests /{" "}
                    <span style={{ color: "#FFB600" }}>View Details</span>
                </h3>
            </div>
            <div className="detailscontainer">
            <h3 className="back" onClick={()=>{setCurrentSection(2)}} style={{cursor:"pointer", color:theme?"black":""}}><ArrowBackIosIcon  style={theme === true ? { color: "black",height: '16px' } : {height: '16px'}}/>back</h3>
                <div className="cards">
                <DetailsSideMenu theme={theme} section={section} setSection={setSection} />
                {section==="Order details" &&
                <div className="content-container" style={theme?{backgroundColor:"#F8F8F8", color:"black"}:{}}>
                    <div className="order-details1">
                        <div className="no-info-header">Order details</div>
                        <div className="information">This order is not pitched yet. You can only access vendor and price information if you get a pitch</div>
                        {window.screen.width<1050 && <div className="new-request-instruction">You can only see price and vendor details when you get a pitch</div>}

                        <OrderSummary selectedTableItem={selectedTableItem} data={data} />

                    </div>
                    <div className="order-details2">
                        {window.screen.width>=1050 && <div className="new-request-instruction"><img style={{width:"20px", marginBottom:"-5px"}} src={Pending}></img> You can only see price and vendor details when you get a pitch</div>}

                        <DeliveryDetails selectedTableItem={selectedTableItem} data={data} DeliveryAddress1={DeliveryAddress1} DeliveryDate={DeliveryDate} />
                        
                    </div>
                </div>
                }
                {section==="Pitch summary" &&
                <div className="select-product-image-container" style={theme?{backgroundColor:"#F8F8F8", color:"black"}:{}}>
                    <div className="no-info">
                        <div className="no-info-wrapper">
                            <div className="no-info-first-div">
                                <div className="no-info-header">Price details</div>
                                <div className="no-info-description">This order is not pitched yet. There are no available price details to show.</div>
                            </div>
                            <div className="new-request-instruction"><img style={{width:"20px", marginBottom:"-5px"}} src={Pending}></img> You can see the price details when you get a pitch!</div>
                        </div>

                        <hr style={{height:"0px", border:"0px", borderTop:"1px solid #2D2D2D", marginTop:"5%", width:"105.4%", marginLeft:"-2.8%"}}></hr>
                        <NoInformationToDisplay header={"No available price"} description={"You will only see information if you get a pitch"} />

                    </div>
                </div>
                }
                {section==="Vendor details" &&
                <div className="select-product-image-container" style={theme?{backgroundColor:"#F8F8F8", color:"black"}:{}}>
                    <div className="no-info">
                        <div className="no-info-wrapper">
                            <div className="no-info-first-div">
                                <div className="no-info-header">Vendor details</div>
                                <div className="no-info-description">This order is not pitched yet. There are no available vendor details to show.</div>
                            </div>
                            <div className="new-request-instruction"><img style={{width:"20px", marginBottom:"-5px"}} src={Pending}></img> You can see the vendor details when you get a pitch!</div>
                        </div>

                        <hr style={{height:"0px", border:"0px", borderTop:"1px solid #2D2D2D", marginTop:"5%", width:"105.4%", marginLeft:"-2.8%"}}></hr>

                        <NoInformationToDisplay header={"Vendor details unavailable"} description={"Wait or accept the vendor's pitch first to see their complete details."} />

                    </div>
                </div>
                }

                </div>
            </div>
            
            
        </div>
    )
}

export default Details1