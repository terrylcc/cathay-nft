import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import {
  useLocation
} from "react-router-dom";
const NFTApiUrl = "https://jd2r369gmf.execute-api.ap-southeast-1.amazonaws.com/dev";

function UserNFT() {
  const location = useLocation();
  const endpoint = NFTApiUrl + location.pathname.substring(15);

  // Retrieve NFT data from API endpoints
  const [NFT, setNFT] = useState(undefined);
  useEffect(() => {
    axios.get(endpoint).then((res) => {
      setNFT(res.data);
    })
  }, []);

  // Return the JSX template
  if (NFT !== undefined) {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="profile">
            <div className='usernft'>
                <h2>{NFT.name}</h2>
                <img src={NFT.img_url} alt="theme park" />
                <h2>{NFT.desc}</h2>
                {
                  NFT.qr_img_url !== undefined ? (<img className='qrcode' src={NFT.qr_img_url} alt="qr code" />) : undefined
                }
                <ul className='issuer'>
                    <li><img src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt='logo' /></li>
                    <li><p>@cathayNFT</p></li>
                </ul>
            </div>
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
          <div className="profile">
              <div className='usernft'>
              </div>
          </div>
        </div>
    );
  }
  
}

export default UserNFT;