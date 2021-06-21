import React from 'react';
import axios from 'axios';
import CitySelect from './CitySelect.js';
import SearchTerm from './SearchTerm.js';

export default function BookHelp () {
  return (
    <div>
      <h1>Book Help</h1>
      <CitySelect />
      <SearchTerm />
    </div>
  )
}