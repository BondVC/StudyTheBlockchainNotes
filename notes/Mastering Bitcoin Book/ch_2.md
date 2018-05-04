# How Bitcoin Works

## Transactions, Blocks Mining, & the Blockchain

**Bob's Cafe accepting Bitcoins Example**

Say Bob's Cafe starts accepting Bitcoin as payments and the PoS system automatically converts total price to bitcoin at market rate:

`Total:
	$1.50 USD
	0.015 BTC
`

"Question: Considering the price volatility of Bitcoin, how can any merchant in their right minds rest easy getting paid in Bitcoin?"


### Bitcoin Transactions

In bitcoin terms, "spending" is signing a transaction that transfers value from a previous transaction over to a new owner identitfied by a bitcoin address.

![alt text](https://github.com/bitcoinbook/bitcoinbook/blob/develop/images/mbc2_0204.png?raw=true "Bitcoin Transactions Input Output")


#### Making Change

* Bitcoin transactions need some way of making change because transaction inputs, like currency notes, cannot be divided.
	* i.e. If you spend $20 to buy a $5 coffee, you expect a new $15 in change. You don't expect the cashier to rip up your $20 bill into quarters and take one piece.

**importantly, the change address does not have to be the same address as that of the input and for privacy reasons is often a new address from the owner's same wallet.**


#### Constructing a Transaction

* A wallet application contains all the logic for selecting appropriate inputs and outputs to build a trsanaction to Alice's specification.
* Alice just needs to specify:
	* a) a destination address
	* b) amount


1. Getting the Right Inputs
	* a bitcoin wallet running a full node will contain a copy of every unspent output from every transaction in the blockchain. This takes a LOT of disk space so most just run a lightweight client that tracks only the user's own unspent outputs.

 EG.
 ```
 $ curl https://blockchain.info/unspent?active=1Cdid9KFAaatwczBwBttQcwXYCpvK8h7FK
 ```

 ```
	 {

		"unspent_outputs":[

			{
				"tx_hash":"186f9f998a5...2836dd734d2804fe65fa35779",
				"tx_index":104810202,
				"tx_output_n": 0,
				"script":"76a9147f9b1a7fb68d60c536c2fd8aeaa53a8f3cc025a888ac",
				"value": 10000000,
				"value_hex": "00989680",
				"confirmations":0
			}

		]
	}
 ```


 The above unspent output has value of 10000000 satoshis === 0.10 BTC (which she got from Joe) meaning Alice can pay for the cup of coffee with a single Unspent Output. Otherwise, she'd have to look through all unspent outputs to tally up enough to pay for the coffee.


2. Creating the outputs
	* A TX output is created in the form of a *script*
	* The value held in the script can only be redeemed by introducing a solution to the script.

	* In other words, **The output is payable to whoever can present a signature from th eky corresponding to Bob's public address**



#### Adding transaction to ledger


##### How transaction propagates throughout the network
* Any bitcoin node that receives a valid trasnaction it has not seen before will immediately forward it to all other nodes to which it is connected, a propagation techniqe known as **flooding**

```
A common misconception about bitcoin transactions is that they must be "confirmed" by waiting 10 minutes for a new block, or up to 60 minutes for a full six confirmations. Although confirmations ensure the transaction has been accepted by the whole network, such a delay is unnecessary for small-value items such as a cup of coffee. A merchant may accept a valid small-value transaction with no confirmations, with no more risk than a credit card payment made without an ID or a signature, as merchants routinely accept today.

```

### Mining
* Transactions do not become part of the blockchain until it is verified and included in a block by the process of mining.
* Transactions are bundled into blocks, which require an enormous amount of computation to prove, but only a small amount of computation to verify as proven.

* Mining serves 2 purposes in Bitcoin:
	1. validate trasnactions iby reference to bitcoin's consensus rules, providing security for bitcoin trasanctions by rejecting invalid or malformed transactions.
	2. creates new bitcoin in each block, almost like a central bank printing new money. The amount of bitcoin created per block is limited and diminishes with time, following a fixed issuance schedule.

```
The algorithm for Proof-of-Work involves repeatedly hashing the header of the block and a random number with the SHA256 cryptographic algorithm until a solution matching a predetermined pattern emerges. The first miner to find such a solution wins the round of competition and publishes that block into the blockchain.
```

* Since transactions are constnatly flowin ginto the network from user wallets and other applicatoins, nodes add them to a temporary pool of *unverified txns*. 
* Transactions are added to the new block, prioritized by the highest-fee transactions first and a few other criteria. 

**By convention, any block with more than six confirmations is considered irrevocable, because it would require an immense amount of computation to invalidate and recalculate six blocks.** 


![alt text](https://github.com/bitcoinbook/bitcoinbook/raw/develop/images/mbc2_0209.png "Blockchain")

* Now that the transaction is added to the ledger, everyone running a full node can see the entire history of how Alice's BTC came from genesis block to her address. 































