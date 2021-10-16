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


function VendorDetails({selectedTableItem, data, requestedVendorDetails}){
    return (
        <div className="order-summary order-summary-accepted-vendor">
        <h4 style={{fontWeight:"500"}}>Personal information</h4>
        <hr style={{height:"1px", border:"0px", borderTop:"1px solid #2D2D2D", marginTop:"2%", width:"105.4%", marginLeft:"-2.8%"}}></hr>
        {window.screen.width>=1050 &&
        <div className="product-information">
            <div className="accepted-vendor-detail">
                <div className="product-detail-header">Name</div>
                <div className="product-detail-info">{requestedVendorDetails?.first_name}</div>
            </div>
            <div className="accepted-vendor-address-detail"> 
                <div className="product-detail-header">Company address</div>
                <div className="product-detail-info">{requestedVendorDetails?.address}</div>
            </div>
            <div className="accepted-vendor-detail">
                <div className="product-detail-header">WhatsApp</div>
                <div className="product-detail-info">{requestedVendorDetails?.whatsapp_no}</div>
            </div>
            <div className="accepted-vendor-address-detail">
                <div className="product-detail-header">Email</div>
                <div className="product-detail-info">{requestedVendorDetails?.email}</div>
            </div>
            <div className="accepted-vendor-detail">
                <div className="product-detail-header">Phone</div>
                <div className="product-detail-info">{requestedVendorDetails?.phone_no}</div>
            </div>
        </div>
        }

        {window.screen.width<1050 &&
            <div className="product-information">
                <div className="accepted-vendor-detail accepted-vendor-detail-responsive">
                    <div className="product-detail-header">Name</div>
                    <div className="product-detail-info">{requestedVendorDetails?.first_name}</div>
                </div>
                <div className="accepted-vendor-detail accepted-vendor-detail-responsive">
                    <div className="product-detail-header">WhatsApp</div>
                    <div className="product-detail-info">{requestedVendorDetails?.whatsapp_no}</div>
                </div>
                <div className="accepted-vendor-detail accepted-vendor-detail-responsive">
                    <div className="product-detail-header">Phone</div>
                    <div className="product-detail-info">{requestedVendorDetails?.phone_no}</div>
                </div>
                <div className="accepted-vendor-detail accepted-vendor-detail-responsive1">
                    <div className="product-detail-header">Email</div>
                    <div className="product-detail-info">{requestedVendorDetails?.email}</div>
                </div>
                <div className="accepted-vendor-address-detail accepted-vendor-detail-responsive1"> 
                    <div className="product-detail-header">Company address</div>
                    <div className="product-detail-info">{requestedVendorDetails?.address}</div>
                </div>
            </div>
            }
    </div>
    )
}

export default VendorDetails