# Bitcoin Core: The Reference Implementation

[!alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0301.png "Bitcoin Core Architecture")


Here are some of the most important options that you can set in the configuration file, or as command-line parameters to bitcoind:

**alertnotify**
Run a specified command or script to send emergency alerts to the owner of this node, usually by email.

**conf**
An alternative location for the configuration file. This only makes sense as a command-line parameter to bitcoind, as it can’t be inside the configuration file it refers to.

**datadir**
Select the directory and filesystem in which to put all the blockchain data. By default this is the .bitcoin subdirectory of your home directory. Make sure this filesystem has several gigabytes of free space.

**prune**
Reduce the disk space requirements to this many megabytes, by deleting old blocks. Use this on a resource-constrained node that can’t fit the full blockchain.

**txindex**
Maintain an index of all transactions. This means a complete copy of the blockchain that allows you to programmatically retrieve any transaction by ID.

**dbcache**
The size of the UTXO cache. The default is 300 MiB. Increase this on high-end hardware and reduce the size on low-end hardware to save memory at the expense of slow disk IO.

**maxconnections**
Set the maximum number of nodes from which to accept connections. Reducing this from the default will reduce your bandwidth consumption. Use if you have a data cap or pay by the gigabyte.

**maxmempool**
Limit the transaction memory pool to this many megabytes. Use it to reduce memory use on memory-constrained nodes.

**maxreceivebuffer/maxsendbuffer**
Limit per-connection memory buffer to this many multiples of 1000 bytes. Use on memory-constrained nodes.

**minrelaytxfee**
Set the minimum fee rate for transaction you will relay. Below this value, the transaction is treated nonstandard, rejected from the transaction pool and not relayed.