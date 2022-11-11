import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import classes from "./Nav.module.css";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { sideBarActions } from "../Store/store";


function MyNavBar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const dispatch = useDispatch();
  const selector = useSelector(state=>state.bar.show)

 



  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

if( windowSize.innerWidth >= 900){

  dispatch(sideBarActions.hidSideBar())
 

}



  const handleShowSideBar = () => {
    dispatch(sideBarActions.showSideBar())

    
    
  };

  return (
    <Navbar collapseOnSelect expand="lg" className={classes.color}>
      
      <Container>
        <Navbar.Brand href="#home">
          <h2 style={{ color: "green"}}>CHILE PROJECT</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShowSideBar}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {windowSize.innerWidth >= 900  && <NavLinks />}
         
          {selector && <Sidebar />}
          <Nav>
            {windowSize.innerWidth >= 900  &&  <NavCart />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
