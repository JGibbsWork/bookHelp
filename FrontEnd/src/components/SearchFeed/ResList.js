import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleResult from './SingleResult.js';

export default function ResList () {
  let [history, setHistory] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      axios.get('/results/all')
      .then((results) => {
        setHistory(results.data);
        setLoading(false);
      })
      .catch((err) => {console.log('whoop')})
    }
  })

  if (loading) {
    return (
      <div>
        hold on a sec bb
      </div>
    )
  } else {
    return (
      <>
      <h2>WOOOOOO</h2>
      {history.map((res, idx) => (
        <SingleResult
        localResults={res.localResults}
        stateResults={res.stateResults}
        nationalResults={res.nationalResults}
				key = {idx} />
      ))}
      </>
    )
  }
}
