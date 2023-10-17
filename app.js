const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.status(500)
  res.send('An internal server error occurred.')
})

app.get('/version', (req, res) => {
  res.send('1; health check failed') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
