import React from 'react';
import axios from 'axios';

export default function SearchIt (props) {

  function trends () {
    let city = props.city.replace(/\s/g, '+');
    let search = props.search.replace(/\s/g, '+');
    axios.post(`/${city}/${search}`)
      .then(() => {console.log('suppppp')})
  }

  return (
    <>
      <button onClick={trends}>Check it out</button>
    </>
  )
}