import React from 'react'

class UserInfo extends React.Component {
  // Return the JSX template
  render() {
    return (
      <div className="userinfo">
        <ul>
            <li className='name'>Kenneth L. Hutchinson</li>
            <li className='membership'>Diamond 212 4324 231</li>
            <li className='edit'>Edit profile</li>
        </ul>
        <img className="logo" src={process.env.PUBLIC_URL + '/images/icons/logo.png'} alt="logo" />
      </div>
    )
  }
}

export default UserInfo;