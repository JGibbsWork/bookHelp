import React from 'react';
import axios from 'axios';

export default function SearchIt (props) {

  function trends () {
    let city = props.city.replace(/\s/g, '+');
    let search = props.search.replace(/\s/g, '+');
    axios.get(`/${city}/${search}`)
      .then((results) => {console.log(results)})
  }

  return (
    <>
      <button onClick={trends}>Check it out</button>
    </>
  )
}