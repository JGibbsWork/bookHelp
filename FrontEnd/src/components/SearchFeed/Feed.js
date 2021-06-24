import React, { useState } from 'react';
import ResList from './ResList.js';

export default function Feed () {

  const [list, setList] = useState([])

  return(
    <>
    <div className="feed">
      <ResList />
    </div>
    </>
  )
}