import web3 from './web3';
import CampaignFactory from './artifacts/contracts/Campaign.sol/CampaignFactory.json';
const instance=new web3.eth.Contract(CampaignFactory.abi,'0x64481E3731873246b78774D90D84B7A426C46EBd')
export default instance;