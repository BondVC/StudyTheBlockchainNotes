pragma solidity ^0.4.18;

contract AddressBook {
	string public first_name = 'Yogi';
	string public last_name = 'Bear';
	string public phone_number = '123-456-7890';
	string public work_address = '123 pine street';
	string public where_we_met = 'the cave';
	string public notes = 'blah blah blah';
	string public date_we_met = '1-2-18';
	string public email_address = 'yogi@gmail.com';

	function getFullName() view public returns(string a, string b){
		return (first_name, last_name);
	}

	function getOtherInfo() view public returns(string a, string b, string c, string d, string e, string f){
		return (phone_number, work_address, where_we_met, notes, date_we_met, email_address);
	}

	function set_first_name(string _first) public {
		require(bytes(_first).length <= 50);
		first_name = _first;
	}
}