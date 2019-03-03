const Plasma = require('plasma-js-lib')

const plasma = new Plasma(new Plasma.providers.HttpProvider({ endpoint: 'http://139.5.145.39:3000/api' }))

export default plasma
