const { ethers } = require("hardhat");
const { expect } = require("chai");
describe('CampaignContract', () => {
    let CampaignFactory;
    let CampaignFactoryInstance;
    let CampaignAddress;
    let Campaign;
    let manager;
    let contributor_1;
    let contributor_2;

    beforeEach(async() => {
        [manager,contributor_1,contributor_2]=await ethers.getSigners();
        CampaignFactory=await ethers.getContractFactory('CampaignFactory');
        CampaignFactoryInstance=await CampaignFactory.deploy();
    });

        describe("testing state variables",()=>{
           
            it('checking for manager address',async()=>{
                await CampaignFactoryInstance.createCampaign(100);
                [CampaignAddress]=await CampaignFactoryInstance.getCampaigns();
                Campaign=await ethers.getContractAt('Campaign',CampaignAddress);
                expect(await Campaign.manager()).to.equal(manager.address);
            })
        })
      

    
    
});
