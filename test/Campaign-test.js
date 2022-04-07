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
    let recipient;

    beforeEach(async() => {
        [manager,contributor_1,contributor_2,recipient]=await ethers.getSigners();
        CampaignFactory=await ethers.getContractFactory('CampaignFactory');
        CampaignFactoryInstance=await CampaignFactory.deploy();
        await CampaignFactoryInstance.createCampaign(100);
        [CampaignAddress]=await CampaignFactoryInstance.getCampaigns();
        // console.log(CampaignAddress);
        Campaign=await ethers.getContractAt('Campaign',CampaignAddress);
    });

        describe("testing state variables",()=>{
           
            it('checking for manager address',async()=>{
                
                expect(await Campaign.manager()).to.equal(manager.address);
            })
            it('checking for minContribution',async()=>{
                expect(await Campaign.minContribution()).to.equal(100);
            })
        })
      describe('testing Functions', () => {
          it('it should be reverted (Testing the contribute function)', async() => {
              
              await expect(Campaign.connect(contributor_1).contribute({value:"99"})).to.be.revertedWith("You have to contribue enough")

          });
          it('checking ....', async() => {
              expect(await Campaign.manager()).to.not.equal(contributor_1.address);
          });

          it('|Create Request Function-Testing onlyManager modifier|it should be reverted', async() => {
            
            await expect(Campaign.connect(contributor_1).createRequest(100,"i want to buy gadgets",recipient.address)).to.be.revertedWith("You are not the manager of the campaign");
        });

        it('|Create Request Function-storing a request|it should not be reverted', async() => {
            await Campaign.connect(manager).createRequest(100,'I want a working space',recipient.address);
            await Campaign.connect(manager).createRequest(200,'I want a engineer',recipient.address);
            const req=await Campaign.requests(1);
            // console.log(req)
            expect(req.amount).to.equal(200);
        });

        it('|Aprove Request Function|it should be reverted approving request from a non contributor', async() => {
            await Campaign.connect(manager).createRequest(100,'I want a working space',recipient.address)
             await expect(Campaign.approveRequest(0)).to.be.revertedWith("not in approvers list")
        });
        it('|Aprove Request Function|it should not be reverted approving request from a contributor',async() => {
            await Campaign.connect(contributor_1).contribute({value:"101"})
            await Campaign.connect(manager).createRequest(100,'I want a working space',recipient.address)
            await Campaign.connect(contributor_1).approveRequest(0)
            const req=await Campaign.requests(0)
            expect(req.approvalCount).to.equal(1);
            await expect(Campaign.connect(contributor_1).approveRequest(0)).to.be.revertedWith("You cannot approve a request twice")
        });
        it('|Finalize Request Function|it should not be reverted finalizing request from a manager',async()=>{
            await Campaign.connect(contributor_1).contribute({value:"101"})
            await Campaign.connect(manager).createRequest(100,'I want a working space',recipient.address)
            await Campaign.connect(contributor_1).approveRequest(0)
            
            await Campaign.connect(manager).finalizeRequest(0);
            const req=await Campaign.requests(0)
            expect(req.completed).to.equal(true);
        })
      });

        

    
    
});
