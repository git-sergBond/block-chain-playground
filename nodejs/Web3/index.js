const INFRA_API_KEY = "d23be88a818f4fd9aa03691a48ccf714";
const SEPOLIA_TEST_NET = "https://sepolia.infura.io/v3/";
const GOERLI_TEST_NET = "https://goerli.infura.io/v3/";
const HTTP_PROVIDER = GOERLI_TEST_NET + INFRA_API_KEY;

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

//for https://sepolia.dev/
/*
var AliceKeys = {
    address: '0xde8075611a729Be46D1acB43C43bdA7Ea9Cb8483',
    privateKey: '0xcab834d350f6aed82a2a5f23af7af1fcbd73b0979521746f521e9028b6523bd0',
}

var BobKeys = {
    address: '0x002A4f67d1965b5be5E3A5C83F92983BfeE2280d',
    privateKey: '0x001487eb4bb6b977dd8fffddbf4655082b15bf1dcdc2b7b0e4f8b4008a3dd04c',
}
*/

//for https://goerlifaucet.com/
var AliceKeys = {
    address: '0x73C2Ca66fa68A8cf7baACb70462699438279F202',
    privateKey: '0x6f5cb81a8a402d030c6f59365c4b482304bb7a2bf5b47731b117954fe157aa9f',
}

var BobKeys = {
    address: '0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63',
    privateKey: '0xd23d7174674feb0494b9ca322049936c492f28aa8731d01d2c81579d45057c40',
}

async function getBalance(address) {
    let res = await web3.eth.getBalance(address);
    console.log("address: " + address);
    console.log("getBalance: " + res);
}

//step 1.
//send some money to Alice with test network faucet
//and check this by line code below
//getBalance(AliceKeys.address);
//address: 0x73C2Ca66fa68A8cf7baACb70462699438279F202
//getBalance: 200000000000000000


async function signTransaction() {
    let tx = {
        from: AliceKeys.address,
        gasPrice: 20_000_000_000,
        gas: 42_000,
        to: BobKeys.address,
        value: 1_000_000_000_000_000,
        data: ""
    }

    let signedTx = await web3.eth.accounts.signTransaction(tx, AliceKeys.privateKey);

    console.log("signedTx");
    console.log(signedTx);
}

signTransaction();
/*
signedTx
{
  messageHash: '2b357d7689b9e2b6e73d17e2222aec29b0ad0d36f91c4127faeb3deba79a6044',
  v: '0x2d',
  r: '0x08aa0ad2c09a52d1753f283fd6452e7d02757a94c22c0aa54fe7a0d8bd5847db',
  s: '0x5a162b05e760661671dc1d6ff01c8f079911f3420a3a9397e78ba2089d056ac5',
  rawTransaction: '0xf86b808504a817c80082a4109416a97719ded7abbf63ec983fcbf35adbd7eebd6387038d7ea4c68000802da008aa0ad2c09a52d1753f283fd6452e7d02757a94c22c0aa54fe7a0d8bd5847dba05a162b05e760661671dc1d6ff01c8f079911f3420a3a9397e78ba2089d056ac5',
  transactionHash: '0x1437d2eadc8b139725ffad6a9443c4ba8d714f946f938ee9451eada7516c19f2'
}
 */
