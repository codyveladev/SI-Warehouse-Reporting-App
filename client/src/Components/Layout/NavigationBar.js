import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';


export default function NavigationBar(props) {
    return (
      <Navbar collapseOnSelect className="py-4"expand="lg" bg="primary" variant="dark">
        <Navbar.Brand id="brand-text" href="/dashboard">
          Spitzer Industries Inc. 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={`/${props.link}`}>{props.linkTitle}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Log Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

