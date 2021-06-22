const googleTrends = require('google-trends-api');
const DMA = require('./DMA.js');

const controller = {
  get: (req, res) => {
    let resultLocal = [];
    let resultState = [];
    let resultCountry = [];
    let search = req.params.id.split('+')
    let citySep = req.params.city.split('+')
    let city = DMA[citySep]
    search = search.join(' ');
    googleTrends.interestOverTime({keyword: search, startTime: new Date('2018-01-01'), geo: ['US', city[1], city[0]]})
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
      res.status(200).json(resultLocal, resultState, resultCountry)
    })
    .catch((err) => {
      console.log('ah damn', err)
    })
  }
}

module.exports = controller