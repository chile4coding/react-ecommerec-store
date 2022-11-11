import classes from "./Price.module.css";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sideBarActions } from "../Store/store";

const Price = () => {
  const dispatch = useDispatch();
  const priceInputRef = useRef(0);
  const [price, setPrice] = useState(0);

  const handleInputChange = () => {
    const enteredPrice = priceInputRef.current.value;

    let enteredPrices = Number(enteredPrice);
    dispatch(sideBarActions.handlePriceFilter(enteredPrices));
    setPrice(enteredPrice);
  };

  return (
    <form>
      <h3>Price</h3>
      <input
        type="range"
        min="10"
        max="250"
        className={classes.price}
        ref={priceInputRef}
        onChange={handleInputChange}
      />
      <p>$10 - ${price}</p>
    </form>
  );
};

export default Price;
