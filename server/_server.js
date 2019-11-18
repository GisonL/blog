const express = require('express')
const path = require('path')
const app = express()
const hostname = '127.0.0.1'
const port = 3000

app.use(express.static(path.join(__dirname, '../', 'dist')))
// app.use(express.static('../dist'))
// app.use('/static', express.static(path.join(__dirname, '/dist', 'static')))
// app.use('/', (req, res) => {
//   res.send('hello')
// })

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
