import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cart_item = (
    <ul className={classes["cart-item"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const isOrderValid = cartCtx.items.length > 0;
  const hideCartButtonHandler = () => {
    props.onHide();
  };
  const orderHandler = () => {
    alert("ordered");
  };
  return (
    <Modal onHide={props.onHide}>
      {cart_item}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={hideCartButtonHandler}
        >
          {" "}
          close
        </button>
        {isOrderValid && (
          <button className={classes.button} onClick={orderHandler}>
            order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
