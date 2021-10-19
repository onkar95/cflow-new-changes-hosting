import React from "react";
import "./PaymentReview.css";
import PaymentSteps from "./PaymentSteps";

// Icons Imports
import CreditCard from "../../../../Images/CreditCard.svg";
import OrderSummary from "./OrderSummary";

const PaymentReview = () => {
  console.log(PaymentSteps);
  return (
    <div className="payment_review">
      <div className="payment_steps">
        <PaymentSteps />
      </div>

      <div className="review_details">
        <div className="payment_method_address">
          <div className="method_details">
            <h3>Payment method</h3>
            <div>
              <label>
                <span>
                  <img src={CreditCard} alt="Credit Card" />
                  <p>Credit Card</p>
                </span>
                <input type="checkbox" />
              </label>
              <h4>Doodle Smith</h4>
              <h5>123 ***********567</h5>
              <a>Change payment method</a>
            </div>
          </div>

          <div className="address_details">
            <h3>Delivery address</h3>
            <div>
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <a>Change address</a>
            </div>
          </div>
        </div>

        <div className="order_summary">
          <OrderSummary name="CONFIRM & PAY"/>
        </div>
      </div>
    </div>
  );
};

export default PaymentReview;
