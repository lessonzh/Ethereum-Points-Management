// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    truffle: {
      host: '192.168.23.193',
      port: 7545,
      network_id: '*' // Match any network id
    },
    develop: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
