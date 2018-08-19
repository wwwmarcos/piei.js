
const json = ({ rawData }) => {
  return {
    body: JSON.parse(rawData)
  }
}

const defaultParsers = [
  {
    contentType: 'application/json',
    handler: json
  }
]

module.exports = {
  defaultParsers
}
