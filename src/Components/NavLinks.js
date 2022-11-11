import Nav from "react-bootstrap/Nav";
import classes from "./NavLinks.module.css"
import { Outlet, Link } from "react-router-dom";

const NavLinks = () => {
  return (<> 
    <Nav className="me-auto  m-auto nav-links-display">
      <Nav.Link  className={`${"text-black"} ${classes.h6} `}>
        <Link to="/" className={classes["nav-links--items"]}>
        <h6 >HOME</h6>
        </Link>
      </Nav.Link>
      <Nav.Link  className={`${"text-black"} ${classes.h6}`}>
        <Link to="/shop" className={classes["nav-links--items"]}>
        <h6 >SHOP</h6>
        </Link>
      </Nav.Link>
      
      
    </Nav>
    <Outlet/></>
  );
};

export default NavLinks