const http = require('http')

const parser = require('./parser')
const routes = require('./routes')

const server = http.createServer((req, res) => {
  const route = routes
    .find({ method: req.method, url: req.url })

  if (!route) {
    return res.end('not found')
  }

  let rawData = ''
  const contentType = req.headers['content-type']

  req.on('data', chunk => {
    rawData += chunk.toString()
  })

  req.on('end', () => {
    route.handler({
      ...req,
      ...parser.resolve({
        contentType,
        rawData
      })
    }, res)
  })
})

module.exports = server
module.exports.route = routes.add
