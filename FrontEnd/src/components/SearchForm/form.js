import React, { useState } from 'react';
import axios from 'axios';
import CitySelect from './CitySelect';
import SearchTerm from './SearchTerm';
import SearchIt from './SearchIt';
import { Link, useHistory } from 'react-router-dom';

export default function Form () {

  let history = useHistory();

  const [city, setCity] = useState('New York');
  const [search, setSearch] = useState('');

  function handleSubmit (e) {
      let cityS = city.replace(/\s/g, '+');
      let searchS = search.replace(/\s/g, '+');
      axios.post(`/${cityS}/${searchS}`)
      history.push('/feed')

  }

  function onSelect(e) {
    setCity(e.target.value);
  }

  function onChange(e) {
    setSearch(e.target.value);
    e.preventDefault();
  }

  return (
    <div className="formPage">
      <div className="formCard">
        <h1>Search for something new</h1>
        <div className="formSubTitle">
          <p>Select a city and type in a search term to see how often people are searching for that term. This will produce a comparison on averages from city, state and national search frequencies.</p>
          <br/>
          <form onSubmit={handleSubmit}>
            <label>Select a city:</label>
            <br/>
            <CitySelect onSelect={onSelect}/>
            <br/>
            <label>Type your search term here:</label>
            <br/>
            <SearchTerm onChange={onChange}/>
            <br/>
            <br/>
            <SearchIt city={city} search={search}/>
          </form>
        </div>
      </div>
    </div>
  )
}