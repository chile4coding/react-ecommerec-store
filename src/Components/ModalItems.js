import Modal from "react-bootstrap/Modal";
import classes from "./ModalItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { sideBarActions } from "../Store/store";


const ModalItems = (props) => {
  const numberInputRef = useRef();
  const selector = useSelector(state=>state.bar.onCart)
 

  const dispatch = useDispatch();
  
  const handleQuantityChange = () => {
      const { id } = props;
      const enteredVal = Number(numberInputRef.current.value);
      if(enteredVal > 0){

          dispatch(sideBarActions.handleItemChange({ id: id, amount: enteredVal }));
          console.log(selector);

      }
      
  };

  const handleAddButton = ()=>{
    const {id, name, price} = props
    
    dispatch(sideBarActions.handleCartAdd({id, name,price}))
    
    
  }
  
  const removeItemFromCart = ()=>{
    const {id} = props
    
    dispatch(sideBarActions.removeItemFromCart(id))
  }
  return (
    <Modal.Body className="border">
      <div className={classes.item}>
        <div className={classes["name-price"]}>
        <h6>{props.name}</h6>
        <p>₦{props.price}</p>
        <p>X</p>
        <p>{props.quantity}</p>
        </div>
        <div className={classes["name-price"]}>
        <p>cost: ₦{props.totalPrice}</p>
        <input
          type="text"
          className={classes["input-number"]}
          onChange={handleQuantityChange}
          ref={numberInputRef}
        />
        </div>
        <div className={classes["buttons-container"]}>
          <button className={classes.button} onClick={removeItemFromCart}>-</button>
          <button className={classes.button} onClick={handleAddButton}>+</button>
        </div>
      </div>
    </Modal.Body>
  );
};

export default ModalItems;
