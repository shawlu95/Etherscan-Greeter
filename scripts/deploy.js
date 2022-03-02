const { ethers } = require('hardhat');
const hre = require('hardhat');

async function main() {
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello');
  await greeter.deployed();
  console.log('Greeter deployed:', greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
