const INFRA_API_KEY = "d23be88a818f4fd9aa03691a48ccf714";
const SEPOLIA_TEST_NET = "https://sepolia.infura.io/v3/";
const HTTP_PROVIDER = SEPOLIA_TEST_NET + INFRA_API_KEY;

var Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER));


function createAccounts() {
    let AliceKeys = web3.eth.accounts.create();
    console.log(AliceKeys);
    let BobKeys = web3.eth.accounts.create();
    console.log(BobKeys);
}

createAccounts();
