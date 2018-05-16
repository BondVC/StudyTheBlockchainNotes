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

function thCreate(val) {
    return $('<th>').text(val);
}

function trForBodyCreate(cand, votes) {
    var tr = $('<tr>');
    var tdC = $('<td>');
    tdC.text(cand);
    var tdV = $('<td>');
    tdV.text(votes);
    tr.append(tdC, tdV);

    return tr;
}

function createTable(cands, res) {
    for (var i = 0; i < cands.length; i++) {
        cands[i].votes = res[i].c[0];
    }

    var table = $('<table>').addClass('table table-bordered');
    var tHead = $('<thead>');
    var topTr = $('<tr>');

    topTr.append(thCreate('bikes')).append(thCreate('bike'));

    tHead.append(topTr);

    table.append(tHead);

    var tBody = $('<tbody>');

    var tr;

    for (var i = 0; i < cands.length; i++) {
        tBody.append(trForBodyCreate(web3.toAscii(cands[i].name), cands[i].votes));
    }

    table.append(tBody);

    return table;
}

function createSelect(cands, id) {
    var sel = $('<select>');

    sel.attr('id', id);

    var op;

    var candName;

    for (var i = 0; i < cands.length; i++) {
        candName = web3.toAscii(cands[i].name);

        op = $('<option>').val(candName).text(candName);
        sel.append(op);
    }

    return sel;
}

var bikes_div = $('#bikes');
var renting_div = $('#renting');
var errors_div = $('#errors');

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
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('BikeRegistryToken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var BikeRegistryTokenArtifact = data;
      App.contracts.BikeRegistryToken = TruffleContract(BikeRegistryTokenArtifact);

      // Set the provider for our contract.
      App.contracts.BikeRegistryToken.setProvider(App.web3Provider);

      return App.grabState();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
    $(document).on('click', '#newBikeRentalButton', App.handleBikeRental);
  },
  handleBikeRental: function(event) {
    event.preventDefault();

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.BikeRegistryToken.deployed().then(function(instance) {
        bikeRegistryTokenInstance = instance;

        return bikeRegistryTokenInstance.newBikeRental(account, 'today');
      }).then(function(result) {
        console.log(result);
        addTransactionToDOM(result, $('#transactions'));
      }).catch(function(err) {
        $('#errors').text(err.message);
      });
    });
  },
  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseInt($('#BRTTransferAmount').val());
    var toAddress = $('#BRTTransferAddress').val();

    console.log('Transfer ' + amount + ' BRT to ' + toAddress);

    var bikeRegistryTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.BikeRegistryToken.deployed().then(function(instance) {
        bikeRegistryTokenInstance = instance;

        return bikeRegistryTokenInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },

  grabState: function() {
    console.log('grabbing state...');

    var bikeRegistryTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      $('#currentUserAddress').text(account);

      App.contracts.BikeRegistryToken.deployed().then(function(instance) {
        bikeRegistryTokenInstance = instance;

        return Promise.all([
          bikeRegistryTokenInstance.balanceOf(account),
          bikeRegistryTokenInstance.name.call(),
          bikeRegistryTokenInstance.symbol.call(),
          bikeRegistryTokenInstance.bikeStoreAddress.call(),
          bikeRegistryTokenInstance.contractAddress.call()
        ]);
      }).then(function(result) {

        var balance = result[0].c[0];
        var name = result[1];
        var symbol = result[2];
        var bikeStoreAddress = result[3];
        var contractAddress = result[4];

        $('#tokenName').text(name);
        $('#BRTBalance').text(`${balance} ${symbol}`);
        $('#BikeStoreOwnerAddress').text(bikeStoreAddress);
        $('#contractAddress').text(contractAddress);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
