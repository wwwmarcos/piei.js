# piei.js
just 4fun web framework

# usage example
```js
const app = require('./index')

const PORT = 3000

app.route({
  method: 'GET',
  url: '/home',
  handler: (req, res) => res.end('home2')
})

app.route({
  method: 'POST',
  url: '/home',
  handler: (req, res) => {
    res.end('ok')
  }
})

console.log('server.listen', app)

app.listen(PORT, 'localhost', () => {
  console.log(`up ${PORT}`)
})
```
