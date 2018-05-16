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


DonateApp = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return DonateApp.initWeb3();
  },

  initWeb3: function() {
    // Initialize web3 and set the provider to the testRPC.
    if (typeof web3 !== 'undefined') {
      DonateApp.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      DonateApp.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
      web3 = new Web3(DonateApp.web3Provider);
    }

    return DonateApp.initContract();
  },

  initContract: function() {
    $.getJSON('Donate.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var DonateArtifact = data;
      DonateApp.contracts.Donate = TruffleContract(DonateArtifact);

      // Set the provider for our contract.
      DonateApp.contracts.Donate.setProvider(DonateApp.web3Provider);

      // Use our contract to retieve how much has been raised so far

      return DonateApp.getBalance();
    });

    return DonateApp.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#donateButton', DonateApp.handleDonate);
    $(document).on('click', '#transferOwnershipButton', DonateApp.handleTransferOwnership);
    return DonateApp.getAddressInfo();
  },

  handleDonate: function(event) {
    event.preventDefault();

    var amount = parseInt($('input#donationAmount').val());

    // web3.eth.getAccounts(function(error, accounts) {
    //   if (error) {
    //     console.log(error);
    //   }
    //
    //   var account = accounts[0];
    //
      var txn = {
        from: web3.eth.accounts[0],
        value: 10
      }

      DonateApp.contracts.Donate.deployed().then(function(instance) {
        instance.deposit(amount, txn);
      }).then(function(result) {
        addTransactionToDOM(result, $('#transactions'));
      });
    // });
  },
  getBalance: function() {
    DonateApp.contracts.Donate.deployed().then(function(instance) {

      instance.owner().then(function(result) {
        var owner = result;
        $('#contractOwnerAddress').text(owner);
      });

      return instance.getBalance();
    }).then(function(result) {
      $('#contractBalance').text(result);
    });
  },
  getAddressInfo: function() {
    var account;
    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      account = accounts[0];

      $('#userAddress').text(account);

      web3.eth.getBalance(account, function(err, balance) {
        // console.log(account);
        if (err) {
          console.log(err);
        }
        console.log(balance.c[0]);
        $('#userBalance').text(balance.c[0]/10000);
      });
    });
  },
  handleTransferOwnership: function(event) {
    event.preventDefault();

    var newOwnerAddress = $('input#newOwnerAddress').val();

    DonateApp.contracts.Donate.deployed().then(function(instance) {
      return instance.transferOwnership(newOwnerAddress);
    });
  }
};

$(function() {
  $(window).load(function() {
    DonateApp.init();
  });
});
