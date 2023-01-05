var web3 = require("./web3Provider");
var { abi, contractAddress } = require("../contracts/HelloWorld");
var { AliceKeys } = require("../constants/accounts");

async function callHelloWorldContractWay2() {
    const signer = web3.eth.accounts.privateKeyToAccount(AliceKeys.privateKey);
    web3.eth.accounts.wallet.add(signer);

    let helloWorldContract = new web3.eth.Contract(abi, contractAddress);

    let payload = helloWorldContract.methods.Hello().encodeABI();

    let tx = {
        from: AliceKeys.address,
        gasPrice: (200_000_000_000).toString(10),
        gas: (500_000).toString(10),
        payload: payload
    };

    let txSigned = await web3.eth.accounts.signTransaction(tx, AliceKeys.privateKey);

    let res = await web3.eth.sendSignedTransaction(txSigned.rawTransaction)

    console.log("res");
    console.log(res);

    //TODO HOW TO GET response FROM HelloWorld.Hello() ??? Where is it??? Maybe I write wrong contract???
}

/*
res
{
  blockHash: '0x3317f8c1c04a68a863a70690a8b5f0bf476caae3d871068a070b777ea99e90a1',
  blockNumber: 8258383,
  contractAddress: '0x659A487AaB8dF4F3c3456aD01Ed32F5C58b4C264',
  cumulativeGasUsed: 74000,
  effectiveGasPrice: 200000000000,
  from: '0x73c2ca66fa68a8cf7baacb70462699438279f202',
  gasUsed: 53000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: null,
  transactionHash: '0xf7b95ec307fb4d6a4062e145c2c9766335b0f67ee22526b9a1d9bdb318e32965',
  transactionIndex: 1,
  type: '0x0'

 */

module.exports = callHelloWorldContractWay2;
