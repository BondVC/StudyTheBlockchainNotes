var AddressBook = artifacts.require("AddressBook");

module.exports = function(deployer) {
  deployer.deploy(AddressBook);
};