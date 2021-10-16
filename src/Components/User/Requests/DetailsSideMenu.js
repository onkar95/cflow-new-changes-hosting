import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import OrderDetailsOrange from "../../../Images/Request Details/orange/Order Details.svg"
import PitchSummaryOrange from "../../../Images/Request Details/orange/Pitch Summary.svg"
import VendorDetailsOrange from "../../../Images/Request Details/orange/Vendor Details.svg"
import OrderDetailsWhite from "../../../Images/Request Details/white/Order Details.svg"
import PitchSummaryWhite from "../../../Images/Request Details/white/Pitch Summary.svg"
import VendorDetailsWhite from "../../../Images/Request Details/white/Vendor Details.svg"
import OrderDetailsBlack from "../../../Images/Request Details/black/Order Details.svg"
import PitchSummaryBlack from "../../../Images/Request Details/black/Pitch Summary.svg"
import VendorDetailsBlack from "../../../Images/Request Details/black/Vendor Details.svg"
import "./DetailsSideMenu.css"

function DetailsSideMenu ({theme, section, setSection}){
    return <div className="details-side-menu" style={theme?{color:"black"}:{}}>
    <div className="details-side-menu-options" style={(section==="Order details" && theme)?{color:"#FFB600", backgroundColor:"#F8F8F8"}:section==="Order details"?{color:"#FFB600"}:{}} onClick={()=>{setSection("Order details")}}><img src={section==="Order details"?OrderDetailsOrange:OrderDetailsBlack} className="vendor-menu-icons"></img> Order details</div>
    <div className="details-side-menu-options" style={(section==="Pitch summary" && theme)?{color:"#FFB600", backgroundColor:"#F8F8F8"}:section==="Pitch summary"?{color:"#FFB600"}:{}} onClick={()=>{setSection("Pitch summary")}}><img src={section==="Pitch summary"?PitchSummaryOrange:PitchSummaryBlack} className="vendor-menu-icons"></img> Pitch summary</div>
    <div className="details-side-menu-options" style={(section==="Vendor details" && theme)?{color:"#FFB600", backgroundColor:"#F8F8F8"}:section==="Vendor details"?{color:"#FFB600"}:{}} onClick={()=>{setSection("Vendor details")}}><img src={section==="Vendor details"?VendorDetailsOrange:VendorDetailsBlack} className="vendor-menu-icons"></img> Vendor details</div>
    </div>
}

export default DetailsSideMenu