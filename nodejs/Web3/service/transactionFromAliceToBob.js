var web3 = require("./web3Provider");
var { AliceKeys, BobKeys} = require("../constants/accounts");

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

module.exports = sendTransaction;
