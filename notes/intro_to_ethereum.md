# What is Ethereum??

1. Ethereum is a database that contains *transactions*

	* Transactions can be between:
	  * People <> People
	  * Contracts <> Contracts
	  * People <> Contracts

2. Ethereum is a network of computers that *runs code*

	* *Pros:* The Ethereum Computer is one that:
		* anyone can create
		* no one can change
		* anyone can see
		* anyone can run
		* lives forever
		* in most cases is very trustworthy

	* *Cons:* The Ethereum Computer is one that:
		* runs code *very slowly*
		* runs code *at a very expensive monetary price*



# History of Ethereum:

1. Started with Bitcoin with Satoshi's whitepaper in 2008
2. As the open source developer community around Bitcoin started to grow, one recurring problem required a solution:
	* Every developer was having to start their own blockchain to create decentralized applications.
	* Like we don't all need to build our own internet for every website, we needed to have one blockchain that everyone can build their decentralized applications on.
	* This was pointed out by Vitalik Buterin
	* Thus Ethereum was created to be the one blockchain that all DApps utilize for their decentralized code and logic.
	* So devs can focus on building apps, not blockchains.

**"Question:** what then, is the point of all these other platform tokens coming out, such as NEO, EOS, TRON, CARDANO, ONT, etc. ?"

**"Question:** What is the problem with Ethereum that these other platforms are trying to solve?"

**"Question:** Why come out with a whole new platform rather than making a pull request to build on top of what is meant ot be the ONE blockchain upon which all dApps are built?"


# Bitcoin vs. Ethereum

** Bitcoin Limitations **

1. No general purpose programming language for dApp developers.

	* It does have its own smart contract language but it is limited in that:
		* cannot store state
		* NOT Turing Complete (no loops)

	* **Aside**
		* Bitcoin Core Scripts
			* All bitcoin transactions have OP codes embedde into its inputs and outputs.

			* The 5 most common types of scripts are:

			1. Pay to Public Key Hash (p2pkh)
			  * Pay to a bitcoin address
			2. Pay to Public Key (p2pk)
			  * Not used much anymore as p2pkh is more secure since the public key is not revealed until the output is spent.
			3. Pay to MultiSig (p2ms)
			  * Allows multiple keys to control the funds of a single bitcoin address's funds.
			  * Must specify how many of those keys are required to sign off on a transaction for the transaction to be valid.
			  ** Regular multisig outputs are rarely used nowadays, as best practice is to use a p2sh multisig output **
			4. Pay to Script Hash (p2sh)
			  * p2sh outputs have a script that contains the hash of another script called `redeemScript`.
			  * The spender of this transaction can only spend the bitcoins in a p2sh output if s/he provides a script matching the script & data. This adds security by defering revealing the spending conditions to the moment of spending.
			5. Data output
			  * Data outputs push data into the blockchain. 
			  * The standard is that up to 40 bytes can be pushed but more data can be used if a miner accepts the transaction.

    2. Issuance model
    	* The supply of Bitcoin is forever capped at 21 million coins.
    	* The supply of Ether is "uncapped".
    		* Except that only 18 million ether can be created each year.

    3. Block rewards for miners
    	* Bitcoin -> 12.5 BTC
    	* Ethereum -> 5 Eth

    4. New block discovery
    	* Bitcoin -> every 10 minutes
    	* Ethereum -> every 15 seconds

** Ethereum ** is the network of computers that runs code. 

** Ether ** is the "fuel" that powers the network. Meaning:
	* Pay for transaction fees
	* Launch a smart contract
	* Call functions from a smart contract


# Ethereum Virtual Machine (EVM)

* Ethereum is a network of computers/nodes/clients
* EVM is the program that the network of computers run. 
  * The program is made up of smart contracts.
  * Anyone can deploy a smart contract.

# Lifecycle of Smart Contract Deployment Process

* Write some code in Solidity
* Compile the Solidity smart contract down to EVM bytecode.
* Send the *Bytecode* as part of a *Transaction* to the Ethereum network.
* Once the transaction gets put into a block and verified, i.e. mined, the smart contract is given a *public address* and now lives on the blockchain forever, that everyone can interact with.
* To interact with the smart contract you must:
  * send transactions to the public address and specify which method to invoke.
  * the result of the method call is written to the blockchain after the subsequent transaction is verified and put on the blockchain (mined).

# What is Gas?

** Gas is the cost of invoking a smart contract method **

* Gas is a unit of measurement for how much computation the EVM needs

** Gas Price ** is the price of one unit of gas, used to calculate the total transaction fee for invoking a method call. Must be paid by the sender of the transaction.

** 1 gas === 10 Szabo === 1/100,000 Ether ** forever.

* Any transaction that invokes a smart contract method gets executed on every single ethereum node/client/computer.

* The idea is to limit infinite loops, to protect the Ethereum network from:
	* DDoS
	* inefficient code
* An attacker on the Ethereum network thereby has to pay for the resources they use: including bandwidth, CPU caculations, storage. So there is no incentive for an attacker to attack the Ethereum network.


"Question: How is the gas price of each individual line of code determined? Is it priced dynamically or is it predetermined?"








