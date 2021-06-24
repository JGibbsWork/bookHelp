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
        setHistory(results.data.reverse());
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
      <div className="feedBox">
        {history.map((res, idx) => (
          <SingleResult
          localResults={res.localResults}
          stateResults={res.stateResults}
          nationalResults={res.nationalResults}
          searchDate={res.searchDate}
          city={res.city}
          term={res.term}
          key={res._id} />
        ))}
      </div>
      </>
    )
  }
}
