import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { sideBarActions } from "../Store/store";
import ModalItems from "./ModalItems";
import classes from "./Modal.module.css";
import { Link } from "react-router-dom";

function CartModal() {
  const selector = useSelector((state) => state.bar.showModal);

  const itemsSelector = useSelector((state) => state.bar.onCart);

  const TotalSelector = useSelector((state) => state.bar.totalAmount);

  

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(sideBarActions.hideModal());
  };

  const itemsOncart = itemsSelector.map((item) => (
    <ModalItems
      key={item.id}
      name={item.name}
      price={item.price}
      totalPrice={item.totalPrice}
      id={item.id}
      quantity={item.quantity}
    />
  ));

  return (
    <>
      <Modal show={selector} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Total: ₦{TotalSelector}</Modal.Title>
        </Modal.Header>
        <div className={classes["modal-height"]}>{itemsOncart}</div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          {
              itemsSelector.length > 0 &&
          <Button style={{backgroundColor: "green", border:"none"}}  onClick={handleClose}>
           
            <Link to="/order" style={{color:"white", textDecoration:"none"}}>
            Order
            </Link>
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
