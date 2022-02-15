import React from "react";
import iconMusic from "./icon-music.svg";

const Plan = () => {
  return (
    <div className="plan--div">
      <img src={iconMusic} />
      <div className="plan--annual">
        <h1>Annual Plan</h1>
        <span className="sum--price">$59.99/year</span>
      </div>
      <div className="plan--change">
        <h3>Change</h3>
      </div>
    </div>
  );
};

export default Plan;
