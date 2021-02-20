const { execSync } = require('child_process')
require('dotenv').config()

module.exports = process.env.NODE_ENV === 'production'
  ? JSON.parse(execSync('node ./config/secrets.js'))
  : { devKey: 'testing' }
