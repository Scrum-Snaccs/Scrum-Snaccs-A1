import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./SERL.jpg"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import {Navbar} from 'react-bootstrap/Navbar'
// import {Nav} from 'react-bootstrap/Nav'
// import {NavDropdown} from 'react-bootstrap/NavDropdown'
//import {Navbar,NavDropdown,Form,FormControl,Nav} from 'react-bootstrap/Navbar'

const logoStyle = {
  width: "50px",
  borderRadius: "50%",
};
export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src="/SERLmain.png"
        // width="30"
        // height="30"
        width="50%"
        position="absolute"
        className="d-inline-block align-top"
        
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Create an Account</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
              <NavDropdown title="Roles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Moderator</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Analyst</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Submitter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">General User</NavDropdown.Item>
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      {/* <Button variant="outline-success">Search</Button> */}
    {/* </Form> */}
  </Navbar.Collapse>
</Navbar>
    );
  }
}
