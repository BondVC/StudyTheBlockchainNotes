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

	function set_base_state(string _first_name, string _last_name, string _phone_number, string _email_address) public {
		require(bytes(_first_name).length <= 50 && bytes(_last_name).length <= 50 && bytes(_phone_number).length <= 50 && bytes(_email_address).length <= 50);
		first_name = _first_name;
		last_name = _last_name;
		phone_number = _phone_number;
		email_address = _email_address;
	}

	function set_other_state(string _work_address, string _where_we_met, string _notes, string _date_we_met) public {
		require(bytes(_work_address).length <= 50 && bytes(_where_we_met).length <= 50 && bytes(_notes).length <= 50 && bytes(_date_we_met).length <= 50);
		work_address = _work_address;
		where_we_met = _where_we_met;
		notes = _notes;
		date_we_met = _date_we_met;
	}
}