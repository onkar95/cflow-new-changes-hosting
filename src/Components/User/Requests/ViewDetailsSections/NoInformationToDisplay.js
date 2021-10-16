import { Button, Card, CardContent } from '@material-ui/core'
import React ,{useEffect, useState} from 'react'
import "../Details.css"
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Status from "../../../Table/Status/Status"
import SelectProduct from "../../../../Images/Select Product.svg"
import DetailsSideMenu from "../DetailsSideMenu"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

function NoInformationToDisplay({header, description}){
    return (
    <div className="no-info-wrapper1">
        <img src={SelectProduct} className="no-info-image"></img>
        <div className="no-info-header1">{header}</div>
        <div className="no-info-description1">{description}</div>
    </div>
    )
}

export default NoInformationToDisplay