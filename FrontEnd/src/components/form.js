import React, { useState } from 'react';
import CitySelect from './CitySelect.js';
import SearchTerm from './SearchTerm.js';
import SearchIt from './SearchIt.js';

export default function Form () {

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
      <CitySelect onSelect={onSelect}/>
      <SearchTerm onChange={onChange}/>
      <SearchIt city={city} search={search}/>
    </div>
  )
}