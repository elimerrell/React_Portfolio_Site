import React from 'react';
import { Navbar} from 'react-bootstrap'

const Navigation = () => {
    return ( 
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Elijah Merrell</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
    );
}
 
export default Navigation;