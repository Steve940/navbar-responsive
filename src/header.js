import React, { Component } from 'react';
import Nav from './nav';
import './header.css';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color:'blue',
        display:"none",
        navDisplay:"flex"
      };
      this.toggleColor = this.toggleColor.bind(this);
      this.toggleNavDisplay = this.toggleNavDisplay.bind(this);
    }
    
    toggleNavDisplay() {
      this.setState({
        navDisplay: ((this.state.navDisplay === 'none') ? "flex" : "none")
      });
    }
    
    toggleColor() {
      this.setState({
        display: ((this.state.display === 'none') ? "flex" : "none")
      });
    }
    
    render() {
      return(
        <div>
          <div className="header">
            <div id="header-special">
              <p>Men's Special - Buy 1 Dress Shirt, Get One 50% Off</p>
            </div>
            <div id="signIn" onMouseEnter={this.toggleColor} onMouseLeave={this.toggleColor}>
              <div>Sign In</div>    
              <div id="yourAccount">Your Account <img class="img-arrow" src="https://d30y9cdsu7xlg0.cloudfront.net/png/10897-200.png" alt='header'/>
              </div>
              <div id="email" style={{display:this.state.display}}>Email Address
                <input type="text"/>
                Password
                <input type="text"/>
                <button>Submit</button>
              </div>
            </div>
  
  
          <div id="icon" onClick={this.toggleNavDisplay}  ><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>
  
          </div> 
          <Nav display={this.navDisplay}/>  
        </div>
      );
    }
}

export default Header;