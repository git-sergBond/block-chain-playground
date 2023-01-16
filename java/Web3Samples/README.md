---Установка
1. npm install truffle -g

---Запуск тестовой стети
1. cd solidity - переходим папку в которой будут храниться исходные коды контрактов
2. truffle develop
CMD OUTPUT:
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

---Компиляция контракта
1. cd solidity - переходим папку в которой будут храниться исходные коды контрактов
2. truffle init - инициализация truffle проекта
3. Копируете Pool.sol в solidity/contracts
4. truffle compile - в папке build/contracts должен появиться скомпилированный контракт

---Деплой контракта
1. cd solidity - переходим папку в которой будут храниться исходные коды контрактов
2. Копировать 1_first_migration.js в solidity/migrations
3. truffle migrate
CMD OUTPUT:
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

---Генерация java файлов
СПОСОБ 1
1. скачать web3j-3.3.1 https://github.com/web3j/web3j/releases/download/v3.3.1/web3j-3.3.1.zip
2. перейти в директорию с web3j: cd D:\dev\block-chain-playground\java\Web3Samples\web3j\web3j-3.3.1\web3j-3.3.1\bin
3. создать директории: in, out
4. скопировать solidity/build/contracts/Pool.json в директорию in
5. сгенерировать код на java: web3j truffle generate --javaTypes ./in/Pool.json -o ./out -p ss.bond
6. скопировать полученный код в основной проект, в директорию: src/main/java/org/web3j/model

СПОСОБ 2
1. maven clean compile
2. раскомментировать то что законментировано в <!-- [1] кодогенерация для смарт контракта -->
3. Вызвать генерацию через плагин мавена: maven web3j:web3j-maven-plugin:4.9.4:generate-sources
4. откатить изменения в шаге 1.
5. maven clean compile

---Получение эстимейта gasLimit
1. Переходим папку в которой хранится проект truffle: cd solidity
2. Войти в консоль truffle: truffle develop или truffle console
3. Получить стоимость: <Название смарт-контракта>.new.estimateGas(); Pool.new.estimateGas();