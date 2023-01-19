var Pool = artifacts.require("Pool");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(Pool, 3, "Выбираем ЯП для следующего проекта: 0) Java 1) NodeJS 2) Golang");
};