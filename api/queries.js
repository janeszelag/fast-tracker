const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'fasting_api',
  password: 'password',
  port: 5432,
})