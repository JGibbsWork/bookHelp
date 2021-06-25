import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export default function SearchIt (props) {
  let history = useHistory();

  function trends () {
    let city = props.city.replace(/\s/g, '+');
    let search = props.search.replace(/\s/g, '+');
    if (city && state) {
      axios.post(`/${city}/${search}`)
        .then(() => {
          history.push('/feed');
        })
    }
  }

  return (
    <>
    <div className="searchBox">
      <button type="submit" onClick={trends} value="Check it out">Check it out</button>
    </div>
    </>
  )
}