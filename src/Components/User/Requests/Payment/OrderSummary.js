import React from "react";
import { Link } from "react-router-dom";
import "./OrderSummary.css";

const OrderSummary = (props) => {
  return (
    <div className="payment_verify">
      <div className="verify_first">
        <h2>Order Summary</h2>
        <p>3 Months Plan Subscription</p>
      </div>

      <hr />

      <div className="verify_second">
        <h6>Items (2)</h6>
        <div className="first_order">
          <label>
            <p>Order</p>
            <p>Ultratech cement</p>
          </label>
          <label>
            <p>Type</p>
            <p>OPC 53</p>
          </label>
          <label>
            <p>Quantity</p>
            <p>20 bags</p>
          </label>
          <label>
            <p>Trade type</p>
            <p>Trade</p>
          </label>
        </div>

        <div className="second_order">
          <label>
            <p>Place on</p>
            <p>30 Feb, 2021</p>
          </label>
          <label>
            <p>Delivery address</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </label>
        </div>
      </div>

      <hr />

      <div className="verify_third">
        <div className="first_order">
          <label>
            <p>Order</p>
            <p>Ultratech cement</p>
          </label>
          <label>
            <p>Type</p>
            <p>OPC 53</p>
          </label>
          <label>
            <p>Quantity</p>
            <p>20 bags</p>
          </label>
          <label>
            <p>Trade type</p>
            <p>Trade</p>
          </label>
        </div>

        <div className="second_order">
          <label>
            <p>Place on</p>
            <p>Delivery address</p>
          </label>
          <label>
            <p>30 Feb, 2021</p>
            Lorem ipsum dolor sit amet consectetur.
          </label>
        </div>
      </div>

      <button ><Link to="/paymentconfirm">{props.name}</Link></button>
    </div>
  );
};

export default OrderSummary;
