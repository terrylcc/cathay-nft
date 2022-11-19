import React from 'react';
import {
  Link
} from "react-router-dom";

class NFTBio extends React.Component {
  render() {
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
    )
  }
}

export default NFTBio;