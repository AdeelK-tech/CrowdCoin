import React from 'react';
import Layout from '../../../components/Layout';
import {Link} from '../../../routes';
import { Button } from 'semantic-ui-react';
const viewRequests=(props)=>{

    return(
    <Layout>
        <h1>View Requests</h1>
        <Link route={`/campaigns/${props.address}/requests/new`}>
            <a>
                <Button secondary>Create Request</Button>
            </a>
        </Link>
    </Layout>
    )
}
viewRequests.getInitialProps=(props)=>{
    const address=props.query.address;
    return{
        address
    }
}
export default viewRequests