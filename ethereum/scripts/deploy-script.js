const { ethers } = require("hardhat");

async function main() {
  const [deployer]=await ethers.getSigners();
  const CampaignFactory=await ethers.getContractFactory('CampaignFactory')
  const hardhatCampaignFactory=await CampaignFactory.deploy();
  console.log(hardhatCampaignFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
