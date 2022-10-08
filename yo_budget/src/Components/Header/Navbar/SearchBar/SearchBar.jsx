import React from 'react';
import "./SearchBar.css";

function Searchbar() {
  return (
    <div className='search-bar'>
      <input type="text" className='search-in' placeholder='Search here'/>
    </div>
  )
}

export default Searchbar