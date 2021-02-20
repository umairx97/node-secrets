const camelize = require('camelcase')

const secrets = [
  'appUsername',
  'appPassword'
]

const base = Object.entries(process.env).reduce((acc, [key, value]) => {
  const camelized = camelize(key)
  if (secrets.includes(camelized) && value) acc[camelized] = value

  return acc
}, { appUsername: 'umairx97' })

console.log(JSON.stringify(Object.assign({}, base)))
