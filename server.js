const express = require('express')
const next = require('next')
require('dotenv').config()
const systeminfo = require('./api/systeminfo')()


const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()
  app.get('/system', (req, res) => {
    res.json(systeminfo)
  })
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port} with mode : ${process.env.NODE_ENV}`)
  })
})