import React, { Component } from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faBars);

class App extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }
  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.toggleMenu 
        ? (<header id="header-container">
            <div className="logo"> Start Bootstrap </div>
              <nav id="nav-links">
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#about">ABOUT</a>
                <a href="#team">TEAM</a>
                <a href="#contact">CONTACT</a>
              </nav>
           
            <button id="hamburgerbtn" onClick={this.handleToggle}>  MENU <FontAwesomeIcon icon="bars" id="hamburger" />
            </button>
          </header>
        ) : (
          <>
            <header id="header-container">
            <nav id="nav-links">
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#about">ABOUT</a>
                <a href="#team">TEAM</a>
                <a href="#contact">CONTACT</a>
              </nav>
              <div className="logo"> Start Bootstrap </div>
              <button id="hamburgerbtn" onClick={this.handleToggle} >  MENU <FontAwesomeIcon icon="bars" id="hamburger" />
              </button>
            </header>
            <nav id='drop-menu'>
                  <a href="#services">SERVICES</a>
                  <a href="#portfolio">PORTFOLIO</a>
                  <a href="#about">ABOUT</a>
                  <a href="#team">TEAM</a>
                  <a href="#contact">CONTACT</a>
                </nav>
          </>
        )}

        <img
          src="https://manabox-global.com/wp-content/uploads/2016/08/vadim-sherbakov-30.jpg"
          alt="desk flat lay"
          id="background"
        />
       
        <div id="welcome"> Welcome to Our Studio! </div>
        <div id="meet"> IT'S NICE TO MEET YOU </div>
        <button id="tmm"> TELL ME MORE </button>
      </div>
    );
  }
}

export default App;
