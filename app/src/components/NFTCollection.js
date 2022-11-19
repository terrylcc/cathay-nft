import React from 'react'
import NFTBio from './NFTBio';

function NFTCollection({ themeNFTList }){
  return (
    <div className="nftcollection">
      <h1>Hong Kong Theme</h1>
      <ul className="nftgallery">
          <li><NFTBio NFT={themeNFTList[0]}/></li>
          <li><NFTBio NFT={themeNFTList[1]}/></li>
          <li><NFTBio NFT={themeNFTList[2]}/></li>
      </ul>
    </div>
  );
}

export default NFTCollection;