import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {
  Link, useLocation
} from "react-router-dom";
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
const NFTApiUrl = "https://jd2r369gmf.execute-api.ap-southeast-1.amazonaws.com/dev";

function NFTItem () {
  const location = useLocation();
  const endpoint = NFTApiUrl + location.pathname;

  // Retrieve NFT data from API endpoints
  const [NFT, setNFT] = useState(undefined);
  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setNFT(res.data);
    })
  }, []);

  // Handle clicking the "Place a bid" button
  const handleBid = () => {
    document.getElementById("modal").style.display = "block";
  }

  // Handle closing the bidding modal
  const handleCancel = () => {
    document.getElementById("modal").style.display = "none";
  }

  // Return the JSX template
  if (NFT === undefined) {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="nftitem">
        </div>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="nftitem">
          <Link to="/nft">
            <h1>NFT @Cathay</h1>
          </Link>
          <img src={NFT.img_url} alt="Sai Kung" />
          <h2 className='name'>Cathay @ {NFT.name} </h2>
          <h2 className='price'>Reserve Price - {NFT.bidding_price} HKD</h2>
          <ul className='issuer'>
              <li><img src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt='logo' /></li>
              <li><p>@cathayNFT</p></li>
          </ul>
          <p>{NFT.desc}</p>
          <p className='benefits'>Benefits:</p>
          <p>{NFT.benefit}</p>
          <button onClick={handleBid}>Place a bid</button>
          <div id="modal" className="modal">
              <div className="modal-content">
                  <img className='close' src={process.env.PUBLIC_URL + '/images/icons/close.svg'} alt='close' onClick={handleCancel} />
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
                  <button onClick={handleCancel}>Place a bid</button>
                  <button className='cancel' onClick={handleCancel}>Cancel</button>
              </div>
          </div>
        </div>
      </div>
    )
  } 
}

export default NFTItem;