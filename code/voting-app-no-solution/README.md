Decentralized Voting Application

part 1

	we will be building a simple decentralized voting application. A decentralized application is the one which does not exist on a single central server. 

	There are multiple copies of it across the internet on hundreds of computers. This makes it almost impossible to shut down the application. 

	we will build a voting application where we will initialize a set of candidates who will be contesting in the election and then vote for the candidates. 

	The votes will be stored on the blockchain. 

	we will go through the process of writing the voting contract, deploy to the blockchain and interact with it. 

	Why decentralized voting?

	Collective decision making in general, and voting in particular represent a core value proposition for the Ethereum blockchain. Voting on blockchain is fully decentralized, with no central authority to trust. Voting is the building block on which many complex decentralized applications are built.

---------------------

part 2 - what is blockchain

	At its core, blockchain is just a distributed database that maintains a continuously growing list of records. If we are familiar with a relational database, we know there are rows of data in a table. Now, batch these rows of data (say 100 rows each) and link it to the next batch. What we now have is a blockchain! Each batch is called a block and each row inside a block is called a transaction.

	One of the salient features of the blockchain is, it is secured from tampering and revision. In a web app relational database, we can update a row easily. However, in a blockchain, we can never update a record once it's created. Each block in the blockchain stores the hash of the previous block and a link to get to the previous block. If any block is tampered with, the hash of that block changes and can easily be detected. we can learn more about hash functions here https://simple.wikipedia.org/wiki/Cryptographic_hash_function

	More complexity creeps in once we make the blockchain fully decentralized in the sense that we have multiple copies of the blockchain across the internet. How do we make sure all the copies are in sync? How do we make sure all the transactions are propagated to all the computers running and maintaining a copy of the blockchain? How do we prevent bad actors from tampering with the blockchain and so on.

	next, we will learn Ethereum by comparing it with a centralized web application.

---------------------

part 3 - client - server architecture

	One of the best ways to understand Ethereum is by comparing it with the client/server architecture. It is a high level client/server architecture of a simple web application.

	A typical web application consists of server side code which is usually written in a programming language like Java, Ruby, Python etc. The frontend code is implemented using HTML/CSS/Javascript. This entire application is then hosted on a hosting provider like AWS, Google Cloud Platform, Heroku or a VPS.

	Users interact with the web application using a client such as web browser, curl/wget (command line) or through an API. Note that there is one web application which is centralized and all the clients interact with this one application. When a client makes a request to the server, the server processes the request, interacts with the database and/or cache, reads/writes/updates the database and returns a response to the client.

	next, we will see how this compares to the working of the Ethereum blockchain.

---------------------

part 4 - ethereum architecture

	In the diagram, every client (browser) communicates with its own instance of the application. There is no central server to which all clients connect to.

	This means, in an ideal decentralized world, every person who wants to interact with a dapp (Decentralized Application) will need a full copy of the blockchain running on their computer/phone etc. That means, before we can use an application, we have to download the entire blockchain and then start using the application.

	We don't live in an ideal world and it is unreasonable to expect everyone to run a blockchain server to use these apps. But the idea behind decentralization is to not rely on a single/centralized server. So, the community has come up with solutions (hosted blockchain servers, metamask etc.) where we don't have to spend lot of wer hard disk and RAM downloading and running a full copy of the blockchain but also not compromise on the decentralized aspect

	Now, what exactly is in the Ethereum blockchain? The ethereum blockchain has 2 main components:

	Database: Every transaction in the network is stored in the blockchain. When we deploy wer contract, it is considered as a transaction. When we vote for a candidate, that would be another transaction. All these transactions are public and any one can see this and verify. This data can never be tampered with. To make sure all the nodes in the network have same copy of the data and to insure no invalid data gets written to this database, Ethereum uses an algorithm called Proof of Work to secure the network. (http://ethereum.stackexchange.com/questions/14/what-proof-of-work-function-does-ethereum-use)
	
	Code: The database aspect of blockchain just stores the transactions. But where is all the logic to vote for candidate, retrieve the total votes etc. In Ethereum world, we write the logic/application code (called contract) in a language called Solidity. we then use the solidity compiler to compile it to Ethereum Byte Code and then deploy that byte code to the blockchain (There are few other languages we could use to write contracts but solidity is by far the most popular and relatively easier option). So, not only does Ethereum blockchain store the transactions, it also stores and executes the contract code.

	So basically, the blockchain stores wer data, stores the code and also runs the code in the EVM (Ethereum Virtual Machine).

	To build web based Dapps, Ethereum comes with a handy javascript library called web3.js which connects to the blockchain node. So we can just include this library and start building.

	relevant links:

	https://infura.io/

	https://metamask.io/

---------------------

part 5 - overview

	The picture gives a general idea of how the application will look.

	We will first install a fake blockchain called ganache just so we can get our app  working in the dev environment.

	We will then write a contract and deploy it to ganache.

	As we can see in the diagram, the way to communicate with the blockchain is through RPC (Remote Procedure Call). 

	Web3js is a javascript library which abstracts all the RPC calls so we can interact with the blockchain through javascript.

	https://en.wikipedia.org/wiki/Remote_procedure_call