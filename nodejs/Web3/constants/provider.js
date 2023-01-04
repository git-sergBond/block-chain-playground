/*
Моя тестовая нода https://app.infura.io/dashboard/ethereum/d23be88a818f4fd9aa03691a48ccf714/settings
Кран с валютой https://goerlifaucet.com/
Транзакция https://goerli.etherscan.io/tx/0x7a2c28e5ed91ebe53d7d1d966fdef024300ebc6d858c29a0a3cb9b668d481a36
Адрес Алисы https://goerli.etherscan.io/address/0x73c2ca66fa68a8cf7baacb70462699438279f202
Адрес Контракта HelloWorld https://goerli.etherscan.io/address/0x97021f3076a59c2643c47055632e49168da93bcc
 */

const INFRA_API_KEY = "d23be88a818f4fd9aa03691a48ccf714";
const SEPOLIA_TEST_NET = "https://sepolia.infura.io/v3/";
const GOERLI_TEST_NET = "https://goerli.infura.io/v3/";

const HTTP_PROVIDER = GOERLI_TEST_NET + INFRA_API_KEY;

module.exports = HTTP_PROVIDER;
