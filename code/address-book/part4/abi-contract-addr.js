var contract_address = "0x37845e77645d393ac9a375dfc58c7bf885478a8f";

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_first_name",
				"type": "string"
			},
			{
				"name": "_last_name",
				"type": "string"
			},
			{
				"name": "_phone_number",
				"type": "string"
			},
			{
				"name": "_email_address",
				"type": "string"
			}
		],
		"name": "set_base_state",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_work_address",
				"type": "string"
			},
			{
				"name": "_where_we_met",
				"type": "string"
			},
			{
				"name": "_notes",
				"type": "string"
			},
			{
				"name": "_date_we_met",
				"type": "string"
			}
		],
		"name": "set_other_state",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "date_we_met",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "email_address",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "first_name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getFullName",
		"outputs": [
			{
				"name": "a",
				"type": "string"
			},
			{
				"name": "b",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getOtherInfo",
		"outputs": [
			{
				"name": "a",
				"type": "string"
			},
			{
				"name": "b",
				"type": "string"
			},
			{
				"name": "c",
				"type": "string"
			},
			{
				"name": "d",
				"type": "string"
			},
			{
				"name": "e",
				"type": "string"
			},
			{
				"name": "f",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "last_name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "notes",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "phone_number",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "where_we_met",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "work_address",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
