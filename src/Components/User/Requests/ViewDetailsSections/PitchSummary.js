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


function PitchSummary({theme, selectedTableItem, data, price_detail}){
    return (
        <div className="pitch-information">
        <h4 style={{fontWeight:"500"}}>Invoice</h4>
        <div className="product-information">
        <div className="product-detail1"> 
            <div className="product-detail-header">Price</div>
            <div className="product-detail-info">{price_detail?.price}</div>
        </div>
        <div className="product-detail1">
            <div className="product-detail-header">+GST</div>
            <div className="product-detail-info">{price_detail?.gst}</div>
        </div>
        <div className="product-detail1">
            <div className="product-detail-header">+Delivery charges</div>
            <div className="product-detail-info">{price_detail?.deliverycharges}</div>
        </div>
        {window.screen.width>=1050 &&
        <div className="product-detail1-grand-total">
            <div className="grand-total-amount-container">
                <div className="product-detail-header-grand-total">Grand total:</div>
                <div className="product-grand-total">{selectedTableItem?.pitch_value}</div>
            </div>
        </div>
        }
        <div className="product-detail1">
            <div className="product-detail-header">Extra charges</div>
            <div className="product-detail-info">{price_detail?.extracharges}</div>
        </div>
        <div className="product-detail1-instruction" style={theme?{backgroundColor:"#D8D8D8"}:{}}>
            <div className="product-detail-header1">Includes all the information regarding the extra charges.</div>
        </div>
        {window.screen.width<1050 &&
            <div className="product-detail1-grand-total">
                <div className="grand-total-amount-container">
                    <div className="product-detail-header-grand-total">Grand total:</div>
                    <div className="product-grand-total">{selectedTableItem?.pitch_value}</div>
                </div>
            </div>
        }
        </div>
    </div>
    )
}

export default PitchSummary