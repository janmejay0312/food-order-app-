import React from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
const MealsItem = (props) => {
  const price = `$${props.meals.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meals.id,
      name: props.meals.name,
      amount: amount,
      price: props.meals.price,
    });
    console.log(amount);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={classes.description}>{props.meals.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm meals={props.meals} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
