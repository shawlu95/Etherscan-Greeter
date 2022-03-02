const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Integration Test - Testnet', function () {
  let greeter;
  let owner;

  beforeEach(async function () {

    [owner] = await ethers.getSigners();
    const chainId = hre.network.config.chainId;
    const address = {
      4: '0x1d83639CE9728C3273Fc0Bbf200c63f939da3F49'
    }[chainId];

    const Greeter = await ethers.getContractFactory('Greeter');
    greeter = Greeter.attach(address);
  });

  it('Check message', async function () {
    expect(await greeter.greet()).to.equal("Hello");
  });
});