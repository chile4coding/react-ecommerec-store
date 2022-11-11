import classes from "./ShopItem.module.css";
import DATA from "../DATA";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../Store/store";
import { useParams, Link } from "react-router-dom";






const ShopItem = (props) => {



  const param = useParams()
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const dispatch = useDispatch()




 


  
  const handleShowCart = (id) => {
    if (props.id === id) {
      setShow(true);
      setHide(false);
    }
  };
  
  const hideShowCart = (id) => {
    if (props.id === id) {
      setShow(false);
      setHide(true);
    }
    
  };
  const handleCartItem = () => {
    const {id, name, price} = props
    
    
    
    dispatch(sideBarActions.handleCartAdd({id, name,price}))

    
  };

  const handleDetailsPage= ()=>{
    const {id} = props
dispatch(sideBarActions.handleDetailPage(id))
    
  }
 
  return (
    //
    <div
      className={classes["item-container"]}
      onMouseOver={() => handleShowCart(props.id)}
      onMouseOut={() => hideShowCart(props.id)}
    >
      <div className={`${classes["item-holder"]} m-0 p-0`}>
        <img
          src={props.img}
          alt="rice"
          className={`${classes["item-image"]} img-fluid`}
        />
        <div
          className={`${classes["item-cart__favourite"]} ${
            show && classes["add-cart"]
          } ${hide && classes["remove-cart__show"]}`}
        >
          <div className={classes["icon-box"]}>
            <i className={`fa-solid fa-heart ${classes.heart}`}></i>
          </div>
          <div className={classes["icon-box"]}>
            {" "}
            <i
              className={`fa-solid fa-cart-shopping  ${classes.cart}`}
              onClick={handleCartItem}
            ></i>
          </div>
          <div className={classes["icon-box"]}>
            {" "}
            <i
              className={`fa-sharp fa-solid fa-repeat repeat  ${classes.repeat}`}
            ></i>
          </div>
        </div>
      </div>
      <div className={classes["item-description--container"]}>
        <p className={classes["item-category"]}>{props.name}</p>
        <div className={classes["initial-current__price"]}>
        <p className={classes["item-price"]}>₦{props.price}</p>{" "}
        </div>
        <Link to={`/shop/${props.id}`} className={classes["item-detail"]} onClick={handleDetailsPage}>Details</Link>
      </div>
    </div>
  );
};

export default ShopItem;
