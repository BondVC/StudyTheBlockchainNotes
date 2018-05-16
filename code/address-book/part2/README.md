we add a public function with a view modifier to return all of the data in the state of the contract, so we don't have to "call" each variable manually in the front end.

files modified:
	
	* AddressBook.sol has a getAllInfo function now
	
		writing the function like this will return the following error: InternalCompilerError: Stack too deep, try using less variables.

		8 is too many variables to return in a tuple. 7 will work.

		```
		function getAllInfo() view public returns(string a, string b, string c, string d, string e, string f, string g, string h){	
			return (first_name, last_name, phone_number, work_address, where_we_met, notes, date_we_met, email_address);
		}
		```

		that's why we have two seperate functions returning tuples of the variables

	* index.html's javascript is put into app.js

	* in app.js the .call's are replaced with us calling two functions from the smart contract: getFullName and getOtherInfo

