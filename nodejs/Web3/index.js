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

//step 0.
//uncomment line code below to create accounts Alice & Bob
//createAccounts();

var AliceKeys = {
    address: '0xde8075611a729Be46D1acB43C43bdA7Ea9Cb8483',
    privateKey: '0xcab834d350f6aed82a2a5f23af7af1fcbd73b0979521746f521e9028b6523bd0',
}

var BobKeys = {
    address: '0x002A4f67d1965b5be5E3A5C83F92983BfeE2280d',
    privateKey: '0x001487eb4bb6b977dd8fffddbf4655082b15bf1dcdc2b7b0e4f8b4008a3dd04c',
}

async function getBalance(address) {
    let res = await web3.eth.getBalance(address);
    console.log(res);
}

//step 1.
//send some money to Alice with test network faucet
//and check this by line code below
getBalance(AliceKeys.address);
