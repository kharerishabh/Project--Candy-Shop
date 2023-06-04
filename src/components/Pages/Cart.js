import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Cart = () => {
  const show = useSelector((state) => state.ui.show);
  const dispatch = useDispatch();
  const {candyItem, totalAmount, totalQuantity} = useSelector(state => state.candy)
  return (
    <Modal show={show} onHide={() => dispatch(uiActions.handleShow())}>
        <Modal.Header closeButton>
          <Modal.Title>chocolate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
          {candyItem.map((item, index) => (
            <li key={index}>{item.name} {item.price} {item.quantity}</li>
          ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Cart;
