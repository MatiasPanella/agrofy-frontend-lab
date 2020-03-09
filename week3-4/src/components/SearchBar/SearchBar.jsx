import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar=( inputVal,props)=> {
  
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value);
  }
   

      return (
        <div className='searchBar'>
          <input type='text' value={props.inputVal} placeholder='Insert you pokemon'  onChange={handleChange}/>
          <button className='btn-searchbar' >Search</button>
        </div>
      )
}
export default SearchBar
