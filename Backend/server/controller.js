const googleTrends = require('google-trends-api');

const controller = {
  get: (req, res) => {
    let resultLocal = [];
    let resultState = [];
    let resultCountry = [];
    let search = req.params.id.split('+')
    search = search.join(' ');
    googleTrends.interestOverTime({keyword: search, startTime: new Date('2018-01-01'), geo: ['US', 'US-CA', "825"]})
    .then((results) => {
      JSON.parse(results).default.timelineData.map((data, i) => {
        resultLocal.push({
          'date': data.formattedTime,
          'value': data.value[2]
        })
        resultState.push({
          'date': data.formattedTime,
          'value': data.value[1]
        })
        resultCountry.push({
          'date': data.formattedTime,
          'value': data.value[0]
        })
      })
      console.log('These results are awesome', resultLocal, resultState, resultCountry)
    })
    .catch((err) => {
      console.log('ah damn', err)
    })
    res.send('ya')
  }
}

module.exports = controller