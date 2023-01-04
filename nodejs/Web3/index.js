const INFRA_API_KEY = "d23be88a818f4fd9aa03691a48ccf714";
const SEPOLIA_TEST_NET = "https://sepolia.infura.io/v3/";
const GOERLI_TEST_NET = "https://goerli.infura.io/v3/";
const HTTP_PROVIDER = GOERLI_TEST_NET + INFRA_API_KEY;

var Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider(HTTP_PROVIDER));

function createAccounts() {
    let AliceKeys = web3.eth.accounts.create();
    console.log(AliceKeys);
    let BobKeys = web3.eth.accounts.create();
    console.log(BobKeys);
}

//step 0.
//uncomment line code below to create accounts Alice & Bob
//createAccounts();

//for https://sepolia.dev/
/*
var AliceKeys = {
    address: '0xde8075611a729Be46D1acB43C43bdA7Ea9Cb8483',
    privateKey: '0xcab834d350f6aed82a2a5f23af7af1fcbd73b0979521746f521e9028b6523bd0',
}

var BobKeys = {
    address: '0x002A4f67d1965b5be5E3A5C83F92983BfeE2280d',
    privateKey: '0x001487eb4bb6b977dd8fffddbf4655082b15bf1dcdc2b7b0e4f8b4008a3dd04c',
}
*/

//for https://goerlifaucet.com/
var AliceKeys = {
    address: '0x73C2Ca66fa68A8cf7baACb70462699438279F202',
    privateKey: '0x6f5cb81a8a402d030c6f59365c4b482304bb7a2bf5b47731b117954fe157aa9f',
}

var BobKeys = {
    address: '0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63',
    privateKey: '0xd23d7174674feb0494b9ca322049936c492f28aa8731d01d2c81579d45057c40',
}

async function getBalance(address) {
    let res = await web3.eth.getBalance(address);
    console.log("address: " + address);
    console.log("getBalance: " + res);
}

//step 1.
//send some money to Alice with test network faucet
//and check this by line code below
getBalance(AliceKeys.address);
getBalance(BobKeys.address);
/*
AliceKeys
address: 0x73C2Ca66fa68A8cf7baACb70462699438279F202
getBalance: 194800000000000000
BobKeys
address: 0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63
getBalance: 1000000000000000
*/

async function signTransaction() {
    const tx = {
        from: AliceKeys.address,
        gasPrice: (200_000_000_000).toString(10),
        gas: (500_000).toString(10),
        to: BobKeys.address,
        value: (1_000_000_000_000_000).toString(10),
        data: ""
    }

    console.log("tx");
    console.log(tx);

    let signedTx = await web3.eth.accounts.signTransaction(tx, AliceKeys.privateKey);

    console.log("signedTx");
    console.log(signedTx);

    return signedTx;
}

/*
tx
{
  from: '0x73C2Ca66fa68A8cf7baACb70462699438279F202',
  gasPrice: '200000000000',
  gas: '500000',
  to: '0x16a97719deD7aBBf63ec983FCBf35Adbd7EEbd63',
  value: '1000000000000000',
  data: ''
}
signedTx
{
  messageHash: '0x5290bca3d52642046e3bf6b4376c598ba1d9efc01569734b1bdf600a3614dc74',
  v: '0x2d',
  r: '0xb3e58822f1833bd1fea5aa5ffd5c72aa6b017cca3934bd30b9e50a207487fd9d',
  s: '0x2a18d4838e01e76ca0db9f5e8cc36bca6c7cc51f636a82c5ed9fe3ec2e65bd9f',
  rawTransaction: '0xf86c80852e90edd0008307a1209416a97719ded7abbf63ec983fcbf35adbd7eebd6387038d7ea4c68000802da0b3e58822f1833bd1fea5aa5ffd5c72aa6b017cca3934bd30b9e50a207487fd9da02a18d4838e01e76ca0db9f5e8cc36bca6c7cc51f636a82c5ed9fe3ec2e65bd9f',
  transactionHash: '0x865d19d54d780cb5573bd3b21279bc7b30392da683f348e25531f5f9e144b40f'
}
 */

async function sendTransaction() {
    let rawTransaction = (await signTransaction()).rawTransaction; //16ричное представление подписанной транзакци
    let res = await web3.eth.sendSignedTransaction(rawTransaction);
    console.log("sendTransaction:");
    console.log(res);
}

//sendTransaction();
/*
sendTransaction
{
  blockHash: '0x5fb4bfdb8124cbd8c97a95d7ed98c8dd011ac2e3d854c6e80150ff6b9caba828',
  blockNumber: 8252251,
  contractAddress: null,
  cumulativeGasUsed: 21000,
  effectiveGasPrice: 200000000000,
  from: '0x73c2ca66fa68a8cf7baacb70462699438279f202',
  gasUsed: 21000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x16a97719ded7abbf63ec983fcbf35adbd7eebd63',
  transactionHash: '0x865d19d54d780cb5573bd3b21279bc7b30392da683f348e25531f5f9e144b40f',
  transactionIndex: 0,
  type: '0x0'
}
 */



/*
After compile HelloWorld.sol in RemixIDE.
ABI:
[
    {
        "constant": true,
        "inputs": [],
        "name": "Hello",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
]
BYTECODE:
{
	"linkReferences": {},
	"object": "608060405234801561001057600080fd5b506040805190810160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6101a4806101166000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561016e5780601f106101435761010080835404028352916020019161016e565b820191906000526020600020905b81548152906001019060200180831161015157829003601f168201915b50505050509050905600a165627a7a72305820f2ace7c272e6d89c8e09a6b13742f821129be7ab698a7e9dbef40572876e99790029",
	"opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0xB DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x48656C6C6F20576F726C64000000000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x0 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 PUSH2 0x5C SWAP3 SWAP2 SWAP1 PUSH2 0x62 JUMP JUMPDEST POP PUSH2 0x107 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0xA3 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0xD1 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0xD1 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0xD0 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0xB5 JUMP JUMPDEST JUMPDEST POP SWAP1 POP PUSH2 0xDE SWAP2 SWAP1 PUSH2 0xE2 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x104 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x100 JUMPI PUSH1 0x0 DUP2 PUSH1 0x0 SWAP1 SSTORE POP PUSH1 0x1 ADD PUSH2 0xE8 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH2 0x1A4 DUP1 PUSH2 0x116 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x41 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0xBCDFE0D5 EQ PUSH2 0x46 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x52 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x5B PUSH2 0xD6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x9B JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x80 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0xC8 JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH1 0x0 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV DUP1 ISZERO PUSH2 0x16E JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x143 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x16E JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x151 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 CALLCODE 0xac 0xe7 0xc2 PUSH19 0xE6D89C8E09A6B13742F821129BE7AB698A7E9D 0xbe DELEGATECALL SDIV PUSH19 0x876E9979002900000000000000000000000000 ",
	"sourceMap": "157:194:0:-;;;207:57;8:9:-1;5:2;;;30:1;27;20:12;5:2;207:57:0;233:23;;;;;;;;;;;;;;;;;;:7;:23;;;;;;;;;;;;:::i;:::-;;157:194;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;"
}
*/
async function deployHelloWorldContract() {
    const abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "Hello",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ];
    const byteCode = "0x"+"608060405234801561001057600080fd5b506040805190810160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6101a4806101166000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561016e5780601f106101435761010080835404028352916020019161016e565b820191906000526020600020905b81548152906001019060200180831161015157829003601f168201915b50505050509050905600a165627a7a72305820f2ace7c272e6d89c8e09a6b13742f821129be7ab698a7e9dbef40572876e99790029";

    const signer = web3.eth.accounts.privateKeyToAccount(AliceKeys.privateKey);
    web3.eth.accounts.wallet.add(signer);

    var helloWorldContract = new web3.eth.Contract(abi);
    helloWorldContract.options.data = byteCode;
    const deployTx = helloWorldContract.deploy();

    let res = await deployTx.send({
        from: signer.address,
        gas: await deployTx.estimateGas(),
        //gasPrice: (200_000_000_000_000).toString(10),
    }, function (err, transactionHash) {
        console.error("ERROR helloWorldContract.deploy");
        console.error(err);
        console.error(transactionHash);
    });

    console.log("OK helloWorldContract.deploy");
    console.log(res);

    getBalance(AliceKeys.address);
}

deployHelloWorldContract()
/*
 _address: '0x97021f3076a59c2643c47055632E49168da93Bcc', //TODO это адрес контракта!!!


ERROR helloWorldContract.deploy
null
0x7a2c28e5ed91ebe53d7d1d966fdef024300ebc6d858c29a0a3cb9b668d481a36
OK helloWorldContract.deploy
Contract {
  setProvider: [Function (anonymous)],
  currentProvider: [Getter/Setter],
  _requestManager: RequestManager {
    provider: HttpProvider {
      withCredentials: undefined,
      timeout: 0,
      headers: undefined,
      agent: undefined,
      connected: false,
      host: 'https://goerli.infura.io/v3/d23be88a818f4fd9aa03691a48ccf714',
      httpsAgent: [Agent]
    },
    providers: {
      WebsocketProvider: [Function: WebsocketProvider],
      HttpProvider: [Function: HttpProvider],
      IpcProvider: [Function: IpcProvider]
    },
    subscriptions: Map(0) {}
  },
  givenProvider: null,
  providers: {
    WebsocketProvider: [Function: WebsocketProvider],
    HttpProvider: [Function: HttpProvider],
    IpcProvider: [Function: IpcProvider]
  },
  _provider: HttpProvider {
    withCredentials: undefined,
    timeout: 0,
    headers: undefined,
    agent: undefined,
    connected: false,
    host: 'https://goerli.infura.io/v3/d23be88a818f4fd9aa03691a48ccf714',
    httpsAgent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object: null prototype],
      requests: [Object: null prototype] {},
      sockets: [Object: null prototype] {},
      freeSockets: [Object: null prototype],
      keepAliveMsecs: 1000,
      keepAlive: true,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'lifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 0,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    }
  },
  setRequestManager: [Function (anonymous)],
  BatchRequest: [Function: bound Batch],
  extend: [Function: ex] {
    formatters: {
      inputDefaultBlockNumberFormatter: [Function: inputDefaultBlockNumberFormatter],
      inputBlockNumberFormatter: [Function: inputBlockNumberFormatter],
      inputCallFormatter: [Function: inputCallFormatter],
      inputTransactionFormatter: [Function: inputTransactionFormatter],
      inputAddressFormatter: [Function: inputAddressFormatter],
      inputPostFormatter: [Function: inputPostFormatter],
      inputLogFormatter: [Function: inputLogFormatter],
      inputSignFormatter: [Function: inputSignFormatter],
      inputStorageKeysFormatter: [Function: inputStorageKeysFormatter],
      outputProofFormatter: [Function: outputProofFormatter],
      outputBigNumberFormatter: [Function: outputBigNumberFormatter],
      outputTransactionFormatter: [Function: outputTransactionFormatter],
      outputTransactionReceiptFormatter: [Function: outputTransactionReceiptFormatter],
      outputBlockFormatter: [Function: outputBlockFormatter],
      outputLogFormatter: [Function: outputLogFormatter],
      outputPostFormatter: [Function: outputPostFormatter],
      outputSyncingFormatter: [Function: outputSyncingFormatter]
    },
    utils: {
      _fireError: [Function: _fireError],
      _jsonInterfaceMethodToString: [Function: _jsonInterfaceMethodToString],
      _flattenTypes: [Function: _flattenTypes],
      randomHex: [Function: randomHex],
      BN: [Function: BNwrapped],
      isBN: [Function: isBN],
      isBigNumber: [Function: isBigNumber],
      isHex: [Function: isHex],
      isHexStrict: [Function: isHexStrict],
      sha3: [Function],
      sha3Raw: [Function: sha3Raw],
      keccak256: [Function],
      soliditySha3: [Function: soliditySha3],
      soliditySha3Raw: [Function: soliditySha3Raw],
      encodePacked: [Function: encodePacked],
      isAddress: [Function: isAddress],
      checkAddressChecksum: [Function: checkAddressChecksum],
      toChecksumAddress: [Function: toChecksumAddress],
      toHex: [Function: toHex],
      toBN: [Function: toBN],
      bytesToHex: [Function: bytesToHex],
      hexToBytes: [Function: hexToBytes],
      hexToNumberString: [Function: hexToNumberString],
      hexToNumber: [Function: hexToNumber],
      toDecimal: [Function: hexToNumber],
      numberToHex: [Function: numberToHex],
      fromDecimal: [Function: numberToHex],
      hexToUtf8: [Function: hexToUtf8],
      hexToString: [Function: hexToUtf8],
      toUtf8: [Function: hexToUtf8],
      stripHexPrefix: [Function: stripHexPrefix],
      utf8ToHex: [Function: utf8ToHex],
      stringToHex: [Function: utf8ToHex],
      fromUtf8: [Function: utf8ToHex],
      hexToAscii: [Function: hexToAscii],
      toAscii: [Function: hexToAscii],
      asciiToHex: [Function: asciiToHex],
      fromAscii: [Function: asciiToHex],
      unitMap: [Object],
      toWei: [Function: toWei],
      fromWei: [Function: fromWei],
      padLeft: [Function: leftPad],
      leftPad: [Function: leftPad],
      padRight: [Function: rightPad],
      rightPad: [Function: rightPad],
      toTwosComplement: [Function: toTwosComplement],
      isBloom: [Function: isBloom],
      isUserEthereumAddressInBloom: [Function: isUserEthereumAddressInBloom],
      isContractAddressInBloom: [Function: isContractAddressInBloom],
      isTopic: [Function: isTopic],
      isTopicInBloom: [Function: isTopicInBloom],
      isInBloom: [Function: isInBloom],
      compareBlockNumbers: [Function: compareBlockNumbers],
      toNumber: [Function: toNumber]
    },
    Method: [Function: Method]
  },
  clearSubscriptions: [Function (anonymous)],
  options: {
    address: [Getter/Setter],
    jsonInterface: [Getter/Setter],
    data: '0x608060405234801561001057600080fd5b506040805190810160405280600b81526020017f48656c6c6f20576f726c640000000000000000000000000000000000000000008152506000908051906020019061005c929190610062565b50610107565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a357805160ff19168380011785556100d1565b828001600101855582156100d1579182015b828111156100d05782518255916020019190600101906100b5565b5b5090506100de91906100e2565b5090565b61010491905b808211156101005760008160009055506001016100e8565b5090565b90565b6101a4806101166000396000f300608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063bcdfe0d514610046575b600080fd5b34801561005257600080fd5b5061005b6100d6565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561009b578082015181840152602081019050610080565b50505050905090810190601f1680156100c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b606060008054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561016e5780601f106101435761010080835404028352916020019161016e565b820191906000526020600020905b81548152906001019060200180831161015157829003601f168201915b50505050509050905600a165627a7a72305820f2ace7c272e6d89c8e09a6b13742f821129be7ab698a7e9dbef40572876e99790029',
    from: undefined,
    gasPrice: undefined,
    gas: undefined
  },
  handleRevert: [Getter/Setter],
  defaultCommon: [Getter/Setter],
  defaultHardfork: [Getter/Setter],
  defaultChain: [Getter/Setter],
  transactionPollingTimeout: [Getter/Setter],
  transactionPollingInterval: [Getter/Setter],
  transactionConfirmationBlocks: [Getter/Setter],
  transactionBlockTimeout: [Getter/Setter],
  blockHeaderTimeout: [Getter/Setter],
  defaultAccount: [Getter/Setter],
  defaultBlock: [Getter/Setter],
  methods: {
    Hello: [Function: bound _createTxObject],
    '0xbcdfe0d5': [Function: bound _createTxObject],
    'Hello()': [Function: bound _createTxObject]
  },
  events: { allEvents: [Function: bound ] },
  _address: '0x97021f3076a59c2643c47055632E49168da93Bcc', //TODO это адрес контракта!!!
  _jsonInterface: [
    {
      constant: true,
      inputs: [],
      name: 'Hello',
      outputs: [Array],
      payable: false,
      stateMutability: 'view',
      type: 'function',
      signature: '0xbcdfe0d5'
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
      constant: undefined,
      signature: 'constructor'
    }
  ]
}

 */
