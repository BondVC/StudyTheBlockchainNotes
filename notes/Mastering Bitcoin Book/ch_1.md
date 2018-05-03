# What is Bitcoin?

* Bitcoin is a collection of contepts and technologies that form the basis of a digital money ecosystem.

* There is no actual physical Bitcoin or even digital, per se. The coins are implied by the transaction that transfer value from sender to recepient.

* Users can transfer Bitcoin over the network to do most things that can be done with conventional currenties:
	* buy/sell goods
	* send money to people/organizations
	* extend credit

* Bitcoin is the perfect form of money for the internet because it is:
    * fast
    * borderless
    * secure

* Bitcoin is the culmination of decades of research in cryptography and distributed systems with 4 key innovations:

1. a decentralized P2P network (the bitcoin protocol)
2. a public transaction ledger (the blockchain)
3. a set of reules for independent transaction validation and currency issuance (consensus rules)
4. a mechanism for reaching global decentralized consensus on the valid blockchain (Proof of Work Algorithm)


Bitcoin is a protocol that can be access using a client application that speaks the protocol.

* A Bitcoin wallet is the most commong UI fto the bitcoin system.

* Just like a web browser is the most common UI for the HTTP protocol.

**Alice receiving Bitcoin from Joe Example**

* Alice is assigned a new address by her mobile wallet application. She owns 0 BTC.
* Alice shows Joe her wallet's QR code
* Joe uses his mobile wallet to scan the code to automatically enter Alice's public key
* Joe presses send, and his wallet constructs a trasnaction that assigns 0.1 BTC to the address provided by Alice, sourcing the funds from Joe's wallet and signing the transaction with Joe's private keys.
* This tells the Bitcoin network that Joe has authorized a *transfer of value* from his address to Alice's address.
* The transaction is transmitted via the p2p protocol, propagating across the bitcoin network.
* Most well-connected nodes in the network receive the transaction within seconds and see Alice's address for the first time.
* Alice's wallet is meanwhile listening to published transactions on the Bitcoin network, looking for any transactions that match the addresses in her wallet.

* Alice's wallet will upon detecting a transaction containing her address show an unconfirmed transaction of 0.1 BTC that is inbound.
* This means the transaction has been propagated to the network, but not yet recorded in the Bitcoin Blockchain.
* To be confirmed, the transaction must be included in a block and added to the blockchain, which happens every 10 minutes on average.

In traditional finance terms, this process is called **clearing**  


"Question: what is the different between 3 and 4?"

# Bitcoin Mining

* Bitcoin is created through a process called mining.
	* Mining involves using your computer's processing power to verify and record transactions, by competing to find solutions to a mathematical problem.
	* A new block is mined on average very 10 minutes.
	* The miner who's block is accepted is rewarded with brand new bitcoin.

	**The *Bitcoin Protocol* includes built-in algorithms that regulate mining across the network. The difficulty of the mathematical problem that needs to be solved is dynamically adjusted so that on average someone suceeds every 10 minutes, regardless of how many miners are competing.**

**Essentially bitcoin mining decentralizes the currency-issuance and clearing functions of a central bank and replaces the need for a central bank.**







