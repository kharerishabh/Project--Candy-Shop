import React from "react"
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { uiActions } from "../../store/ui-slice";

const Header = () => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(state => state.auth)
    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (<>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Candy Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Link to="/product">Product</Link>
      </Nav>
      <Button onClick={() => dispatch(uiActions.handleShow())}>Cart</Button>
      {isAuthenticated && <Button variant="danger" onClick={logoutHandler}>Logout</Button>}
    </Container>
  </Navbar>
  </>)
}

export default Header;