if you run into bugs
	
	truffle migrate --reset

	or create a new meta mask account and use that

	or restart ganache

this is a voting app

only the owner of the contract can add candidates

anyone can vote on candidates as many times as they'd like

we use bytes32 to save gas instead of string (the max length of charactrers that can go into it is 32)