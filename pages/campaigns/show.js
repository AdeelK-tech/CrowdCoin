import React from 'react';
import { Card } from 'semantic-ui-react';
import Layout from "../../components/Layout"
import getCampaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

const campaignShow=({props})=>{
    const{balance,numRequests,approversCount,minContribution,manager}=props;
    const items=[
        {
            header:web3.balance,
            meta:'Balance of Campaign',
            description:'This s the current balance of the Campaign i.e how much people have contributed to this project'
        }
    ]
    return(
        <Layout>
        <h1>hello</h1>
        <Card.Group items={items}/>
        </Layout>
    )
}
campaignShow.getInitialProps=async(props)=>{
const campaignAddress=props.query.address;
console.log(campaignAddress)
const campaign= getCampaign(campaignAddress);
const summary=await campaign.methods.campaignSummary().call()
console.log(summary);
return{
props:{
    balance:summary[0],
    numRequests:summary[1],
    approversCount:summary[2],
    minContribution:summary[3],
    manager:summary[4],
    
}
}
}
export default campaignShow;