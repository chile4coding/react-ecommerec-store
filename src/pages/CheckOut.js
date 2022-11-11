import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import classes from "./CheckOut.module.css";
import Receipt from "./Receipt";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sideBarActions } from "../Store/store";


const CheckOut = () => {
  const [buyersDetails, setBuyersDetails] = useState({
    firstName: "",
    lastName: "",
    country: "",
    town: "",
    phone: "",
    email: "",
    note: "",
    address: "",
  });
  const [formValidate, setFormValidate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const navigate = useNavigate();

  const itemSelector = useSelector((state) => state.bar.onCart);
  const totalSelector = useSelector((state) => state.bar.totalAmount);

 


const dispatch = useDispatch()
  const receiptItems = itemSelector.map((item) => (
    <Receipt Key={item.id} name={item.name} total={item.totalPrice} />
  ));

  const handleBuyersDetailsChange = (e) => {
    const { name, value } = e.target;

    setFormValidate(false)

    
    setBuyersDetails((prevData) => {
      if (name === e.target.name) {
        return {
          ...prevData,
          [name]: value,
        };
      }
    });
  };

  const handleDetailsSubmit = (e) => {
    e.preventDefault();

    const customersItems = itemSelector.map((item) => {
      return {
        product: `${item.name}  ₦${item.totalPrice}`,
      };
    });

    const finalReceipt = { ...customersItems, Total: `₦${totalSelector}` };

    if( !(buyersDetails.firstName.trim() && buyersDetails.lastName.trim() && buyersDetails.country.trim()&& buyersDetails.town.trim() && buyersDetails.phone.trim() && buyersDetails.email.trim())){

      

setFormValidate(true)
      return
    }

   


   
setLoading(true)
    const handleFetch = async () => {
      const response = await fetch(
        "https://shop-4904e-default-rtdb.firebaseio.com/myshop.json",
        {
          method: "POST",
          body: JSON.stringify({
            buyer: buyersDetails,
            order: finalReceipt,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
    };

    setLoading(false)
    setSent(true)

    
    handleFetch();

   
    
    navigate('/shop')
    dispatch(sideBarActions.handleSentOrder())

    setBuyersDetails({
      firstName: "",
      lastName: "",
      country: "",
      town: "",
      phone: "",
      email: "",
      note: "",
      address: "",
    });
  };

  let text;
  let mystyle;

if(formValidate){
  mystyle = {border: "1px solid red", backgroundColor:"#f5d7da"}
text = "Please fill this fied"
}



  return (
    <div className={classes["form-item-container"]}>
      <Container>
        <div className={classes.background}>
          <p className="text-center p-2">
            Have a coupon? Click here to enter your code
          </p>
        </div>

        <h3 className={classes.billing}>Billing Details</h3>

        <Row>
          <Col md={8}>
            <form>
              <Row>
                <Col md={6}>
                  <label htmlFor="Fname" className={classes.label}>
                    First Name <span className={classes.span}>*</span>
                  </label>
                  <input
                    type="text"
                    id="Fname"
                    className={classes.input}
                    value={buyersDetails.firstName}
                    name="firstName"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="Sname" className={classes.label}>
                    Last Name<span className={classes.span}>*</span>
                  </label>
                  <input
                    type="text"
                    id="Sname"
                    className={classes.input}
                    value={buyersDetails.lastName}
                    name="lastName"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="country" className={classes.label}>
                    Country/State<span className={classes.span}>*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    className={classes.input}
                    value={buyersDetails["country"]}
                    name="country"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="address" className={classes.label}>
                    Address<span className={classes.span}>*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className={classes.input}
                    value={buyersDetails.address}
                    name="address"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="town" className={classes.label}>
                    Town/City
                  </label>
                  <input
                    type="text"
                    id="town"
                    className={classes.input}
                    value={buyersDetails["town"]}
                    name="town"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="phone" className={classes.label}>
                    Phone<span className={classes.span}>*</span>
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    className={classes.input}
                    value={buyersDetails.phone}
                    name="phone"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={6}>
                  <label htmlFor="Email" className={classes.label}>
                    Email<span className={classes.span}>*</span>
                  </label>
                  <input
                    type="email"
                    id="Email"
                    className={classes.input}
                    value={buyersDetails.email}
                    name="email"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={12}>
                  <label htmlFor="note" className={classes.label}>
                    Order Note
                  </label>
                  <input
                    type="text"
                    id="note"
                    className={classes.input}
                    value={buyersDetails.note}
                    name="note"
                    onChange={handleBuyersDetailsChange}
                    placeholder={text}
                    style={ mystyle}
                  />
                </Col>
                <Col md={12}></Col>
              </Row>
            </form>
          </Col>

          <Col md={4}>
            <Container className={classes.contained}>
             {loading && <h5>Sending Order...</h5>}
             {sent && <h5 className="text-success">Order sent successfully</h5>}
              <h3 className={classes.order}>Your Order</h3>
              <div className={classes["product-border"]}>
                <Row>
                  <Col md={6}>
                    <h4>Products</h4>
                  </Col>
                  <Col md={6}>
                    <h4>Total</h4>
                  </Col>
                </Row>

                {receiptItems}
              </div>

              <div className={classes["product-border"]}>
                <Row>
                  <Col md={6}>
                    <h4>Sub Total</h4>
                  </Col>
                  <Col md={6}>
                    <h4>₦{totalSelector}</h4>
                  </Col>
                </Row>
              </div>
              <div className={classes["product-border"]}>
                <Row>
                  <Col md={6}>
                    <h4>Total</h4>
                  </Col>
                  <Col md={6}>
                    <h4 className="text-danger">₦{totalSelector}</h4>
                  </Col>
                </Row>
              </div>
              <div className={classes["div-btn"]}>
                <button
                  className={classes["order-btn"]}
                  onClick={handleDetailsSubmit}
                >
                  Place Order
                </button>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckOut;
