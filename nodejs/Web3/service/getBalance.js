var web3 = require("./web3Provider")

async function getBalance(address) {
    let res = await web3.eth.getBalance(address);
    console.log("address: " + address);
    console.log("getBalance: " + res);
}

/*
AliceKeys
address: 0x73C2Ca66fa68A8cf7baACb70462699438279F202
getBalance: 194800000000000000
BobKeys
address: 0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63
getBalance: 1000000000000000
*/

module.exports = getBalance;
