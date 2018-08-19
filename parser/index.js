const { defaultParsers } = require('./defaults')

const parsers = [
  ...defaultParsers
]

const getParser = contentType =>
  parsers.find(parser => parser.contentType === contentType)

const add = ({ contentType, handler }) => {
  parsers.push({ contentType, handler })
}

const resolve = ({ contentType, rawData }) => {
  const resolver = getParser(contentType)
  return resolver.handler({ rawData })
}

module.exports = {
  add,
  resolve,
  getParser
}
