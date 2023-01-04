var web3 = require("./web3Provider");
var { AliceKeys } = require("../constants/accounts");

const byteCode = "0x"+"608060405234801561001057600080fd5b506040805190810160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6101a4806101166000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561016e5780601f106101435761010080835404028352916020019161016e565b820191906000526020600020905b81548152906001019060200180831161015157829003601f168201915b50505050509050905600a165627a7a72305820f2ace7c272e6d89c8e09a6b13742f821129be7ab698a7e9dbef40572876e99790029";

async function deployHelloWorldContractWay2() {
    let tx = {
        from: AliceKeys.address,
        gasPrice: (200_000_000_000).toString(10),
        gas: (500_000).toString(10),
        data: byteCode
    };

    let signedTx = await web3.eth.signTransaction(tx, AliceKeys.privateKey);
    let res = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log("deployHelloWorldContractWay2");
    console.log(res);
}


module.exports = deployHelloWorldContractWay2;
