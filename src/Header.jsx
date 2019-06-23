import React, { Component } from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import logo from './logo.jpg'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div class="info">
                <h1>Elijah Merrell</h1>
                <h2>Web Developer</h2>
                <h4>Geospatial Enthusiast</h4>
                <a href="https://github.com/elimerrell" target="_blank"><i class="devicon-github-plain-wordmark colored"></i></a>
            </div>
        </header>
         );
    }
}
 
export default Header;