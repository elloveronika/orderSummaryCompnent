import React from "react";
import Header from "./Header";
import Content from "./Content";
import classes from "../card.module.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <Header />
        <Content />
      </div>
    </>
  );
};

export default Card;
