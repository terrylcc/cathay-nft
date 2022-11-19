import React from 'react'
import {
  Link
} from "react-router-dom";

class UserNFTs extends React.Component {
  render() {
    return (
      <div className="usernfts">
        <h2>Wallet</h2>
        <div className='nfts'>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>Cathay @ London</p>
            </div>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>CX525 @ 4 Nov 2022</p>
            </div>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>Cathay @ London</p>
            </div>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>CX525 @ 4 Nov 2022</p>
            </div>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>Cathay @ London</p>
            </div>
            <div className='nft'>
                <Link to="/profile/wallet/nft">
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                </Link>
                <p className='info'>CX525 @ 4 Nov 2022</p>
            </div>
        </div>
      </div>
    )
  }
}

export default UserNFTs;