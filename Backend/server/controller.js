const googleTrends = require('google-trends-api');
const db = require('../db/models.js');
const DMA = require('./DMA.js');

const controller = {

  // Use params to hit google trends api and save results to mongo databse
  newSearch: (req, res) => {
    let resultLocal = [];
    let resultState = [];
    let resultCountry = [];
    let search = req.params.id.split('+')
    let citySep = req.params.city.split('+');
    citySep = citySep.join(' ');
    let city = DMA[citySep]
    search = search.join(' ');
    googleTrends.interestOverTime({keyword: search, startTime: new Date('2020-01-01'), geo: ['US', city[1], city[0]]})
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
    })
    .then(() => {
      db.post({
        searchDate: new Date(),
        city: citySep,
        term: search,
        localResults: resultLocal,
        stateResults: resultState,
        nationalResults: resultCountry
      })
      res.status(200).json('did it')
    })

    .catch((err) => {
      console.log('ah damn dude', err)
    })
  },

  // return results based on city search
  getCity: (req, res) =>{
    db.getCity(req.params.city)
    .then((results)=>(
      res.status(200).json(results)
    ))
    .catch((err) => {
      console.log('crap dude', err)
    })
  },

  // return results based on search term
  getTerm: (req, res) =>{
    db.getTerm(req.params.term)
    .then((results)=>(
      res.status(200).json(results)
    ))
    .catch((err) => {
      console.log('fuck dude', err)
    })
  },

  // return all results
  getAll: (req, res) =>{
    db.get()
    .then((results)=>(
      res.status(200).json(results)
    ))
    .catch((err) => {
      console.log('shit dude', err)
    })
  }

}

module.exports = controller