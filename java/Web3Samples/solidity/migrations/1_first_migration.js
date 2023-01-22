var Pool = artifacts.require("Pool");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(Pool, 3, "Выбираем ЯП для следующего проекта: 1) Java 2) NodeJS 3) Golang");
};