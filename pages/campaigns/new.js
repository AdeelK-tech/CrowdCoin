import React,{useState} from "react";
import Layout from "../../components/Layout"
import {Button, Form,Input,Message} from 'semantic-ui-react'
import {Router} from '../../routes'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'


const CampaignForm=()=>{
    const [minContribution,setMinContribution]=useState(0);
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(false)
    const onInputChange=(e)=>{
        setMinContribution(e.target.value)
        // console.log(minContribution)
    }
    const onFormSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true) 
        setError('')
        try {
        const accounts=await web3.eth.requestAccounts()
        await factory.methods.createCampaign(minContribution).send({from:accounts[0]})
        Router.pushRoute('/')
        }
        catch(err){
            setError(err.message)
        }
        setLoading(false)
    }
    return(
        <Layout>
        <h1>Create A Campaign</h1>
        <Form onSubmit={onFormSubmit} error={!!error}>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input style={{width:'500px'}} 
                label='Wei' 
                labelPosition="right"
                value={minContribution}
                onChange={onInputChange}
                ></Input>
            </Form.Field>
            <Message error header='Something went wrong' content={error}></Message>
            <Button primary loading={loading}>Create !</Button>
        </Form>
        </Layout>
    )
}
export default CampaignForm