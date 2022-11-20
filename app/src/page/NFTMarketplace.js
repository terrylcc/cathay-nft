import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
  Link
} from "react-router-dom";
import NFTCollection  from '../components/NFTCollection';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
const NFTApiUrl = "https://jd2r369gmf.execute-api.ap-southeast-1.amazonaws.com/dev/nft";
function NFTMarketplace() {
  const [NFTs, setNFTs] = useState([]);
  useEffect(() => {
    axios.get(NFTApiUrl).then((res) => {
      setNFTs(res.data.body);
    })
  }, []);
  console.log(NFTs)
  if (NFTs === []) {
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="nftmarketplace">
          <Link to="/nft">
            <h1>NFT @Cathay</h1>
          </Link>
        </div>
      </div>
  } else {
    NFTs.sort((a, b) => { // sort the id
      if (a.id.S <= b.id.S)
        return -1
      else 
        return 1
    })
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="nftmarketplace">
          <Link to="/nft">
            <h1>NFT @Cathay</h1>
          </Link>
          <ul className="nftexhibition">
              <li><NFTCollection themeName={"Green"} themeNFTList={NFTs.slice(0, 3)}/></li>
              <li><NFTCollection themeName={"Airport City"} themeNFTList={NFTs.slice(3, 6)}/></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NFTMarketplace;