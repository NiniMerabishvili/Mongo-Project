var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/chords', (req, res) => {
  console.log("111111", req.body)
  res.status(200).json({
    ...req.body,
    firstName: 'Nini',
    lastName: 'Merabishvili'
  })
});

module.exports = router;
