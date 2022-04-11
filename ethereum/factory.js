import web3 from './web3';
import CampaignFactory from './artifacts/contracts/Campaign.sol/CampaignFactory.json';
const instance=new web3.eth.Contract(CampaignFactory.abi,'0xEAC9370Fd8cA2c9f79F721A6e54D2c8b918d4Fb7')
export default instance;