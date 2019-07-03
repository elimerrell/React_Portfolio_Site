import React from 'react';
import logo from '../images/logo.jpg'

const Header = () => {
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
 
export default Header;