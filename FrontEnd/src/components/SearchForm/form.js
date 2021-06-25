import React, { useState } from 'react';
import CitySelect from './CitySelect.js';
import SearchTerm from './SearchTerm.js';
import SearchIt from './SearchIt.js';

export default function Form () {

  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');

  function onSelect(e) {
    setCity(e.target.value);
  }

  function onChange(e) {
    setSearch(e.target.value);
    e.preventDefault();
  }

  return (
    <div className="formCard">
      <h1>Search for something new</h1>
      <p>Select a city and type in a search term to see how often people are searching for that term. This will produce a comparison on averages from city, state and national search frequencies.</p>
      <form>
        <label>Select a city</label>
        <br/>
        <CitySelect onSelect={onSelect}/>
        <br/>
        <label>Type your search term</label>
        <br/>
        <SearchTerm onChange={onChange}/>
        <br/>
        <SearchIt city={city} search={search}/>
      </form>
    </div>
  )
}