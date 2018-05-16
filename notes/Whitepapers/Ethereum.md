# Ethereum Whitepaper Notes

* The Bitcoin experiment was interesting for two reasons:
	1. It is the first digital asset with no backing, no intrinsic value and no central issuer or controller.
	2. The underlying blockchain technology can be used as a tool of distributed consensus.

Some alternative applications of Blockchain other than Bitcoin have been:
1. Representation of custom currencies and financial instruments (colored coins)
2. Ownership of underlying physical device (smart property)
3. Non-fungible assets like domain names (Namecoin)
4. Decentralized Autonomous Organizations

**Ethereum provides a blockchain with a built-in Turing complete programming language that can be used to create smart contracts which encode arbitrary state transition functions to be able to create any of the alternative applications mentioned above and more**


## Ethereum Philosophy

* Create an alternative protocol from Bitcoin for building decentralized apps, with particular emphasis on:
1. Rapid Development time
2. Secrutiy for small & rarely used applications
3. Interoperability


**Principles**

1. Simplicity: sometimes at the cost of data storage or time inefficienty. 

2. Universality: provide the most general bare bones internal platform to be able to express any application through code. 

3. Modularity: each part of Ethereum protocol should be able to functiona s its own feature complete library, so as to be able to extend features to other protocols.

4. Agility: details of protocol not set in stone, but high-level constructs are more rigid, e.g. Sharing Roadmap, Abstracting Execution.

5. Non-discrimination & non-censorship: the protocol should be designed to directly regulate the harm and not oppose any specific application.

## Ethereum Accounts

In Ethereum, state is made up of **objects called "accounts"**

An Ethereum **account** is a 20-byte address containing the fields:
1. Nonce - a counter to make sure each txn is processed only once
2. Ether balance
3. Contract code
4. Storage (empty by default)

* *Ether* is the main crypto fuel to pay txn fees.

* Two types of accounts:

1. Contract accounts - controlled by code with methods that can be poked to do things.

2. Externally owned accounts - controlled by private keys, and contains no code. Anyone can send messages from an externaly owned acount by creating and signing a txn.


## Transactions

* A **transaction** is a signed data pagckage that stores a msg to be sent **from an externally owned account**

Transactions contain:
1. msg Recipient address
2. sender signature
3. ether amount to send from sender to recipient
4. optional data field
5. StartGas - max number of computational stepts the txn is allowed to take
6. GasPrice - fee per computational step

In general each computational step costs 1 gas and each byte of txn data costs 5 gas.

## Messages (essentially the same as a txn except it is produced by a contract not an externally owned account)

* Contracts can send messages to other contracts.

Messages contain:
1. sender
2. recipient
3. ether amount
4. optional data field
5. StartGas

## Ethereum State Transition Function

[!alt text](https://raw.githubusercontent.com/ethereumbuilders/GitBook/master/en/vitalik-diagrams/ethertransition.png "Ethereum State Transition Function")































