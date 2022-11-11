import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../Store/store";
import NavCart from "./NavCart";
import USA from "../images/USA.webp";
import France from "../images/France.webp";
import classes from "./Sidebar.module.css";
import NavLinks from "./NavLinks";

function Sidebar(props) {
  const [show, setShow] = useState(false);
  const selector = useSelector((state) => state.bar.show);
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleClose = () => {
    dispatch(sideBarActions.hidSideBar());
  };

  const handleHover = () => {
    setHover(true);
  };
  const removeHover = () => {
    setHover(false);
  };
  const handleNavLinks = () => {
    setShowNavLinks((prev) => !prev);
  };
  let elem = (
    <div>
      <p>English</p>
      <p class="m-0 p-0">French</p>
    </div>
  );

  return (
    <div className={classes["sidebar-width"]}>
      <Alert variant="info" className="d-none d-lg-block">
        Resize your browser to show the responsive offcanvas toggle.
      </Alert>

      <Offcanvas show={selector} onHide={handleClose} responsive="md" className={classes["sidebar-width"]} offcanvas-size-xl>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>CHILE PROJECT</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          <p className="mb-0">
            <NavCart />
            <div className={classes["icon-display"]}>
              <div
                className={classes["img-width"]}
                onMouseEnter={handleHover}
                onMouseLeave={removeHover}
              >
                <img src={USA} class="img-fluid" />
              </div>
              <span onMouseOver={handleHover} onMouseOut={removeHover}>
                English
              </span>
              <i
                class="fa-solid fa-chevron-down"
                onMouseOver={handleHover}
                onMouseOut={removeHover}
              ></i>
              <div className={`${classes.size}`}>
                <i class="fa-solid fa-user"></i>
                <span>Login</span>
              </div>
            </div>
            {hover && elem}

            <div className={classes["btn-container"]}>
              <div className={classes["btn-display"]}>
                <button
                  className="btn bg-dark text-white mr-auto"
                  onClick={handleNavLinks}
                >
                  {" "}
                  MENU <i class="fa-solid fa-bars"></i>
                </button>
              </div>
              {showNavLinks && <NavLinks />}
            </div>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
