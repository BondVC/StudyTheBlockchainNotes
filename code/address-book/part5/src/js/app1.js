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

      return AddressBookInstance.set_base_state(first_name.val(), last_name.val(), phone_number.val(), email_address.val());

    }).then(function(result) {

      alert('success 1');

    }).catch(function(err) {
      $('#errors').addClass('bad').text(err.toString());
    });

    App.contracts.AddressBook.deployed().then(function(instance) {
      AddressBookInstance = instance;

      return AddressBookInstance.set_other_state(work_address.val(), where_we_met.val(), notes.val(), date_we_met.val());

    }).then(function(result) {
      alert('success 2');
    }).catch(function(err) {
      $('#errors').addClass('bad').text(err.toString());
    });

  },

  getState: function() {
    console.log('Getting state...');

    var AddressBookInstance;

    App.contracts.AddressBook.deployed().then(function(instance) {
      AddressBookInstance = instance;

      return AddressBookInstance.getOtherInfo();
    }).then(function(result) {
      phone_number.val(result[0]);
      work_address.val(result[1]);
      where_we_met.val(result[2]);
      notes.val(result[3]);
      date_we_met.val(result[4]);
      email_address.val(result[5]);

    }).catch(function(err) {
      console.log(err.message);
    });

    App.contracts.AddressBook.deployed().then(function(instance) {
      AddressBookInstance = instance;

      return AddressBookInstance.getFullName();
    }).then(function(result) {
      
      first_name.val(result[0]);
      last_name.val(result[1]);

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
