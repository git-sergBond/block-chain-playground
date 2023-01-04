var web3 = require("./web3Provider")

async function getBalance(address) {
    let res = await web3.eth.getBalance(address);
    console.log("address: " + address);
    console.log("getBalance: " + res);
}

module.exports = getBalance;
