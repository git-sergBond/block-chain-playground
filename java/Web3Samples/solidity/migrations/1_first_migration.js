var Pool = artifacts.require("Pool");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(Pool, 3, "Выбираем президента США 0) Байден 1) Трамп 2) Путин :)");
};