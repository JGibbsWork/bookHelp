const googleTrends = require('google-trends-api');

const controller = {
  get: (req, res) => {
    googleTrends.interestOverTime({keyword: req.params.id})
    .then((results) => {
      console.log('These results are awesome', results)
    })
    .catch((err) => {
      consol.log('ah damn', err)
    })
    res.send('ya')
  }

}

module.exports = controller