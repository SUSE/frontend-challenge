const express = require('express'),
      path = require('path'),
      cors = require('cors'),
      app = express(),
      port = process.env.PORT || 8080

let getPath = function(file) {
  return express.static(path.join(__dirname, file))
}

app.use(cors())

app.use('/', getPath('../app/build'))
app.use('/machines', getPath('json/systems-long-list.json'))
app.use(/\/machines\/\w+/, getPath('json/system-details.json'))

app.listen(port, function () {
  console.log(`Example app listening on port ${ port }!`)
})
