import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactFood</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </>
  );
};

export default Header;
