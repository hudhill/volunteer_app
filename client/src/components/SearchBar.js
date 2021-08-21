import React from 'react';
import '../css/SearchBar.css';

const SearchBar = ({setCharity, charities}) => {
  return (
    <>
    <div className="search-bar">
      <p>Search by charity: </p>
      <select defaultValue="all" onChange={(e) => setCharity(e.target.value)}>
        <option value="all">All Charities</option>
        {charities.map((charity)=>{
          return <option key={charity._id} value={charity._id}>{charity.name}</option>
        })}
      </select>  
    </div>
    </>
  )

}

export default SearchBar;