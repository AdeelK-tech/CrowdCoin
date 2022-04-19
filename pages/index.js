import React from "react";
import { Card,Button } from "semantic-ui-react";
import Layout  from "../components/Layout";
import factory from "../ethereum/factory";
import {Router,Link} from "../routes"
export const getStaticProps = async () => {
  // console.log(factory)
  const campaigns = await factory.methods.getCampaigns().call();
  return {
    props: {
      campaigns,
    },
  };
};
const CampaignIndex = ({ campaigns }) => {
  const changeRoute=()=>{
    Router.push('/campaigns/new')
  }
  let items = campaigns.map((address) => {
    return {
      header: address,
      description:<Link route={`/campaigns/${address}`}><a>View Campaign</a></Link>,
      fluid: true,
    };
  });
  return (
    <Layout>
       <h3>Open Campaigns</h3>
      <Button floated='right' content='createCampaign' icon='add circle' primary onClick={changeRoute}></Button>
      <Card.Group items={items} />
      </Layout>
  );
};
export default CampaignIndex;
