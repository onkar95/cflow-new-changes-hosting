import React from "react";
import "./PaymentPlan.css";
import CreditCard from "../../../../Images/CreditCard.svg";
import Bank from "../../../../Images/Bank.svg";
import Gpay from "../../../../Images/Gpay.svg";
import Paypal from "../../../../Images/Paypal.svg";
import Checkbox from "@mui/material/Checkbox";
import PaymentSteps from "./PaymentSteps";
import OrderSummary from "./OrderSummary";

const PaymentPlan = (props) => {
  return (
    <div className="flex flex-col">
      <div className="payment_steps">
        <PaymentSteps />
      </div>

      <div id="payment_current" className="flex flex-row mt-4">
        <div className="payment_info flex flex-col">
          <h2>Payment Details</h2>
          <h3>
            Please fill all the following necessary details to proceed with the
            payment.
          </h3>
          <h4>Select payment method</h4>
          <div className="payment_choose">
            <label>
              <img src={CreditCard} alt="Card" />
              <p>Credit card</p>
              <Checkbox defaultChecked />
            </label>
            <label>
              <img src={Bank} alt="Bank" />
              <p>Bank</p>
              <Checkbox defaultChecked />
            </label>
            <label>
              <img src={Gpay} alt="Gpay" />
              <Checkbox defaultChecked />
            </label>
            <label>
              <img src={Paypal} alt="Paypal" />
              <Checkbox defaultChecked />
            </label>
          </div>
        </div>

        <div className="payment_plan flex flex-col text-white">
          <p>You current plan</p>
          <div className="my-8">
            <h3>3 MONTHS PLAN</h3>
            <span>
            <h4>28 days left</h4>
            <h5>5 items left</h5>
            </span>
          </div>
          <h6>
            Changed your mind? <span>Change plan</span>
          </h6>
        </div>
      </div>
      <div className="payment_summary">
        <div className="payment_inputs">
          <div className="user_details">
            <label>
              <p>Cardholder name</p>
              <input placeholder="Dood" />
            </label>
            <label>
              <p>Card number</p>
              <input placeholder="1234 5678 1234 5678" />
            </label>
            <label>
              <span>
                <p>Expiry date</p>
                <input placeholder="11/30" />
              </span>
              <span>
                <p>Security code</p>
                <input placeholder="****" />
              </span>
            </label>
          </div>

          <div className="user_address">
            <div>
              <label>
                <h3>Delivery address</h3>
                <h4>Create new address</h4>
              </label>
              <select name="2972 Westheimer Rd. Santa Ana, Illinois 85486 ">
                <optgroup label="Site 1 (default)">
                  <option>
                    Aurora Building, Block No. 21 Baker Street, India
                  </option>
                </optgroup>
                <option>Site 2</option>
                <option>Site 3</option>
                <option>Site 4</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <OrderSummary name="Proceed to confirmation"  />
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
