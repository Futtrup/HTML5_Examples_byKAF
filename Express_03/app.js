var express = require('express')
var cors = require('cors')

var app = express()
var port = 3000;

app.use(cors())

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.get('/products/:id', cors(), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a Single Route'})
  })

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port ' + port)
})