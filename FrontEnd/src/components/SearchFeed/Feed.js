import React, { useState } from 'react';
import axios from 'axios';
import ResList from './ResList.js';

export default function Feed () {

  const [list, setList] = useState([])

  return(
    <>
    <h1>YAAAAAA</h1>
    <ResList />
    </>
  )
}