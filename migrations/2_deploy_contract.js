var KYC = artifacts.require("./Kyc.sol");

module.exports = function (deployer) {
  deployer.deploy(ItemManager);
};
