import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
//import reactDom from "react-dom";
import CartContext from "../../Store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const cartClickHandler = () => {
    props.onPress();
  };

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
