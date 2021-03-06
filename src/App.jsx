import React, {Component} from 'react';
import Header from './components/Header.jsx'
import './App.css';
import Navigation from './components/Navigation.jsx'
import Projects from './components/Projects.jsx';
import Maps from './components/Maps.jsx'
import Technologies from './components/Technologies.jsx'
import ResumeModal from './components/ResumeModal.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showSidebar: false, 
      showModal: false
     }
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }

  render() { 
    return ( 
      <div className="App">
        <Navigation/>
        <Header/>
        <Projects/>
        <Maps/>
        <Technologies handleShow={this.handleShow}/>
        <div class="icon-bar">
          <a href="https://github.com/elimerrell" target="_blank" rel="noopener noreferrer" class="github"><i class="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/eli-merrell-1444a5135/" class="linkedin" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin"></i></a>
          <a href="https://twitter.com/merrell_eli" class="twitter" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
          <a href="https://www.youtube.com/channel/UCbpjYLwvygNVirSG02A-RKQ?view_as=subscriber" class="youtube" target="_blank" rel="noopener noreferrer"><i class="fa fa-youtube"></i></a>
        </div>
        <ResumeModal showModal={this.state.showModal} handleClose={this.handleClose} handleShow={this.handleShow}/>
      </div> 
    );
  }
}

export default App;
