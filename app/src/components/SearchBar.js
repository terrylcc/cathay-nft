import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <img className="search" src={process.env.PUBLIC_URL + '/images/icons/search.svg'} alt="search" />
        <input type="text" id="search" name="search" />
      </div>
    )
  }
}

export default SearchBar;
