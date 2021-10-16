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

function OrderSummary({selectedTableItem, data}){
    return (
        <div className="order-summary">
        <h4 style={{fontWeight:"500"}}>Order summary</h4>
        <hr style={{height:"1px", border:"0px", borderTop:"1px solid #2D2D2D", marginTop:"2%", width:window.screen.width>=1050?"111%":"104%", marginLeft:window.screen.width>=1050?"-5%":"-2%"}}></hr>
        <div className="product-information">
            <div className="product-detail" style={{width:"33.33%"}}>
                <div className="product-detail-header">Order</div>
                <div className="product-detail-info">{data?.brand ?data?.brand :"____"}</div>
            </div>
            <div className="product-detail" style={{width:"66.66%"}}>
                <div className="product-detail-header">Category</div>
                <div className="product-detail-info">{selectedTableItem?.type}</div>
            </div>
            <div className="product-detail" style={{width:"33.33%"}}> 
                <div className="product-detail-header">Type</div>
                <div className="product-detail-info">{data?.type ?data?.type :data?.grade ? data?.grade:"____"}</div>
            </div>
            <div className="product-detail" style={{width:"33.33%"}}> 
                <div className="product-detail-header">Size</div>
                <div className="product-detail-info">{data?.sizes ?data?.sizes :"____"}</div>
            </div>
            <div className="product-detail" style={{width:"33.33%"}}>
                <div className="product-detail-header">Quantity</div>
                <div className="product-detail-info">{selectedTableItem?.quantity}</div>
            </div>
            <div className="product-detail" style={{width:"33.33%"}}>
                <div className="product-detail-header">Trade type</div>
                <div className="product-detail-info">{selectedTableItem?.trade==1?"Trade":selectedTableItem?.trade==0?"Non-trade":"____"}</div>
            </div>
            <div className="product-detail" style={{width:"33.33%"}}>
                <div className="product-detail-header">Placed on</div>
                <div className="product-detail-info">{selectedTableItem?.placed_on?.slice(0,10)}</div>
            </div>
        </div>
    </div>
    )
}

export default OrderSummary