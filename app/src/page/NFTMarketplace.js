import React from 'react'
import {
  Link
} from "react-router-dom";
import NFTCollection  from '../components/NFTCollection';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

class NFTMarketplace extends React.Component {
  render() {
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
              <li><NFTCollection /></li>
              <li><NFTCollection /></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NFTMarketplace;