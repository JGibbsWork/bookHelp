import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import SingleResult from './SingleResult.js';

function ResList () {
  let [history, setHistory] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {

    if (loading) {
      window.setTimeout(letsGo, 1000);
    }
  })

  function letsGo () {
    axios.get('/results/all')
      .then((results) => {
        setHistory(results.data.reverse());
        setLoading(false);
      })
      .catch((err) => {console.log('whoop')})
  }


  if (loading) {
    return (
      <div className="loading">
        hold on a sec
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

export default withRouter(ResList);