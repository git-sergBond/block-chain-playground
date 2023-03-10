var web3 = require("../config/web3Provider");
const keyStore = require("./keyStore");

function getPrivateKeyFromKeyStore() {
    return web3.eth.accounts.decrypt(keyStore, "123").privateKey;
}

var Admin = {
    address: '0xd3d400f5dDE84921ecdeC16D693C759e8fa972e8',
    privateKey: getPrivateKeyFromKeyStore(),
}

var TestUser = {
    address: '0x361144247C2758C8489e7b865908Bb464497186e'
}

module.exports = {
    Admin,
    TestUser
}
