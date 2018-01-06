

require('ignore-styles');
require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['env', 'react-app']});

const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')



// routes
const index = require('./routes/index')
const api = require('./routes/api')
const universalLoader = require('./universal')


const app = express()

// Support Gzip
app.use(compression())

// Support post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

const PORT = process.env.PORT || 3001

// Why don't I need http createServer
app.listen(PORT, ()=>{
  console.log(`App listening on port ${PORT}!`)
})
app.on('error', onError)

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

