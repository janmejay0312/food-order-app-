import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmount, showValidity] = useState(true);
  const SubmitHandler = (event) => {
    event.preventDefault();
    const amountEntered = amountInputRef.current.value;
    const amountEnteredNumber = +amountEntered;
    if (
      amountEntered.trim().length === 0 ||
      amountEnteredNumber < 1 ||
      amountEnteredNumber > 5
    ) {
      showValidity(false);
      return;
    }
    props.onAddToCart(amountEnteredNumber);
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.meals.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p> Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
