var web3 = require("./web3Provider");
var { AliceKeys } = require("../constants/accounts");
var { abi, byteCode } = require("../contracts/HelloWorld");

async function deployHelloWorldContractWay1() {
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


module.exports = deployHelloWorldContractWay1;
