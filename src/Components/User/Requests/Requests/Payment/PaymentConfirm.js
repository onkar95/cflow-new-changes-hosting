import React from "react";
import "./PaymentConfirm.css";
import PaymentSymbol from "../../../../Images/Payment-Done.svg";
import Download from "../../../../Images/Download.svg";

const PaymentConfirm = () => {
  return (
    <div className="payment_confirm">
      <div className="confirm_heading">
        <img src={PaymentSymbol} alt="Payment Symbol" />
        <h3>PAYMENT CONFIRMED</h3>
        <p>
          Your payment has been succesfullly performed. Transaction details are
          as follows:
        </p>
      </div>

      <div className="confirm_items">
        <div className="confirm_first">
          <label>
            <p>Item</p>
            <p>Ultratech Cement OPC 53</p>
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

        <div className="confirm_second">
          <label>
            <p>Payment method</p>
            <p>Credit card</p>
          </label>
          <label>
            <p>Name</p>
            <p>Doddie Smith</p>
          </label>
          <label>
            <p>Card number</p>
            <p>1234 567 8912</p>
          </label>
        </div>

        <div className="confirm_third">
          <label>
            <p>Delivery address</p>
            <p>Lorem ipsum dolor XYZ, 3.142, Earth.</p>
          </label>
        </div>
      </div>

      <hr />

      <div className="confirm_summary">
        <h3>Order Summary</h3>

        <div>
          <label>
            <p>Plan amount</p>
            <p>₹ 15,000</p>
          </label>
          <label>
            <p>Discount</p>
            <p>₹ ---</p>
          </label>
          <label>
            <p>+Tax</p>
            <p>₹ 500</p>
          </label>
          <label>
            <p>Total</p>
            <p>₹ 15, 500</p>
          </label>
        </div>
      </div>

      <hr />

      <div className="confirm_close">
        <label>
          <h5>
            Questions and concerns? <span>Contact us</span>
          </h5>
          <h6>Close this window</h6>
        </label>

        <label>
          <img src={Download} alt="Download" />
          <p>Download invoice</p>
        </label>
      </div>
    </div>
  );
};

export default PaymentConfirm;
