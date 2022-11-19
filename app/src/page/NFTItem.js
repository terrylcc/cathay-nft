import React from 'react';
import {
  Link
} from "react-router-dom";
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

class NFTItem extends React.Component {

  handleBid() {
    document.getElementById("modal").style.display = "block";
  }

  handleCancel() {
    document.getElementById("modal").style.display = "none";
  }

  render() {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="nftitem">
          <Link to="/nfts">
            <h1>NFT @Cathay</h1>
          </Link>
          <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
          <h2 className='name'>Cathay @ Sai Kung</h2>
          <h2 className='price'>Reserve Price - 8800 HKD</h2>
          <ul className='issuer'>
              <li><img src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt='logo' /></li>
              <li><p>@cathayNFT</p></li>
          </ul>
          <p>The Cathay team has designed this nft to represent Sai Kung</p>
          <p className='benefits'>Benefits:</p>
          <p>Lounge Access (5 times a year)</p>
          <button onClick={this.handleBid}>Place a bid</button>
          <div id="modal" className="modal">
              <div className="modal-content">
                  <img className='close' src={process.env.PUBLIC_URL + '/images/icons/close.svg'} alt='close' onClick={this.handleCancel} />
                  <ul>
                      <li>
                          <p>Your bid</p>
                      </li>
                      <li>
                          <p>Enter bid</p>
                          <p>8800 HKD</p>
                      </li>
                      <li>
                          <p>Your balance</p>
                          <p>12800 HKD</p>
                      </li>
                      <li>
                          <p>Service fee</p>
                          <p>20 HKD</p>
                      </li>
                      <li>
                          <p>Total</p>
                          <p>20 HKD</p>
                      </li>
                  </ul>
                  <button onClick={this.handleCancel}>Place a bid</button>
                  <button className='cancel' onClick={this.handleCancel}>Cancel</button>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NFTItem;