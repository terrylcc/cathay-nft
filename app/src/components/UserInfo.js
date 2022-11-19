import React from 'react'

class UserInfo extends React.Component {
  render() {
    return (
      <div className="userinfo">
        <ul>
            <li className='name'>Kenneth L. Hutchinson</li>
            <li className='membership'>Diamond 2124 32 423</li>
            <li className='edit'>Edit profile</li>
        </ul>
        <img className="logo" src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt="logo" />
      </div>
    )
  }
}

export default UserInfo;