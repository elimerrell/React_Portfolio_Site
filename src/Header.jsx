import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import logo from './images/logo.jpg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="info">
                    <h1>Elijah Merrell</h1>
                    <h3>Web Developer</h3>
                </div>
            </div>
         );
    }
}
 
export default Header;