import React, { Component } from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Elijah Merrell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#projects">Technical Projects</Nav.Link>
                    <Nav.Link href="#gis">GIS</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            </Navbar>
         );
    }
}
 
export default Navigation;