const routes=require('next-routes')();
routes
.add('/campaigns/new','/campaigns/new')
.add('/campaigns/:address','/campaigns/show')
.add('/campaigns/:address/requests',"/campaigns/requests/view")
.add('/campaigns/:address/requests/new','/campaigns/requests/new')

module.exports=routes;