import React from "react";
import { Card,Button } from "semantic-ui-react";
import Layout  from "../components/Layout";
import factory from "../ethereum/factory";
export const getStaticProps = async () => {
  const campaigns = await factory.methods.getCampaigns().call();
  return {
    props: {
      campaigns,
    },
  };
};
const CampaignIndex = ({ campaigns }) => {
  let items = campaigns.map((address) => {
    return {
      header: address,
      description: <a>View Campaign</a>,
      fluid: true,
    };
  });
  return (
    <Layout>
       <h3>Open Campaigns</h3>
      <Button floated='right' content='createCampaign' icon='add circle' primary></Button>
      <Card.Group items={items} />
      </Layout>
  );
};
export default CampaignIndex;
