import React, { useState } from 'react';
import CitySelect from './CitySelect.js';
import SearchTerm from './SearchTerm.js';
import SearchIt from './SearchIt.js';

export default function BookHelp () {

  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');

  function onSelect(e) {
    console.log(e.target.value)
    setCity(e.target.value);
  }

  function onChange(e) {
    setSearch(e.target.value);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Book Help</h1>
      <CitySelect onSelect={onSelect}/>
      <SearchTerm onChange={onChange}/>
      <SearchIt city={city} search={search}/>
    </div>
  )
}