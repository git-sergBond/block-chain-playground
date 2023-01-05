**local run (for windows cmd)**<br>
_INITIAL ACTIONS:_<br>
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