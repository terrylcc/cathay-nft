import React from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import UserInfo from '../components/UserInfo';
import UserSummary from "../components/UserSummary"

class UserProfile extends React.Component {
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
            <UserSummary />
        </div>
      </div>
    )
  }
}

export default UserProfile;