import React, { useState, useEffect } from 'react';
import SearchBar from "./Searchbar";

const Search = (props) => {
  const [input, setInput] = useState('');

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      ;}


  useEffect( () => {fetchData()},[]);
	
  return (
    
      <SearchBar 
       input={input} 
      />
   
   );
}

export default Search