import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import classes from "./HomeDisplay.module.css";
import Departments from "./Departments";
import DEPARTMENT from "./DEPARTMENT";
import { useState } from "react";
import Slider from "./Slider";
import DATA from "../DATA";
import {Outlet, Link} from "react-router-dom"

function HomeDisplay() {
  const [showDeparments, setShowDepartment] = useState(false);

  const handleShowDepartments = () => {
    setShowDepartment((prev) => !prev);
  };

  const dispalyDepartments = DEPARTMENT.map((item) => (
    <Departments Key={item} departments={item} />
  ));

  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={3}>
          <div className="border">
            <div
              className={`${classes.all} d-flex p-2 `}
              onClick={handleShowDepartments}
            style={{backgroundColor: "green"}}>
              <div>
                <i class="fa-solid fa-bars"></i>
              </div>
              <div >All departments</div>
              <div>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            {showDeparments && dispalyDepartments}
          </div>
        </Col>
        <Col xs={12} md={9} className="Homebg">
         
          <Row>
            <Col md={12} className="">
              <div className="mt-4 ">
                <div className={classes.homeDiscription}>
                  <h6 className={classes.fruit}>FRUIT FRESH</h6>
                  <h1 className={classes.vagetable}>Vegetable</h1>
                  <h1 className={classes.vagetable}>100% Organic</h1>
                  <p className={classes.pickup}>
                    Free Pickup and Delivery Available
                  </p>
                  <button className={classes.but}><Link to="/shop" style={{textDecoration: "none", color: "white"}}>Shop Now</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

       
      </Row>

      <Row>
        <Col md={12}>
            <h5 className="text-center border-bottom mt-3">Featured Product</h5>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={3} className="mt-3 ">
          <Slider
            img1={DATA[0].img}
            name1= {DATA[0].id}
            name2= {DATA[1].id}
            name3= {DATA[2].id}
            name4= {DATA[3].id}
            img2={DATA[1].img}
            img3={DATA[2].img}
            img4={DATA[3].img}

          />
        </Col>
        <Col md={3} className="mt-3 ">
          <Slider
            img1={DATA[1].img}
            img2={DATA[2].img}
            img3={DATA[3].img}
            img4={DATA[0].img}
            name1= {DATA[1].id}
            name2= {DATA[2].id}
            name3= {DATA[3].id}
            name4= {DATA[0].id}
          />
        </Col>
        <Col md={3} className="mt-3 ">
          <Slider
            img1={DATA[2].img}
            img2={DATA[3].img}
            img3={DATA[0].img}
            img4={DATA[1].img}
            name1= {DATA[2].id}
            name2= {DATA[3].id}
            name3= {DATA[0].id}
            name4= {DATA[1].id}
          />
        </Col>
        <Col md={3} className="mt-3 ">
          <Slider
            img1={DATA[3].img}
            img2={DATA[0].img}
            img3={DATA[1].img}
            img4={DATA[2].img}

            name1= {DATA[3].id}
            name2= {DATA[0].id}
            name3= {DATA[1].id}
            name4= {DATA[2].id}
          />
        </Col>
      </Row>
      <Outlet/>
    </Container>
  );
}

export default HomeDisplay;
