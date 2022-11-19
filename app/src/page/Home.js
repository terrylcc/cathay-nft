import React from 'react'
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

class NFTMarketplace extends React.Component {
  render() {
    return (
      <div className='App'>
        <header>
          <NavBar />
          <SearchBar />
        </header>
        <div className="home">
            Hello World
        </div>
      </div>
    )
  }
}

export default NFTMarketplace;