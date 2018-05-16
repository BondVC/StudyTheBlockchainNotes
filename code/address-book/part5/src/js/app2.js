var first_name = $('#first_name');
var last_name = $('#last_name');
var phone_number = $('#phone_number');
var work_address = $('#work_address');
var where_we_met = $('#where_we_met');
var notes = $('#notes');
var date_we_met = $('#date_we_met');
var email_address = $('#email_address');

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
      App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:9545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('AddressBook.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var AddressBookArtifact = data;
      App.contracts.AddressBook = TruffleContract(AddressBookArtifact);

      // Set the provider for our contract.
      App.contracts.AddressBook.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getState();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#submitContact', App.updateState);
  },

  updateState: function(event) {
    event.preventDefault();

    var AddressBookInstance;

    App.contracts.AddressBook.deployed().then(function(instance) {
      AddressBookInstance = instance;

      return Promise.all([

        AddressBookInstance.set_base_state(first_name.val(), last_name.val(), phone_number.val(), email_address.val()), 

        AddressBookInstance.set_other_state(work_address.val(), where_we_met.val(), notes.val(), date_we_met.val())

        ]);

    }).then(function(result) {
      
      //reference the div with an id of transactions from the html
      var transactionsDiv = $('#transactions');

      transactionsDiv.html("");

      //add a header to the div
      transactionsDiv.append($('<h2>').text('Your Transactions'));

      //add a hr to the div
      transactionsDiv.append($('<hr>'));

      //loop over the transactions (should be 2, because we updated the state in two separate functions)
      for (var i=0; i<result.length; i++){
        //we reference the object from a variable to make it easier to read our code
        var ob = result[i];

        //start a virtual unordered list (list with bullets - no numbers)
        var ul = $('<ul>');

        //we put some space below the first list so it's easier to visually tell them apart
        if (i==0) ul.addClass('bottom-margin-20');

        //the tx is in a key in ob, so we get to it directly
        var firstLi = $('<li>');
        var txTerm = $('<span>').html('<strong>tx</strong>').addClass('right-margin-5');
        var txVal = $('<span>').html(ob.tx);
        firstLi.append(txTerm);
        firstLi.append(txVal);

        ul.append(firstLi);

        //the rest of the data are grand childs of ob in ob.receipt

        var li, term, val;

        for (key in ob.receipt){
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
      
    }).catch(function(err) {
      $('#errors').addClass('bad').text(err.toString());
    });
  },

  getState: function() {
    console.log('Getting state...');

    var AddressBookInstance;

    App.contracts.AddressBook.deployed().then(function(instance) {
      AddressBookInstance = instance;

      return Promise.all([

        AddressBookInstance.getOtherInfo(), 

        AddressBookInstance.getFullName()

        ]);
      
    }).then(function(result) {

      var other_info = result[0];
      var base_info = result[1];

      phone_number.val(other_info[0]);
      work_address.val(other_info[1]);
      where_we_met.val(other_info[2]);
      notes.val(other_info[3]);
      date_we_met.val(other_info[4]);
      email_address.val(other_info[5]);

      first_name.val(base_info[0]);
      last_name.val(base_info[1]);

    }).catch(function(err) {
      console.log(err.message);
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
