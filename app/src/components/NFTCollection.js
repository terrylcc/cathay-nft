import React from 'react'
import NFTBio from './NFTBio';

class NFTCollection extends React.Component {
  render() {
    return (
      <div className="nftcollection">
        <h1>Hong Kong Theme</h1>
        <ul className="nftgallery">
            <li><NFTBio /></li>
            <li><NFTBio /></li>
            <li><NFTBio /></li>
        </ul>
      </div>
    )
  }
}

export default NFTCollection;