copying and pasting the abi and contract address everytime we make a change is a terribel experience

that's why we're going to have truffle do it for us

we still have to keep ganache running

1. run

$ truffle unbox tutorialtoken

2. copy and paste our contract into the contracts folder

3. make a new file in migrations called 2_deploy_contracts.js
	
4. if there's TutorialToken.sol file in the contracts folder, delete it

5. run

$ truffle compile

	shows you errors in your code or warnings (makes .json files in your build/contracts folder)

$ truffle migrate

	truffle migrate, compiles for you if you didn't do already and deploys the contracts to the ethereum network you are connected to.

6. update index.html in src

	we updated the title 

	and 

	updated the body to be our html

	we don't import any JavaScript because truffle takes care of that for us

	we also get rid of some rogue classes on our form inputs

7. we add a utility.css file in src/css and link it to our index.html file

8. update app.js in the src/js folder

we update the instances of App.js to a more suitable variable name

in app1.js
	we make getState to get the state of the contract

		we do two promises one after another

	we update the name of the transfer function to updateState

	we update bindEvents

		to attach a click event to the form's button on the page

		we change bindEvents to trigger the updateState function

	we add code into the updateState function to update the state of the contract with the new form data

		we end up triggering two functions

in app2.js
	we refactor app.js to combine the promises together using Promise.all

		The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises.

		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all	


	the refactoring happens in the updateState function and the getState functions.

	When updateState is complete,

		we take the transaction data that gets returned from the ethereum blockchain that web3 gives to us and add it to the page


		cumulativeGasUsed is the sum of gasUsed by this transaction and all preceding transactions in the same block.


			First of all, let's understand what is the cumulative gas used.

			cumulativeGasUsed: Number - The total amount of gas used when this transaction was executed in the block.

			As suggested by JavaScript API. That explanation was not clear to me at all, let's try another one:

			cumulativeGasUsed is the sum of gasUsed by this transaction and all preceding transactions in the same block.

			Example: http://etherscan.io/txs?block=1402679 We have there 4 transactions. 3 simple sends, and 1 contract creation.

			Send, 21000 gasUsed, 21000 cumulativeGasUsed
			Send, 21000 gasUsed, 42000 cumulativeGasUsed
			Send, 21000 gasUsed, 63000 cumulativeGasUsed
			Contract creation, 514474 gasUsed, 577474 cumulativeGasUsed

 
9. run

$ npm run dev

and if that doesn't work

run

lite-server