const fs = require('fs')
const path = require('path')
const util = require('util')

const fsAccess = util.promisify(fs.access)
const port = process.env.PORT || 8080

const express = require('express')
const app = express()


app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname))
app.locals.pretty = true

app.get('/bulma.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'node_modules/bulma/css/bulma.css'))
})

app.get('/', (req, res) => res.redirect('/index'))

app.get('/:filename', (req, res) => {
  Promise.resolve()
    // .then(_ => fsAccess(filePath))
    .then(_ => res.render(`${req.params.filename}`))
    .catch(error => res.status(404).json({ error }).end())
})

var server

function startServer () {
  return new Promise((res, rej) => {
    server = app.listen(port, () => {
      console.log(`Listening on ${port}`)
      res()
    })

    server.on('error', rej)
  })
}

function stopServer () {
  return new Promise((res, rej) => server.close(err => err ? rej(err) : res()))
}

if (require.main === module) {
  startServer()
    .catch(console.error.bind(console, 'SERVER CRASH:'))
}

module.exports = { app, startServer, stopServer }
