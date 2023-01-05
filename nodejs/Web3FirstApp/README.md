**local run (for windows cmd)**<br>
<br><br>_INITIAL ACTIONS:_<br>
Download geth from https://geth.ethereum.org/downloads and install it.<br>
Create folder `mygeth` in `D:\Program Files\Geth`<br>
Go to folder:
`cd D:\Program Files\Geth`<br>
Verify that Geth is installed:
`geth version`<br>
Create a new account:
`geth account new --datadir ./mygeth`<br>
Sample output:<br>
`Public address of the key:   0xd3d400f5dDE84921ecdeC16D693C759e8fa972e8
Path of the secret key file: mygeth\keystore\UTC--2023-01-05T04-33-27.865687700Z--d3d400f5dde84921ecdec16d693c759e8fa972e8`
<br>
Copy settings for genesis block `env\dev\geth\genesis.json` to `mygeth` folder
<br>
Init genesis block: `geth --datadir ./mygeth init ./mygeth/genesis.json`
<br><br>
_USUAL ACTIONS:_<br>
Run local Ethereum node:
<br>WINDOWS: `geth --datadir ./mygeth --networkid 2222 --ipcdisable --port 30307 --mine --http --http.api "eth,web3,personal,net,miner,admin,debug" --http.port 8507 --http.corsdomain '*' --miner.threads=1 --miner.etherbase 0xd3d400f5dDE84921ecdeC16D693C759e8fa972e8`
<br>Sample output:
`INFO [01-05|09:03:36.146] Started P2P networking                   self=enode://c90365db96752086ecbeb761d7478e3969a56bb16424cc85076d6a66d0f340114b334bbb2cbc31eb9423bb4dcf21feeb019dc316c5d6b49d9ef1978ead5b2a
00@127.0.0.1:30307`
