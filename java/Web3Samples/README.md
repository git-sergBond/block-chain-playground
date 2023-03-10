##### API
Можно импортировать файл ```postman_collection.json``` в программу Postman, чтобы не создавать http запросы вручную

#### ВАЖНО: после деплоя контракта, нужно обновить dapp.eth-node и dapp.master-private-key в application.properties
- ```dapp.eth-node``` - http url полключения к eth Node
- ```dapp.master-private-key``` - закрытый ключ, с помощью которого вы будете подписывать транзакции со стороны сервера (бекенда)

##### Установка truffle (фреймворк для тестирования смарт-контрактов)
Установка, производится с помощью npm: ```npm install truffle -g```

##### Запуск тестовой стети СПОСОБ-1:
1. переходим папку в которой будут храниться исходные коды контрактов, командой ```cd solidity```
2. запускаем тестовый сервер, командой ```truffle develop```.
<br/>В терминал будет напечатано примерно следующее:
```
Truffle Develop started at http://127.0.0.1:9545/

Accounts:
(0) 0x0202577bd2322863292f159ee36ee2a4aa54665d
(1) 0xd03df07083d63a4cc886ef8664713995bc7eab56
(2) 0xf86a2e4f7978f6875c799ab942e18248d6db1880
(3) 0xabcc5906352a0aa189d9f99b5f0f43cbaf088206
(4) 0x22f7d05a1cf697585e62f82761f3a78bb1a6d55e
(5) 0xea5e9dde73196068757051f77961eeeae5b21f60
(6) 0x446184079ef7da42f4bfbfd4daed065a77c5e91a
(7) 0x60cbc45ef978947b6da28fa34b9cbbda0b2c7245
(8) 0xd912d5a664708a1b9349f43ec6ec293ff056c94b
(9) 0xe1feb8fcc2bfce9a47339a05cbaae525de7ea6f8

Private Keys:
(0) 0ab77efb866fac8835d0a11e6b1462005654e6ffd3c320e75df46f6362cb3a10
(1) 0fb9cee45159e366a52f11e2b9ea2f4ff5dea80db8d901e589627ff3c55db5ec
(2) 597b4d0369358818432ee6f9688d46af9bff7f3aa612e892f1ecf443cc32a2cd
(3) 9c57e85102f1ad88599c44584c76dc8190d53509a77462d82f573ae76d8bc331
(4) 022dec123c40c8e4d1416519ce671e55aba7dbb53e800310a9e573598e8c4cf5
(5) e53701dbe4cd21bc1ad4df437f808b029e1f1220517ff2f02ccd2edc2a233401
(6) 23315d94f505c0fc743324049dd554e56da902e0aa11418c3100e7a74b46a91a
(7) cbdcd1bd394783519bfd530cb0ad0d2957d1a5ad5c78c1db02e02dbfdfb1e44f
(8) 878cfa7486eaeaafb8e3ae3f75c6db56faf860a3ff24341c83c4fe8100ce3971
(9) 95afa232388866369414125f613011f91fdbaa822ee531604319d911ff1770eb

Mnemonic: sad soul flame tumble venture easily devote math globe sight gospel cannon
```

##### Запуск тестовой стети СПОСОБ-2:
1. Установка, производится с помощью npm: ```npm install -g ganache-cli```
2. Запуск: ```ganache-cli```
<br/>В терминал будет напечатано примерно следующее:
```
Ganache CLI v6.12.2 (ganache-core: 2.13.2)
Available Accounts
==================
(0) 0xC1e4f82Bc8F3706f88cf10B3D2c6326B2EEec2C5 (100 ETH)
(1) 0xDBfa38B87Cd9C466Dfcf54FFc9aC95A7389B5f25 (100 ETH)
(2) 0x713F132e1a115848A13D211755Eda31414a1AcF8 (100 ETH)
(3) 0x90041Df8208E5C366f98B7309B8Dd4eD90CCC089 (100 ETH)
(4) 0x5465F3D079Fc5d3A978Ea47268944c19227A778a (100 ETH)
(5) 0xdd3B2463D898209337A13245D7384A653aE501c0 (100 ETH)
(6) 0x91575cB4BE8fAa2b7ac10ea96b733c2703EC82A3 (100 ETH)
(7) 0xdEA320e19047cF8230eb77D95f00FD610C36E217 (100 ETH)
(8) 0xB516cdeCE26d6765629D0C35563741a2aa1B7dc5 (100 ETH)
(9) 0xEB5727A7F82632deA12394E133505532111Ca6FC (100 ETH)
Private Keys
==================
(0) 0xf94f3e4ae547fdfcd6f19a9998ad70d1b09c7cc5d2158845d9bfcc86e9ce7e34
(1) 0xd7595ae3ed33a66d7c379753d67eeaf491a83aad5207ca6895b1ac62d440b8d1
(2) 0xc331a38e3bbdbb710b6dc8d6da450386c987bf610cb06e45d0dab8177113d47d
(3) 0xb1b2a127f8b71f1cfad5ae80275c6a37e1878aa0e52a484c18581b521dbc2f45
(4) 0x6a5e199dfd30192df2d1f0a1b24910ae646487c1a0d1aa96e4da7e525094405e
(5) 0x8cca472d9a2ecbf7caf4533777bda94859b7a30c88adea0375858ccb43cc9a61
(6) 0xe87ec11ad561c0a8eb325629ac67950790d22cc2b24dcf515242edd4ce5d0079
(7) 0x4faf434546ff68e3736f5c0891626994f7b2a0d283b94030e4c07f4375c556ac
(8) 0xe1eb23bc58eae5a216dbfd391d10418b2fc44b8948ea09d2b4e6970468fc767a
(9) 0x626f43140abd60a3eda48007ae23fd06c532fefe1f2773a64d88a76d1d7fc6d8
HD Wallet
==================
Mnemonic:      barrel wing suffer diet tape cruel envelope strategy short bundle plug sauce
Base HD Path:  m/44'/60'/0'/0/{account_index}
Gas Price
==================
20000000000
Gas Limit
==================
6721975
Call Gas Limit
==================
9007199254740991
Listening on 127.0.0.1:8545
```

##### Компиляция контракта
1. ```cd solidity``` - переходим папку в которой будут храниться исходные коды контрактов
2. ```truffle init``` - инициализация truffle проекта
3. Копируете ```Pool.sol``` в ```solidity/contracts```
4. ```truffle compile``` - в папке build/contracts должен появиться скомпилированный контракт

##### Деплой контракта
1. ```cd solidity``` - переходим папку в которой будут храниться исходные коды контрактов
2. Копировать ```1_first_migration.js``` в ```solidity/migrations```
3. ```truffle migrate```
В терминал будет напечатано примерно следующее:
```
Compiling your contracts...

===========================

> Compiling .\contracts\Pool.sol

> Artifacts written to D:\dev\block-chain-playground\java\Web3Samples\Web3Samples\solidity\build\contracts
> Compiled successfully using:
   - solc: 0.8.17+commit.8df45f5f.Emscripten.clang

Starting migrations...
======================
> Network name:    'develop'
> Network id:      5777
> Block gas limit: 6721975 (0x6691b7)

1_first_migration.js
====================

   Deploying 'Pool'
   ----------------

   > transaction hash:    0x1aae7f1c80e7c8d54598cbda570afa252b78fa67f917111beee34770fca71291

   > Blocks: 0            Seconds: 0
   > contract address:    0xe17CA252d901b5154D5C5e6Acdc078C261ea61fa
   > block number:        1
   > block timestamp:     1673801273
   > account:             0x0202577Bd2322863292f159ee36ee2A4aA54665d
   > balance:             99.99879499675
   > gas used:            357038 (0x572ae)
   > gas price:           3.375 gwei
   > value sent:          0 ETH
   > total cost:          0.00120500325 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:       0.00120500325 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00120500325 ETH
```

##### Генерация java файлов СПОСОБ-1
1. скачать ```web3j-3.3.1``` https://github.com/web3j/web3j/releases/download/v3.3.1/web3j-3.3.1.zip
2. перейти в директорию с web3j: ```cd D:\dev\block-chain-playground\java\Web3Samples\web3j\web3j-3.3.1\web3j-3.3.1\bin```
3. создать директории: ```in```, ```out```
4. скопировать ```solidity/build/contracts/Pool.json``` в директорию ```in```
5. сгенерировать код на java:``` web3j truffle generate --javaTypes ./in/Pool.json -o ./out -p ss.bond```
6. скопировать полученный код в основной проект, в директорию: ```src/main/java/org/web3j/model```

##### Генерация java файлов СПОСОБ-2
1. предварительно удалить линие директории, внутри ```resources/solidity```.
Например: если вы компилировали ```Pool.sol``` в ```RemixIDE```,
то IDE могла создать директорию ```artefacts```, эта директория помешает вам сгенерировать java код из-за ошибки
2. ```maven clean compile```
3. раскомментировать то что законментировано в <!-- [1] кодогенерация для смарт контракта -->
4. Вызвать генерацию через плагин мавена: ```mvn org.web3j:web3j-maven-plugin:4.9.4:generate-sources```
5. откатить изменения в шаге 1.
6. ```maven clean compile```

##### Получение эстимейта (gasLimit) СПОСОБ-1
1. Переходим папку в которой хранится проект truffle: ```cd solidity```
2. Войти в консоль truffle: ```truffle develop``` или ```truffle console```
- Получить стоимость деплоя контрактов: ```<Название смарт-контракта>.new.estimateGas();```
ПРИМЕР:
```
Pool.new.estimateGas(3, "Выбираем ЯП для следующего проекта: 1) Java 2) NodeJS 3) Golang"); //Estimate Gas for constructor
```
- Получить стоимость вызова функции: ```<Инстанс смарт-контракта>.<Название функции>.estimateGas(<Аргументы через запятую>);```
ПРИМЕР:
```
const instance = await Pool.deployed();
await instance.vote.estimateGas(1); 		//Estimate Gas for vote function
await instance.getPool.estimateGas();		//Estimate Gas for getPool function
await instance.getResult.estimateGas();		//Estimate Gas for getResult function
```
##### Получение эстимейта (gasLimit) СПОСОБ-2
1. После деплоя контракта командой: ```truffle migrate```. Пишется количество использованного газа:
```gas used:            506770 (0x7bb92)```