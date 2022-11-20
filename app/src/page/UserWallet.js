import React from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';
import UserNFTs from "../components/UserNFTs"

class UserWallet extends React.Component {
  // Return the JSX template
  render() {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="profile">
            <UserInfo />
            <UserNFTs />
        </div>
      </div>
    )
  }
}

export default UserWallet;