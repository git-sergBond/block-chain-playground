var { AliceKeys, BobKeys} = require("./constants/accounts");
var createAccounts = require("./service/createAccounts");
var getBalance = require("./service/getBalance");
var transactionFromAliceToBob = require("./service/transactionFromAliceToBob");
var deployHelloWorldContractWay1 = require("./service/deployHelloWorldContractWay1");
var deployHelloWorldContractWay2 = require("./service/deployHelloWorldContractWay2");

//==========CREATE ACCOUNTS==========
//step 0.
//uncomment line code below to create accounts Alice & Bob. Copy info from log to nodejs/Web3/constants/accounts.js
//createAccounts();

//==========GET BALANCE==========
//step 1.
//send some money to Alice with test network faucet
//and check this by line code below
//getBalance(AliceKeys.address);
//getBalance(BobKeys.address);
/*
AliceKeys
address: 0x73C2Ca66fa68A8cf7baACb70462699438279F202
getBalance: 194800000000000000
BobKeys
address: 0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63
getBalance: 1000000000000000
*/

//==========SEND MONEY==========
//step 2. test transaction from Alice to Bob
//transactionFromAliceToBob();

//==========CREATE SMART-CONTRACT==========
//step 3. Compile HelloWorld.sol in RemixIDE copy this info to contracts\HelloWorld.js
//step 4. uncomment deployHelloWorldContractWay1();
//step 5. uncomment deployHelloWorldContractWay2();

