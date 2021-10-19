import React from "react";

import { Button } from "@material-ui/core";
import "./Mytendor.css";
import Box from "../../../Images/Select Product.svg";

const Mytendor = ({ theme }) => {
  return (
    <div
      className="tendors-unavailable-container"
      style={{ backgroundColor: theme ? "#ffffff" : "" }}
    >
      <div className="box-svg">
        <img
          src={Box}
          alt="box-svg"
          style={{ width: "100%", marginTop: "8rem" }}
        />
      </div>

      <div className="tendors-unavailable-header">tendor page unavailable</div>

      <div className="tendor-unavailable-desc">
        {/* Login and complete your profile to view the tendors */}
      </div>

      <div className="tendor-unavailable-btn">
        <Button
          variant="contained"
          style={{
            backgroundColor: " #08090c",
            borderRadius: "4px",
            border: "1px solid #ffb600",
            padding: "1.8rem 4rem",
          }}
        >
          <div className="tendor-unavailable-btn-text">Coming Soon</div>
        </Button>
      </div>
    </div>
  );
};

export default Mytendor;