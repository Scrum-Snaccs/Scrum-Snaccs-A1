import React, { Component } from "react";
import logo from "./SERL.jpg";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import {Navbar} from 'react-bootstrap/Navbar'
// import {Nav} from 'react-bootstrap/Nav'
// import {NavDropdown} from 'react-bootstrap/NavDropdown'
//import {Navbar,NavDropdown,Form,FormControl,Nav} from 'react-bootstrap/Navbar'

const logoStyle = {
  width: "80px",
  borderRadius: "50%",
};
export default class NavigationBar extends Component {
  render() {
    return (
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">
        <Link to="/" className="navbar-brand">
        <img src={logo} style={logoStyle} alt="logo" />
            {/* <img
            src="./SERL.jpg"
            width="100"
            height="100"
            position="absolute"
            className="d-inline-block align-top"></img> */}
        </Link>
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Create an Account</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
              <NavDropdown title="Roles" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Moderator
                <Link to="/moderator" className="nav-link"></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
                 
              <NavDropdown.Item href="#action/3.2">Analyst</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Submitter
                 <Link to="/submitter" className="nav-link"></Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">General User</NavDropdown.Item>
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
