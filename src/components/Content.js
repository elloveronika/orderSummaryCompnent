import React from "react";
import Summary from "./Summary";
import Plan from "./Plan";
import Payment from "./Payment";

const Content = () => {
  return (
    <div class="content--div">
      <Summary />
      <Plan />
      <Payment />
    </div>
  );
};

export default Content;
