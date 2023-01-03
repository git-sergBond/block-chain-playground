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
    const tx = {
        from: AliceKeys.address,
        gasPrice: (200_000_000_000).toString(10),
        gas: (500_000).toString(10),
        to: BobKeys.address,
        value: (1_000_000_000_000_000).toString(10),
        data: ""
    }

    console.log("tx");
    console.log(tx);

    let signedTx = await web3.eth.accounts.signTransaction(tx, AliceKeys.privateKey);

    console.log("signedTx");
    console.log(signedTx);

    return signedTx;
}

/*
tx
{
  from: '0x73C2Ca66fa68A8cf7baACb70462699438279F202',
  gasPrice: '200000000000',
  gas: '500000',
  to: '0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63',
  value: '1000000000000000',
  data: ''
}
signedTx
{
  messageHash: '0x5290bca3d52642046e3bf6b4376c598ba1d9efc01569734b1bdf600a3614dc74',
  v: '0x2d',
  r: '0xb3e58822f1833bd1fea5aa5ffd5c72aa6b017cca3934bd30b9e50a207487fd9d',
  s: '0x2a18d4838e01e76ca0db9f5e8cc36bca6c7cc51f636a82c5ed9fe3ec2e65bd9f',
  rawTransaction: '0xf86c80852e90edd0008307a1209416a97719ded7abbf63ec983fcbf35adbd7eebd6387038d7ea4c68000802da0b3e58822f1833bd1fea5aa5ffd5c72aa6b017cca3934bd30b9e50a207487fd9da02a18d4838e01e76ca0db9f5e8cc36bca6c7cc51f636a82c5ed9fe3ec2e65bd9f',
  transactionHash: '0x865d19d54d780cb5573bd3b21279bc7b30392da683f348e25531f5f9e144b40f'
}
 */

async function sendTransaction() {
    let rawTransaction = (await signTransaction()).rawTransaction; //16ричное представление подписанной транзакци
    let res = await web3.eth.sendSignedTransaction(rawTransaction);
    console.log("sendTransaction:");
    console.log(res);
}

sendTransaction();
/*
sendTransaction
{
  blockHash: '0x5fb4bfdb8124cbd8c97a95d7ed98c8dd011ac2e3d854c6e80150ff6b9caba828',
  blockNumber: 8252251,
  contractAddress: null,
  cumulativeGasUsed: 21000,
  effectiveGasPrice: 200000000000,
  from: '0x73c2ca66fa68a8cf7baacb70462699438279f202',
  gasUsed: 21000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x16a97719ded7abbf63ec983fcbf35adbd7eebd63',
  transactionHash: '0x865d19d54d780cb5573bd3b21279bc7b30392da683f348e25531f5f9e144b40f',
  transactionIndex: 0,
  type: '0x0'
}
 */
