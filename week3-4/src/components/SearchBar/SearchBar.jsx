import React, {useState} from 'react';
import './SearchBar.css';


const SearchBar=({onSearch})=> {
  
  const [inputValue, setInputValue] = useState({
    name:''
  });
 

  const handleEvent = (e) =>{
   setInputValue({
     ...inputValue,
     name : e.target.value
   })
  }
  const searchPokemon=(e)=>{
    e.preventDefault()
    onSearch(inputValue)
  }
      return (
        <div className='searchBar'>
           <input type='text' name='input' placeholder='Insert you pokemon'  onChange={handleEvent}/>
          <button className='btn-searchbar' onClick={searchPokemon} >Search</button>
        </div>
      )
}
export default SearchBar
