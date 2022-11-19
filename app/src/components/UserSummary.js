import React from 'react'
import {
  Link
} from "react-router-dom";

class UserSummary extends React.Component {
  render() {
    return (
      <div className="usersummary">
        <div className='section'>
            <h2 className='title'>Asia Miles</h2>
            <p className='content'>243,345</p>
            <p className='detail'>View details</p>
        </div>
        <hr />
        <div className='section'>
            <h2 className='title'>Status Points</h2>
            <p className='content'>1050</p>
            <p className='detail'>View details</p>
        </div>
        <div className='section'>
            <h2 className='title'>Cathay Travel NFTs</h2>
            <p className='content'>
                <p>Wallet Connected</p>
                <img src={process.env.PUBLIC_URL + '/images/icons/metamask.png'} alt="metamask" />
            </p>
            <div className='nfts'>
                <div className='nft'>
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                    <p className='info'>Cathay @ London</p>
                </div>
                <div className='nft'>
                    <img src={process.env.PUBLIC_URL + '/images/attractions/sai_kung.jpg'} alt="Sai Kung" />
                    <p className='info'>CX525 @ 4 Nov 2022</p>
                </div>
            </div>
            <Link to="/profile/wallet">
                <p className='detail'>View details</p>
            </Link>
        </div>
      </div>
    )
  }
}

export default UserSummary;