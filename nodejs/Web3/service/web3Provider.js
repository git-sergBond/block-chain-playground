var HTTP_PROVIDER = require('../constants/provider');

var Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER));

module.exports = web3;
