var BikeRegistryToken = artifacts.require("BikeRegistryToken");

module.exports = function(deployer) {
  deployer.deploy(BikeRegistryToken);
};
