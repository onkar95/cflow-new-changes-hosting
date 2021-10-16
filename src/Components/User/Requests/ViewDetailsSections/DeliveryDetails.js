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

function DeliveryDetails({selectedTableItem, data, DeliveryAddress1, DeliveryDate}){
    return (
        <div className="order-summary1">
        <h4 style={{fontWeight:"500"}}>Delivery details</h4>
        <hr style={{height:"1px", border:"0px", borderTop:"1px solid #2D2D2D", marginTop:"2%", width:"111%", marginLeft:"-5%"}}></hr>
        <div className="delivery-information">
            <div className="product-detail product-delivery-detail">
                <div className="product-detail-header">Delivery address</div>
                <div className="product-detail-info"> {DeliveryAddress1} </div>
            </div>
            <div className="product-detail product-delivery-detail1"> 
                <div className="product-detail-header">Deliver by</div>
                <div className="product-detail-info">{DeliveryDate}</div>
            </div>
            <div className="product-detail product-delivery-detail1">
                <div className="product-detail-header">Status</div>
                <div className="product-detail-info" style={selectedTableItem?.urgent == 1?{color:"red"}:{color:"green"}} >{selectedTableItem?.urgent == 1 ?"URGENT":"FLEXIBLE"}</div>
            </div>
        </div>
    </div>
    )
}

export default DeliveryDetails