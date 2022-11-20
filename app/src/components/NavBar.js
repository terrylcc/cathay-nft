import React from 'react';
import {
  Link
} from "react-router-dom";

class NavBar extends React.Component {
  handleOpen() {
    document.getElementById("nav").style.right = 0;
  }

  handleClose() {
    document.getElementById("nav").style.right = "-36vw";
  }

  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={process.env.PUBLIC_URL + '/images/icons/logo_full.svg'} alt="logo" />
        </Link>
        <img className="cart" src={process.env.PUBLIC_URL + '/images/icons/cart.svg'} alt="cart" />
        <img className="menu" src={process.env.PUBLIC_URL + '/images/icons/menu.svg'} alt="menu" onClick={this.handleOpen} />
        <div id="nav" className="nav">
          <p onClick={this.handleClose}>Back</p>
          <Link to="/profile">
            Profile
          </Link>
          <Link to="/nft">
            NFT Marketplaces
          </Link>          
        </div>
      </nav>
    )
  }
}

export default NavBar;
