var web3 = require("../config/web3Provider");
var {Admin, TestUser} = require("../constants/accounts");


async function sendMoney(fromAddress, fromPrvateKey, toAddress) {
    const tx = {
        from: fromAddress,
        gasPrice: (200_000_000_000).toString(10),
        gas: (500_000).toString(10),
        to: toAddress,
        value: (100_000_000_000_000_000).toString(10),
        data: ""
    }

    console.log("tx");
    console.log(tx);

    let signedTx = await web3.eth.accounts.signTransaction(tx, fromPrvateKey);

    console.log("signedTx");
    console.log(signedTx);

    let rawTransaction = signedTx.rawTransaction; //16ричное представление подписанной транзакци
    let res = await web3.eth.sendSignedTransaction(rawTransaction);
    console.log("res:");
    console.log(res);
}

sendMoney(Admin.address, Admin.privateKey, TestUser.address)
