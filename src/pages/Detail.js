import { useSelector } from "react-redux";
import classes from "./Detail.module.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import facebook from "../images/facebook-f.svg";
import instagram from "../images/square-instagram.svg";
import twitter from "../images/twitter.svg";
import { sideBarActions } from "../Store/store";
import { useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch()
  const itemSelector = useSelector((state) => state.bar.ItemDetail);

console.log(itemSelector);

  const handleAddToCart = ()=>{

    const {id, name, price} = itemSelector
    dispatch(sideBarActions.handleCartAdd({id, name, price}))
  }
  
  const handleRemoveFromCart = ()=>{
    
    const {id} = itemSelector
    dispatch(sideBarActions.removeItemFromCart(id))
  }

  return (
    <div>
      <Container>
        <div className={classes.bg}><h4 className="text-center">Details</h4></div>
       
        <Row>
          <Col md={6}>
            <div>
              <img src={itemSelector.img} className="img-fluid" />
            </div>
          </Col>

          <Col md={6}>
            <h3 className="">{itemSelector.name}</h3>
            <div></div>
            <h4>₦{itemSelector.price}</h4>
            <p>{itemSelector.desc}</p>

            <div
              className={`${classes["btn--add__remove"]} border-bottom pb-3`}
            >
              <button className={classes.btn} onClick={handleRemoveFromCart}>-</button>
              <button className={classes.btn} onClick={handleAddToCart}>+</button>
              <button className={`${classes["btn-add"]} ${classes.btn}`} onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>

            <div>
              <Row>
                <Col md={4}>
                  <h6>Available</h6>
                  <h6>Shipping</h6>
                  <h6>Weight</h6>
                  <h6>Share on</h6>
                </Col>
                <Col md={8}>
                  <h6>In Stock</h6>
                  <h6> 01 day shipping. Free pickup today</h6>
                  <h6>0.5 kg</h6>

                  <div className={classes["icon-container"]}>
                    <div className={classes["icon-cont"]}>
                      <img src={facebook} className="img-fluid" />
                    </div>
                    <div className={classes["icon-cont"]}>
                      <img src={twitter} className="img-fluid" />
                    </div>
                    <div className={classes["icon-cont"]}>
                      <img src={instagram} className="img-fluid" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-4">
            <h5 >Product informatiom</h5>
            <p>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Pellentesque in ipsum id orci porta dapibus. Proin eget
              tortor risus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed
              sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus
              suscipit tortor eget felis porttitor volutpat. Curabitur arcu
              erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien
              massa, convallis a pellentesque nec, egestas non nisi. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet dui.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula. Proin eget tortor risus. 
              </p> 
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras
              ultricies ligula sed magna dictum porta. Cras ultricies ligula sed
              magna dictum porta. Sed porttitor lectus nibh. Mauris blandit
              aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam
              sit amet quam vehicula elementum sed sit amet dui. Sed porttitor
              lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
              sed sit amet dui. Proin eget tortor risus.
              </p>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
