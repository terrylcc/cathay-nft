import React from 'react'
import {
  Link
} from "react-router-dom";

class UserSummary extends React.Component {
  // Return the JSX template
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
            <Link to="/profile/wallet">
                <p className='detail'>View details</p>
            </Link>
        </div>
      </div>
    )
  }
}

export default UserSummary;