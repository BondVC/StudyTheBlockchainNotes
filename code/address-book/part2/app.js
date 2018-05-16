if (typeof web3 !== 'undefined') {
    // how would web3 be defined?
    // because of
    // METAMASK (ethereum chrome extension) / MIST (ethereum browser)

        //then the provider is automatically injected into the javascript context that we can use

    // basically end user ethereum

    // both metamask (chrome extension) and mist inject a web3 client into the DOM of every page visited.

    // we're not using either at this point, because we're using ganache client at localhost:7545

    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//we're choosing the first account that ETHEREUM-TESTRPC provides us after we ran testrpc
web3.eth.defaultAccount = web3.eth.accounts[0];

//if you change line 68 to web3.eth.accounts[2]; setInstructor won't work because the owner is 0 and we have a function modifier on the contract to say that only the owner can run setInstructor, so only 0 not 2
// web3.eth.defaultAccount = web3.eth.accounts[2];

// we need to use the eth contract method to initialize (create) the contract on an address
// this accepts one parameter, an abi or application binary interface
// this abi allows you to call functions and receive data from your smart contract (it's an interface)
// you can find your abi by going to the remix ide, clicking on compile, clicking on details and scrolling down. you can copy it from there
var Web3ContractABI = web3.eth.contract([ { "constant": true, "inputs": [], "name": "date_we_met", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "email_address", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "first_name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getFullName", "outputs": [ { "name": "a", "type": "string" }, { "name": "b", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getOtherInfo", "outputs": [ { "name": "a", "type": "string" }, { "name": "b", "type": "string" }, { "name": "c", "type": "string" }, { "name": "d", "type": "string" }, { "name": "e", "type": "string" }, { "name": "f", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "last_name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "notes", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "phone_number", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "where_we_met", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "work_address", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" } ]);

//define the contract address
var contract = Web3ContractABI.at('0x8cdaf0cd259887258bc13a92c0a6da92698644c0');
console.log(contract);

contract.getFullName(function(err, res) {
    if (err){
        $('#errors').addClass('bad').text(err.toString());
    }else{
        $("#first_name").val(res[0]);
        $("#last_name").val(res[1]);
    }
});

contract.getOtherInfo(function(err, res) {
    if (err){
        $('#errors').addClass('bad').text(err.toString());
    }else{
        $("#phone_number").val(res[0]);
        $("#work_address").val(res[1]);
        $("#where_we_met").val(res[2]);
        $("#notes").val(res[3]);
        $("#date_we_met").val(res[4]);
        $("#email_address").val(res[5]);
    }
});
