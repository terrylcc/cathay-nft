import React from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

class UserNFT extends React.Component {
  render() {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="profile">
            <div className='usernft'>
                <h2>Vacation Pass</h2>
                <img src={process.env.PUBLIC_URL + '/images/attractions/theme_park.jpg'} alt="theme park" />
                <h2>CX525 @ 4 Nov 2022</h2>
                <img className='qrcode' src={process.env.PUBLIC_URL + '/images/qrcode.png'} alt="qr code" />
                <ul className='issuer'>
                    <li><img src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt='logo' /></li>
                    <li><p>@cathayNFT</p></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default UserNFT;