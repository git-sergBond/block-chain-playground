var { AliceKeys, BobKeys} = require("./constants/accounts");
var createAccounts = require("./service/createAccounts");
var getBalance = require("./service/getBalance");
var transactionFromAliceToBob = require("./service/transactionFromAliceToBob");
var deployHelloWorldContractWay1 = require("./service/deployHelloWorldContractWay1");
var deployHelloWorldContractWay2 = require("./service/deployHelloWorldContractWay2");
var callHelloWorldContract = require("./service/callHelloWorldContract");

//==========CREATE ACCOUNTS==========
//step 0. uncomment this line: createAccounts();
//step 1. copy info from log to nodejs/Web3/constants/accounts.js

//==========GET BALANCE==========
//step 2. uncomment this line: getBalance(AliceKeys.address);
//step 3. uncomment this line:  getBalance(BobKeys.address);

//==========SEND MONEY==========
//step 4. uncomment this line: transactionFromAliceToBob();

//==========CREATE SMART-CONTRACT==========
//step 5. Compile HelloWorld.sol in RemixIDE.
//step 6. copy result BYTE-CODE and ABI to contracts\HelloWorld.js
//step 7. uncomment this line: deployHelloWorldContractWay1();
//step 8. uncomment this line: deployHelloWorldContractWay2();

//==========CALL SMART-CONTRACT==========
//step 9. uncomment this line: callHelloWorldContract();
