import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
export default class Navs extends Component {
  render() {
    return (
      // <Navbar  expand="lg" sticky="top" className="shadow p-2 main-nav">
      //   <Navbar.Brand href="#home">Home</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav" className="just">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#projects">Projects</Nav.Link>
      //       <Nav.Link href="#for-sale">For Sale</Nav.Link>
      //       <Nav.Link href="#skill">Skills</Nav.Link>
      //       <Nav.Link href="#resume">Resume</Nav.Link>
      //       <Nav.Link href="#contact">Contact</Nav.Link>

      //       {/* <NavDropdown title="s" id="basic-nav-dropdown">
      //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      //         <NavDropdown.Divider />
      //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      //       </NavDropdown> */}
      //     </Nav>
      //     {/* <Form inline>
      //       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      //       <Button variant="outline-success">Search</Button>
      //     </Form> */}
      //   </Navbar.Collapse>
      // </Navbar>
      <Navbar className="nav-bg" expand="lg" >
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto ">
            <Nav.Link href="#projects" disabled>Projects</Nav.Link>
            <Nav.Link href="#skills" >Skills</Nav.Link>
            <Nav.Link href="#link" disabled>Resume</Nav.Link>
            <Nav.Link href="#contact-me">Contact Me</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
