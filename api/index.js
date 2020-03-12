const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000
const cors = require("cors");


app.use(cors());
app.options('*', cors()); 
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})