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
  const [NFTs, setNFTs] = useState(undefined);
  useEffect(() => {
    axios.get(NFTApiUrl).then((res) => {
      setNFTs(res.data.body);
    })
  }, []);
  return (
    <div className='App'>
      <header>
        <NavBar />
        <SearchBar />
      </header>
      <div className="nftmarketplace">
        <Link to="/nfts">
          <h1>NFT @Cathay</h1>
        </Link>
        <ul className="nftexhibition">
            <li><NFTCollection themeNFTList={[]}/></li>
            <li><NFTCollection themeNFTList={[]}/></li>
        </ul>
      </div>
    </div>
  )
}

export default NFTMarketplace;