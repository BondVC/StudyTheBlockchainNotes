var TutorialToken = artifacts.require("TutorialToken");
var Donate = artifacts.require("Donate");

module.exports = function(deployer) {
  deployer.deploy(TutorialToken);
  deployer.deploy(Donate);
};
