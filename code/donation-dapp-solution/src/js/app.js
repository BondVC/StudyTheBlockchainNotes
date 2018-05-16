var $ownerSees = $('#ownerSees');
var $transactions = $('#transactions');
var $transferToAddress = $('#transferToAddress');
var $ownerAddress = $('#ownerAddress');
var $ownerSeesAdditionalInfo = $('#ownerSeesAdditionalInfo');
var $balance = $('#balance');
var $donationAmount = $('#donationAmount');
var $donationInfo = $('#donationInfo');
var $yourAddress = $('#yourAddress');
var $yourETHAmount = $('#yourETHAmount');

function addTransactionToDOM(ob, transactionsDiv) {
    //start a virtual unordered list (list with bullets - no numbers)
    var ul = $('<ul>');

    //the tx is in a key in ob, so we get to it directly
    var firstLi = $('<li>');
    var txTerm = $('<span>').html('<strong>tx</strong>').addClass('right-margin-5');
    var txVal = $('<span>').html(ob.tx);
    firstLi.append(txTerm);
    firstLi.append(txVal);

    ul.append(firstLi);

    //the rest of the data are grand childs of ob in ob.receipt

    var li, term, val;

    for (key in ob.receipt) {
        li = $('<li>');
        term = $('<span>').html(`<strong>${key}</strong>`).addClass('right-margin-5');
        val = $('<span>').html(ob.receipt[key]);

        li.append(term)
        li.append(val);

        ul.append(li);
    }

    //we add the virtual unordered list onto the html
    transactionsDiv.append(ul);
}

App = {
    web3Provider: null,
    contracts: {},

    init: function() {
        return App.initWeb3();
    },

    initWeb3: function() {
        // Initialize web3 and set the provider to the testRPC.
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
            web3 = new Web3(App.web3Provider);
        }

        return App.initContract();
    },

    initContract: function() {
        $.getJSON('Donate.json', function(data) {
            // Get the necessary contract artifact file and instantiate it with truffle-contract.
            var DonateArtifact = data;
            App.contracts.Donate = TruffleContract(DonateArtifact);

            // Set the provider for our contract.
            App.contracts.Donate.setProvider(App.web3Provider);

            return App.bindEvents();

        });
    },
    bindEvents: function() {
        $(document).on('click', '#transferOwnership', App.transferOwnership);
        $(document).on('click', '#makeDonation', App.donate);

        //add your address to the page
        var yA = $yourAddress;
        var p = $('<p>');
        var sp = $('<strong>').text('Your Address: ');
        var add = $('<span>').text(web3.eth.accounts[0]);

        p.append(sp);
        p.append(add);
        yA.append(p);

        web3.eth.getBalance(web3.eth.accounts[0], function(err, balance){
             //add how much you have to the page
             var yEa = $yourETHAmount;

             var sp = $('<strong>').text('How Much ETH you Have: ');

             var add = $('<span>').text(balance.c[0]/10000);

             sp.append(add);

             yEa.prepend(sp);
        });


        return App.grabState();
    },
    grabState: function() {
        var DonateInstance;

        App.contracts.Donate.deployed().then(function(instance) {
            DonateInstance = instance;

            return Promise.all([DonateInstance.owner.call(), DonateInstance.getBalance()]);

        }).then(function(result) {

            //show the owner admin section if the person here is the owner
            if (web3.eth.accounts[0] == result[0]) $ownerSees.removeClass('hide');

            $ownerAddress.text(result[0]);
            $balance.text(result[1].c[0]);

            //we'll set up watching events here
            var DonateInstance;

            //watch for a solidity event
            App.contracts.Donate.deployed().then(function(instance) {
                DonateInstance = instance;

                return DonateInstance.OwnershipTransferred().watch(function(err, res){
                    if (err) console.log(err);
                    console.log(res.args.newOwner, res.args.previousOwner);
                    $('#ownerAddress').text(res.args.newOwner);
                });

            }).catch(function(err) {
                $('#errors').text(err.message);
            });

            //balance event
            var DonateInstance;

            //watch for a solidity event to watch
            App.contracts.Donate.deployed().then(function(instance) {
                DonateInstance = instance;

                return DonateInstance.OwnershipTransferred().watch(function(err, res){
                    if (err) console.log(err);
                    console.log(res.args.newOwner, res.args.previousOwner);
                    $('#ownerAddress').text(res.args.newOwner);
                });

            }).catch(function(err) {
                $('#errors').text(err.message);
            });

        }).catch(function(err) {
            $('#errors').text(err.message);
        });
    },
    transferOwnership: function(event) {
        event.preventDefault();

        var DonateInstance;

        App.contracts.Donate.deployed().then(function(instance) {
            DonateInstance = instance;

            var tAddressVal = $transferToAddress.val();

            return DonateInstance.transferOwnership(tAddressVal);
        }).then(function(result) {
          addTransactionToDOM(result, $transactions);

          $ownerSeesAdditionalInfo.append($('<p>').text('ownership has been transferred to address provided.'));

        }).catch(function(err) {
            $('#errors').text(err.message);
        });
    },
    donate: function(event){
        event.preventDefault();
        var amount = parseInt($donationAmount.val());

        var DonateInstance;

        App.contracts.Donate.deployed().then(function(instance) {
            DonateInstance = instance;

            return DonateInstance.deposit(amount, {from: web3.eth.accounts[0], value: amount});

        }).then(function(result) {

          addTransactionToDOM(result, $transactions);

          $donationInfo.text('donation successfully made');

        }).catch(function(err) {
            $('#errors').text(err.message);
        });
    }
};

$(function() {
    $(window).load(function() {
        App.init();
    });
});
