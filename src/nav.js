import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
    render() {
      return(
        <nav style={{display:this.props.display}}>
          <ul >
            <li>Mens
              <ul className="selections1">
                <ul id="mens-apparel">
                  <h1>Apparel</h1>
                  <li>Dress Shirt</li>
                  <li>Casual Shirts</li>
                  <li>Sweaters</li>
                  <li>Coats & Jackets</li>
                  <li>Dress Pants</li>
                  <li>Jeans</li>
                  <li>Shorts</li>
                  <li>Swim</li>
                </ul>
                <ul id="mens-accessories">
                  <h1>Accessories</h1>
                  <li>Hats & Scarves</li>
                  <li>Watches</li>
                  <li>Ties</li>
                  <li>Gloves</li>
                  <li>Shoes</li>
                </ul>
                <div className="nav-img nav-img1m"></div>
                <div className="nav-img nav-img2m"></div>
                <div className="nav-img nav-img3m"></div>
              </ul>
            </li>
            <li>Womens
              <ul className="selections2">
                <ul id="mens-apparel">
                  <h1>Apparel</h1>
                  <li>Blouses & Shirts</li>
                  <li>Dresses</li>
                  <li>Sweaters</li>
                  <li>Outerwear</li>
                  <li>Suits</li>
                  <li>Jeans</li>
                  <li>Shorts</li>
                  <li>Swim</li>
                </ul>
                <ul id="mens-accessories">
                  <h1>Accessories</h1>
                  <li>Hats & Scarves</li>
                  <li>Jewelry</li>
                  <li>Gloves</li>
                  <li>Shoes</li>
                </ul>
                <div className="nav-img nav-img1w"></div>
                <div className="nav-img nav-img2w"></div>
                <div className="nav-img nav-img3w"></div>
              </ul>
            </li>
          </ul>
        </nav>
      );
    }
  }

export default Nav;