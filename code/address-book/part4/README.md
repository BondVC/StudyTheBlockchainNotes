now a user can update all of the state in their contract using the form

files modified:

	* AddressBook.sol
		set_first_name was removed

		set_base_state was added

		set_other_state was added

			set_base_state and set_other_state were split up to update the state in the contract because if they were together like the below code, then web3 would throw: "Error: VM Exception while processing transaction: out of gas"

			    function set_state(string _first_name, string _last_name, string _phone_number, string _work_address, string _where_we_met, string _notes, string _date_we_met, string _email_address) public {
			        require(bytes(_first_name).length <= 50 && bytes(_last_name).length <= 50 && bytes(_phone_number).length <= 50 && bytes(_work_address).length <= 50 && bytes(_where_we_met).length <= 50 && bytes(_notes).length <= 50 && bytes(_date_we_met).length <= 50 && bytes(_email_address).length <= 50);
			        first_name = _first_name;
			        last_name = _last_name;
			        phone_number = _phone_number;
			        work_address = _work_address;
			        where_we_met = _where_we_met;
			        notes = _notes;
			        date_we_met = _date_we_met;
					email_address = _email_address;
			    }

	* app.js now updates all of the state in the contract when the form is submitted

		in $('#submitContact').on('click', function(){

			we triggered set_base_state and set_other_state

go ahead, modify the the form and submit it

then go into remix and go to the run tab

scroll down on the right panel

click on the first_name, last_name, or other state buttons

you'll see that the state was updated to what you set it as in the form
