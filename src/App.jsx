import React, {Component} from 'react';
import Header from './Header.jsx'
import './App.css';
import Navigation from './Navigation.jsx'
import Projects from './Projects.jsx';
import Maps from './Maps.jsx'
import Technologies from './Technologies.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showSidebar: false
     }
  }

  render() { 
    return ( 
      <div className="App">
        <Navigation/>
        <div id="home"></div><Header/>
        <div id="projects"><Projects/></div>
        <div id="gis"><Maps/></div>
        <div id="skills"><Technologies/></div>
        <div class="icon-bar">
          <a href="https://github.com/elimerrell" target="_blank" class="github"><i class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/eli-merrell-1444a5135/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a>
          <a href="https://twitter.com/merrell_eli" class="twitter" target="_blank"><i class="fa fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCbpjYLwvygNVirSG02A-RKQ?view_as=subscriber" class="youtube" target="_blank"><i class="fa fa-youtube"></i></a>
        </div>
      </div> 
    );
  }
}

export default App;
