import React from 'react';
import logo from '../images/logo.jpg'
import Contact from '../components/Contact.jsx'

const Header = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="info">
                <Contact/>
            </div>
        </div>
        );
}
 
export default Header;