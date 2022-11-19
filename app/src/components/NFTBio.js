import React from 'react';
import {
  Link
} from "react-router-dom";
function NFTBio({ NFT }) {
  if (NFT === undefined) {
    return (
      <div className="nftbio">
        <Link to="/nfts/nft">
          <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
        </Link>
        <div className='info'>
            <p>Cathay @ Sai Kung Bidding at 5300 HKD</p>
            <img src={process.env.PUBLIC_URL + '/images/icons/heart.svg'} alt="heart" />
        </div>
      </div>
    );
  } else {
    const custom_fields = JSON.parse(NFT.custom_fields.S)
    return (
      <div className="nftbio">
        <Link to="/nfts/nft">
          <img src={custom_fields.img_url} alt="Sai Kung" />
        </Link>
        <div className='info'>
            <p>Cathay @ {custom_fields.name} at {custom_fields.bidding_price} HKD</p>
            <img src={process.env.PUBLIC_URL + '/images/icons/heart.svg'} alt="heart" />
        </div>
      </div>
    );
  }
  
}

export default NFTBio;