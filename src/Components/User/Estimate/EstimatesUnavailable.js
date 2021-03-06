import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Estimate.css";
import Box from "../../../Images/Select Product.svg";

const EstimatesUnavailable = ({ theme }) => {
  const history = useHistory();

  // const handleRedirect = (e) => {
  //   e.preventDefault()
  //   history.push('/auth-user')
  // }

  return (
    <div
      className="estimates-unavailable-container"
      style={{ backgroundColor: theme ? "#ffffff" : "" }}
    >
      <div className="box-svg">
        <img src={Box} alt="box-svg" style={{ width: "100%" }} />
      </div>

      <div
        className="estimates-unavailable-header"
        style={{ color: theme ? "#08090C" : "" }}
      >
        Estimates page unavailable
      </div>

      <div className="estimates-unavailable-desc"></div>

      <div className="estimates-unavailable-btn">
        <Button
          variant="contained"
          // onClick={handleRedirect}
          style={{
            backgroundColor: " #08090c",

            border: "1px solid #ffb600",
            borderRadius: "4px",
            padding: "1.8rem 4rem",
          }}
        >
          <div className="estimates-unavailable-btn-text">Coming Soon</div>
        </Button>
      </div>
    </div>
  );
};

export default EstimatesUnavailable;