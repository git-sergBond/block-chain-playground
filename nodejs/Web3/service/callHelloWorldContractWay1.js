var web3 = require("./web3Provider");
var { abi, contractAddress } = require("../contracts/HelloWorld");
var { AliceKeys } = require("../constants/accounts");

async function callHelloWorldContractWay1() {
    const signer = web3.eth.accounts.privateKeyToAccount(AliceKeys.privateKey);
    web3.eth.accounts.wallet.add(signer);

    let helloWorldContract = new web3.eth.Contract(abi, contractAddress);

    let res = await helloWorldContract
        .methods.Hello()
        .send({
            from: signer.address,
            gasLimit: (40_000).toString(10)
        })
        .on('receipt', receipt => console.log('receipt' + receipt))
        .on('data', event => console.log('data' + event))
        .on('changed', changed => console.log('changed' + changed))
        .on('error', error => console.log('error' + error))
        .on('connected', connected => console.log('connected' + connected))
        .once("transactionHash", (transactionHash) => {
            console.log('transactionHash/' + transactionHash);
        });

    console.log("res");
    console.log(res);

    //TODO HOW TO GET response FROM HelloWorld.Hello() ??? Where is it??? Maybe I write wrong contract???
}

/*
res
{
  blockHash: '0x0841957ea06613182a18db566620d9393f14a2afa29b04b202b997de031f9f94',
  blockNumber: 8256955,
  contractAddress: null,
  cumulativeGasUsed: 6064432,
  effectiveGasPrice: 2500037785,
  from: '0x73c2ca66fa68a8cf7baacb70462699438279f202',
  gasUsed: 24190,
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x47fa5b1aa5392b4e1d0e113654067acbae6e9722',
  transactionHash: '0x72f768c1c1eae6301761dfb1ff85544c5e3608488cf333a508a4483385ffe36b',
  transactionIndex: 18,
  type: '0x2',
  events: {}
}
 */


module.exports = callHelloWorldContractWay1;
