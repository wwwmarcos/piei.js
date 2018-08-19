let ROUTES = []

const add = ({ url, method, handler }) =>
  ROUTES.push({ url, method, handler })

const remove = ({ url, method }) => {
  ROUTES = ROUTES.filter(route => route.url === url && route.method === method)
}

const find = ({ url, method }) =>
  ROUTES.find(route => route.url === url && route.method === method)

module.exports = {
  add,
  remove,
  find
}
