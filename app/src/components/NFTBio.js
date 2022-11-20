import React from 'react';
import {
  Link
} from "react-router-dom";
function NFTBio({ NFT }) {

  // Return the JSX template
  if (NFT === undefined) {
    return (
      <div className="nftbio">
      </div>
    );
  } else {
    const custom_fields = JSON.parse(NFT.custom_fields.S)
    return (
      <div className="nftbio">
        <Link to={"/nft/" + NFT.id.S} >
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