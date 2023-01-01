var btc = require('bitcoinjs-lib')
//import { ECPairFactory } from 'ecpair'

var network = btc.networks.testnet

var blockExplorerTestnetApiEndpoint = 'https://testnet.blockexplorer.com/api/'

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

getKeys()
