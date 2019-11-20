import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

render(){


  return (
    <div className="App">

<img src="https://manabox-global.com/wp-content/uploads/2016/08/vadim-sherbakov-30.jpg" alt="desk flat lay" id='background' />

      <header id='header-container'>
        <div className="logo"> Start Bootstrap </div>
        <nav className="stickynavbar">
          <nav id='nav-links'>
          <a href='#services'>SERVICES</a>
          <a href='#portfolio'>PORTFOLIO</a>
          <a href='#about'>ABOUT</a>
          <a href='team'>TEAM</a>
          <a href='contact'>CONTACT</a>
          </nav>
          </nav>
<button id='hamburgerbtn'>
<FontAwesomeIcon icon='bars' id='hamburger' />
</button>

   <div id='welcome'> Welcome to Our Studio! </div>
    <div id='meet'> IT'S NICE TO MEET YOU </div>
    <button id='tmm'> Tell Me More </button>
      </header>
      </div>
    
  );
}
}

export default App;
