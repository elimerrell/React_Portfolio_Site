import React from 'react';
import Header from './Header.jsx'
import './App.css';
import Navigation from './Navigation.jsx'
import Projects from './Projects.jsx';
import Maps from './Maps.jsx'
import Technologies from './Technologies.jsx'


function App() {
  return (
    <div className="App">
        <Navigation/>
        <div id="home"></div><Header/>
        <div id="projects"><Projects/></div>
        <div id="gis"><Maps/></div>
        <div id="skills"><Technologies/></div>
    </div>
  );
}

export default App;
