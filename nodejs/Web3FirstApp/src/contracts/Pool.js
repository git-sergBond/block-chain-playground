var web3 = require("../config/web3Provider");
var poolArtefact = require("./artifacts/Pool.json");
var poolMetadataArtefact = require("./artifacts/Pool_metadata.json");


var {Admin} = require("../constants/accounts");



const PoolContract = new web3.eth.Contract(poolMetadataArtefact.output.abi);

async function deploy() {
    const signer = web3.eth.accounts.privateKeyToAccount(Admin.privateKey);
    web3.eth.accounts.wallet.add(signer);

    let deployTx = PoolContract.deploy({
        data: "0x" + poolArtefact.data.bytecode.object
    })


    let res = await deployTx.send({
        from: signer.address,
        gas: await deployTx.estimateGas(),
    }).on('receipt', receipt => console.log('receipt' + receipt))
        .on('data', event => console.log('data' + event))
        .on('changed', changed => console.log('changed' + changed))
        .on('error', error => console.log('error' + error))
        .on('connected', connected => console.log('connected' + connected))
        .once("transactionHash", (transactionHash) => {
            console.log('transactionHash/' + transactionHash);
        });

    console.log('res');
    console.log(res);
}

// copied from log after call deploy() function:
// res
// Contract { _address }
const address = '0x4B85e1f39420e5E28FE26cF6B5E53B46e052D0ed';

module.exports = {
    PoolContract,
    deploy,
    address
};
