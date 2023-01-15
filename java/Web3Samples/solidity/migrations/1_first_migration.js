var Pool = artifacts.require("Pool");

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(Pool);
};