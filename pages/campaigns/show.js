import React from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import getCampaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import CampaignForm from "../../components/CampaignForm";
import {Link} from '../../routes';

const campaignShow = ({ props }) => {
  const {
    address,
    balance,
    numRequests,
    approversCount,
    minContribution,
    manager,
  } = props;
  const items = [
    {
      header: web3.utils.fromWei(balance, "ether"),
      meta: "Balance of Campaign",
      description:
        "This is the current balance of the Campaign i.e how much people have contributed to this project",
    },
    {
      header: numRequests,
      meta: "Number of requests",
      description:
        "Requests made by the manager for transferring money to the respective recipient",
    },
    {
      header: approversCount,
      meta: "Number of contributors",
      description:
        "Number of people who have already contributed to this Campaign",
    },
    {
      header: minContribution,
      meta: "Minimum Contribution",
      description:
        "Minimum funds you have to provide to become a contributor to this campaign in Wei",
    },
    {
      header: manager,
      meta: "Manager",
      description: "This is the address of the manager of this campaign",
      style: { overflowWrap: "break-word" },
    },
  ];
  return (
    <Layout>
      <h1>Campaign Details</h1>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Card.Group items={items} />
          </Grid.Column>
          <Grid.Column width={6}>
            <CampaignForm address={address}></CampaignForm>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Link route={`/campaigns/${address}/requests`}>
          <a>
          <Button primary content="View Requests"></Button>
          </a>
          </Link>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};
campaignShow.getInitialProps = async (props) => {
  const campaignAddress = props.query.address;
  console.log(campaignAddress);
  const campaign = getCampaign(campaignAddress);
  const summary = await campaign.methods.campaignSummary().call();
  console.log(summary);
  return {
    props: {
      address: props.query.address,
      balance: summary[0],
      numRequests: summary[1],
      approversCount: summary[2],
      minContribution: summary[3],
      manager: summary[4],
    },
  };
};
export default campaignShow;
