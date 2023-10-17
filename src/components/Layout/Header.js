import React, { Fragment } from "react";
import mealsImage from '../../assests/meals.jpg'
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    
      <Fragment>
        <header className={classes.header}>
            <h1>Parui Kitchen</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Go to your cart" />
            </div>
      </Fragment>
    
  );
};

export default Header;
