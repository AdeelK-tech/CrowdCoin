import {React,useState} from "react";
import getCampaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Button, Form, Input,Message} from "semantic-ui-react";
import {Router} from "../routes";

const CampaignForm=({address})=>{
    const [contribution,setContribution]=useState(0);
    const[loading,setLoading]=useState(false);
    const [error,setError]=useState('')

    const contributionChangeHandler=({target})=>{
        const {value}=target;
        setContribution(value);
    }
    const contributeToCampaign=async(e)=>{
        setError('')
        setLoading(true)
        
        e.preventDefault()
        const campaign=getCampaign(address);
        
        try {
            const accounts=await web3.eth.requestAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(contribution,'ether')
                
            }) 
            Router.replaceRoute(`/campaigns/${address}`)
        } catch (error) {
            console.log('eerrorrr')
            setError(error)
        }
        setLoading(false);
     }
    return(
        <Form onSubmit={contributeToCampaign} error={!!error}>
            <Form.Field>
                <label>Contribute to this Campaign</label>
                <Input
                label="ether"
                labelPosition="right"
                onChange={contributionChangeHandler}
                value={contribution}
                />
            </Form.Field>
            <Message error header='Something went wrong' content={error}></Message>
            <Button content="contribute!" secondary loading={loading}></Button>
        </Form>
    )
}
export default CampaignForm