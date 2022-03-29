import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const showbuttonHandler = () => {
    props.onShow();
  };
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onPress={showbuttonHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of delicious food"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
