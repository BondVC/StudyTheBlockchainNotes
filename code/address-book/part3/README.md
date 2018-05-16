now a user can update the first_name variable in the contract

files modified:

	* AddressBook.sol has a set_first_name function now

	* index.html now imports abi-contract-addr.js
		this file has the abi and contract address as variables

	* app.js now updates the first_name when the form submits
		we use the variables from abi-contract-addr.js instead of having them in our file

		we added $('#submitContact').on('click', function(){ and triggered set_first_name

go ahead, modify the first name and submit the form

then go into remix and go to the run tab

scroll down on the right panel

click on the first_name button

you'll see that first_name updated to what you set it as in the form
