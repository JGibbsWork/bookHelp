import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

export default function SearchIt (props) {
  let history = useHistory();

  function trends () {
    let city = props.city.replace(/\s/g, '+');
    let search = props.search.replace(/\s/g, '+');
    axios.post(`/${city}/${search}`)
      .then(() => {
        history.push('/feed');
      })
  }

  return (
    <>
      <p className="submit" onClick={trends}>Check it out</p>
    </>
  )
}