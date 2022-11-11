import classes from "./NavCart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../Store/store";



const NavCart = () => {
  const dispatch = useDispatch();

  const selector = useSelector(state=>state.bar.showModal)
  const totalAmount = useSelector(state=>state.bar.totalAmount)
const totalQuantity = useSelector(state=>state.bar.totalQuantity)
  
  const handleShow = () => {
    dispatch(sideBarActions.showModal())
  };

  return (
    <div className={classes["cart-favourite"]}>
      <div className={classes.item}>
        <i class="fa-sharp fa-solid fa-heart"></i>
        <div className={classes["span-item"]}>1</div>
      </div>
      <div className={classes.item} onClick={handleShow}>
        <i class="fa-solid fa-cart-shopping"></i>
        <div className={classes["span-item"]}>{totalQuantity}</div>
      </div>
      <div className={classes.item}>
        <div>item: ₦{totalAmount}</div>
      </div>
    </div>
  );
};

export default NavCart;
