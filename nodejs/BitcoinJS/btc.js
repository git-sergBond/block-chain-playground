var btc = require('bitcoinjs-lib')
var http = require('axios')

var network = btc.networks.testnet

var blockExplorerTestnetApiEndpoint = 'https://chain.so/api/'

function getKeys() {
    let aliceKeys = btc.ECPair.makeRandom({ network : network });
    let bobKeys = btc.ECPair.makeRandom({ network : network })

    console.log("==========ECPair=======")
    console.log("====>aliceKeys")
    console.log(aliceKeys)
    console.log("====>bobKeys")
    console.log(bobKeys)
    console.log("==========keys=======")

    let alicePublic =  aliceKeys.getAddress();
    let alicePrivate = aliceKeys.toWIF()

    let bobPublic =  bobKeys.getAddress();
    let bobPrivate = bobKeys.toWIF()

    console.log("====>alice")
    console.log("public:")
    console.log(alicePublic)
    console.log("private:")
    console.log(alicePrivate)
    console.log("====>bobKeys")
    console.log("public:")
    console.log(bobPublic)
    console.log("private:")
    console.log(bobPrivate)
}

const AlicePublic = "n4PyDnACdEiYD21Gm47NjPxwrv69qF2DV8";
const BobPublic = "mwLqXG4CC6Kv4NDVRL21TfS1ywWhu5SZqw";
const BobPrivate = "cSg3QVTuCPXjuYhSLURXnMmLCJd4XZaEPaJuzKPtciAKrpzRkWzV";

async function getOutputs(publicKey) {
    let url = blockExplorerTestnetApiEndpoint + "v2/get_tx_unspent/BTCTEST/" + publicKey + "";

    let resp = await http.get(url);
    let json = resp.data;
    //console.log(JSON.stringify(json));

    let UTXO = json.data.txs;
    console.log(UTXO);
    return UTXO;
}

async function createTransaction() {
    let BobUTXO = await getOutputs(BobPublic);
    let lastIncomingTx = BobUTXO[0];

    let lastIncoming = Math.floor(parseFloat(lastIncomingTx.value) * Math.pow(10,5));
    let rest = 10;
    let amount = lastIncoming - rest;

    let transaction = new btc.TransactionBuilder(network);
    transaction.addInput(lastIncomingTx.txid, lastIncoming);
    transaction.addOutput(AlicePublic, amount);
    transaction.sign(0, BobPrivate)//TODO use full key pair object (bobKeys)
    let transactionHex = transaction.build().toHex();

    console.log(transactionHex)

    return transactionHex;
}

async function publishTransaction() {
    let hexTx = await createTransaction();

    let url = blockExplorerTestnetApiEndpoint + "tx/send";

    let result = await http.post(url, { rawTx: hexTx });

    console.log(result);
}

/**
 ==========keys=======
 ====>alice
 ====>alice
 ====>alice
 public:
 n4PyDnACdEiYD21Gm47NjPxwrv69qF2DV8
 private:
 cSUWWGR3vp7VqX6JtAXiRv46g7tZy31iHvnDdaqSYTG3Hdw3LXY3
 ====>bobKeys
 public:
 mwLqXG4CC6Kv4NDVRL21TfS1ywWhu5SZqw
 private:
 cSg3QVTuCPXjuYhSLURXnMmLCJd4XZaEPaJuzKPtciAKrpzRkWzV
 */

//...send some money to moQEgxH9WJoyz4PoQuXmc8sUhH2kbLVcvs

//getOutputs("moQEgxH9WJoyz4PoQuXmc8sUhH2kbLVcvs")
/**
 {"status":"success","data":{"network":"BTCTEST","address":"moQEgxH9WJoyz4PoQuXmc8sUhH2kbLVcvs","txs":[{"txid":"9e08a0bc67215846cf285a63eabbda40529e3f55b9b016ee6d2ddd097a26eb0f","output_no":1,"script_asm":"OP_DUP OP_HASH160 567bc7be6110bca5eb2311d77c9e2fb74e2de17a OP_EQUALVERIFY OP_CHECKSIG","script_hex":"76a914567bc7be6110bca5eb2311d77c9e2fb74e2de17a88ac","value":"0.01829144","confirmations":21,"time":1672611162}]}}

 */

createTransaction();
